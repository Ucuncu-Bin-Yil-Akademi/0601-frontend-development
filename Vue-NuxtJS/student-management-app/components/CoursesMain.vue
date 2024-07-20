<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Eğitimler ({{ courses?.length || 0 }})</h1>

      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Yeni Eğitim Ekle"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Yeni Eğitim Oluştur">
            <div class="p-5">
              <v-text-field
                label="Eğitim Adı"
                v-model="newCourse.courseName"
                variant="solo"
              ></v-text-field>

              <v-date-input
                label="Başlangıç Tarihi"
                prepend-icon=""
                v-model="newCourse.startDate"
                variant="solo"
              ></v-date-input>

              <v-date-input
                label="Bitiş Tarihi"
                prepend-icon=""
                v-model="newCourse.endDate"
                variant="solo"
              ></v-date-input>

              <v-text-field
                label="Eğitim Süresi (saat)"
                variant="solo"
                v-model="newCourse.totalHours"
              ></v-text-field>

              <v-select
                label="Öğrenci Seçiniz"
                :items="students"
                :item-title="(item) => `${item.name} ${item.lastName}`"
                item-value="_id"
                variant="solo"
                multiple
                v-model="newCourse.students"
              ></v-select>

              <v-select
                label="Eğitmen Seçiniz"
                :items="instructors"
                :item-title="(item) => `${item.name} ${item.lastName}`"
                item-value="_id"
                v-model="newCourse.instructor"
                variant="solo"
              ></v-select>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="primary" @click="handleCreateCourse">
                Eğitimi Oluştur
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>

    <div class="my-5 grid grid-cols-3 gap-3 mt-10">
      <div
        class="flex flex-col p-5 rounded border bg-gray-100"
        v-for="course in courses"
      >
        <span>{{ course.courseName }}</span>
        <span> Toplam {{ course.students?.length || 0 }} öğrenci kayıtlı </span>
        <span>
          <b>Kurs Tarihi:</b>
          {{ moment(course?.startDate).format("DD-MM-YYYY") }} -
          {{ moment(course?.endDate).format("DD-MM-YYYY") }}
        </span>
        <span>
          <b>Eğitmen: </b> {{ course.instructor.name }}
          {{ course.instructor.lastName }}
        </span>

        <div class="flex gap-3 justify-end mt-5">
          <v-btn color="red" @click="handleDeleteCourse(course._id)">
            Eğitimi Sil
          </v-btn>

          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                color="surface-variant"
                text="Eğitimi Güncelle"
                @click="newCourse = { ...course }"
                variant="flat"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Eğitimi Güncelle">
                <div class="p-5">
                  <v-text-field
                    label="Eğitim Adı"
                    v-model="newCourse.courseName"
                    variant="solo"
                  ></v-text-field>

                  <v-date-input
                    label="Başlangıç Tarihi"
                    prepend-icon=""
                    v-model="newCourse.startDate"
                    variant="solo"
                  ></v-date-input>

                  <v-date-input
                    label="Bitiş Tarihi"
                    prepend-icon=""
                    v-model="newCourse.endDate"
                    variant="solo"
                  ></v-date-input>

                  <v-text-field
                    label="Eğitim Süresi (saat)"
                    variant="solo"
                    v-model="newCourse.totalHours"
                  ></v-text-field>

                  <v-select
                    label="Öğrenci Seçiniz"
                    :items="students"
                    :item-title="(item) => `${item.name} ${item.lastName}`"
                    item-value="_id"
                    variant="solo"
                    multiple
                    v-model="newCourse.students"
                  ></v-select>

                  <v-select
                    label="Eğitmen Seçiniz"
                    :items="instructors"
                    :item-title="(item) => `${item.name} ${item.lastName}`"
                    item-value="_id"
                    v-model="newCourse.instructor"
                    variant="solo"
                  ></v-select>
                </div>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="primary"
                    @click="handleUpdateCourse(newCourse._id)"
                  >
                    Eğitimi Güncelle
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </div>

    <v-snackbar v-model="snackbar" location="top">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const courses = ref([]);
const students = ref([]);
const instructors = ref([]);

const snackbar = ref(false);
const text = ref("");

const handleUpdateCourse = async (courseId) => {
  try {
    const UpdateResponse = await axios.put(
      `http://localhost:3001/classes/${courseId}/update`,
      {
        ...newCourse.value,
      }
    );

    if (UpdateResponse?.status === 200) {
      snackbar.value = true;
      text.value = "Eğitim başarıyla güncellendi";
      await handleGetCourses();
    }
  } catch (err) {}
};

const handleDeleteCourse = async (courseId) => {
  try {
    Swal.fire({
      title: "Eğitimi silmek istediğinize emin misiniz?",
      showDenyButton: true,
      confirmButtonText: `Sil`,
      denyButtonText: `Vazgeç`,
    }).then(async (response) => {
      if (response?.isConfirmed) {
        const DeleteResponse = await axios.delete(
          `http://localhost:3001/classes/${courseId}/delete`
        );

        if (DeleteResponse.status === 200) {
          snackbar.value = true;
          text.value = "Eğitim başarıyla silindi";

          await handleGetCourses();
        } else {
          snackbar.value = true;
          text.value = "Eğitim silinirken bir hata oluştu";
        }
      }
    });
  } catch (err) {
    snackbar.value = true;
    text.value = "Eğitim silinirken bir hata oluştu";
  }
};

const newCourse = ref({
  courseName: "",
  startDate: null,
  endDate: null,
  totalHours: "",
  students: [],
  instructor: "",
});

const handleGetStudents = async () => {
  try {
    const studentsResponse = await axios.get("http://localhost:3001/students");

    if (studentsResponse.status === 200) {
      students.value = studentsResponse.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const handleGetInstructors = async () => {
  try {
    const instructorsResponse = await axios.get(
      "http://localhost:3001/instructors"
    );

    if (instructorsResponse.status === 200) {
      instructors.value = instructorsResponse.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const handleGetCourses = async () => {
  try {
    const coursesResponse = await axios.get("http://localhost:3001/classes");

    if (coursesResponse.status === 200) {
      courses.value = coursesResponse.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const handleCreateCourse = async () => {
  try {
    const responseNewCourse = await axios.post(
      "http://localhost:3001/classes/create",
      {
        ...newCourse.value,
        startDate: moment(newCourse.value.startDate).format("YYYY-MM-DD"),
        endDate: moment(newCourse.value.endDate).format("YYYY-MM-DD"),
      }
    );

    if (responseNewCourse.status === 201) {
      snackbar.value = true;
      text.value = "Eğitim başarıyla oluşturuldu";

      await handleGetCourses();
    } else {
      snackbar.value = true;
      text.value = "Eğitim oluşturulurken bir hata oluştu";
    }
  } catch (e) {
    snackbar.value = true;
    text.value = "Eğitim oluşturulurken bir hata oluştu";
  }
};

onMounted(async () => {
  await handleGetStudents();
  await handleGetInstructors();
  await handleGetCourses();
});
</script>
