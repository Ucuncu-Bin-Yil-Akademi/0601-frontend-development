<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Öğrenciler ({{ students?.length || 0 }})</h1>

      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Yeni Öğrenci Ekle"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Yeni Öğrenci ekle">
            <div class="p-5">
              <v-text-field
                label="Öğrenci Adı"
                v-model="newStudent.name"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Öğrenci Soyadı"
                v-model="newStudent.lastName"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Email"
                v-model="newStudent.mail"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Telefon Numarası"
                v-model="newStudent.phoneNumber"
                variant="solo"
              ></v-text-field>

              <v-select
                label="Kurs Seçiniz"
                :items="courses"
                :item-title="(item) => `${item.courseName}`"
                item-value="_id"
                variant="solo"
                multiple
                v-model="newStudent.courses"
              ></v-select>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="primary" @click="handleCreateStudent">
                Öğrenci Oluştur
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>

    <div class="my-5 grid grid-cols-3 gap-3 mt-10">
      <div
        class="flex flex-col p-5 rounded border bg-gray-100"
        v-for="student in students"
      >
        <span>{{ student.name }} {{ student.lastName }}</span>
        <span> <b>Telefon Numarası:</b>{{ student.phoneNumber }} </span>

        <span> <b>Email: </b> {{ student.mail }} </span>

        <div class="flex gap-3 justify-end mt-5">
          <v-btn color="red" @click="handleDeleteStudent(student._id)">
            Öğrenciyi Sil
          </v-btn>

          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                color="surface-variant"
                text="Öğrenciyi Güncelle"
                @click="newStudent = { ...student }"
                variant="flat"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Öğrenciyi Güncelle">
                <div class="p-5">
                  <v-text-field
                    label="Öğrenci Adı"
                    v-model="newStudent.name"
                    variant="solo"
                  ></v-text-field>

                  <v-text-field
                    label="Öğrenci Soyadı"
                    v-model="newStudent.lastName"
                    variant="solo"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    v-model="newStudent.mail"
                    variant="solo"
                  ></v-text-field>

                  <v-text-field
                    label="Telefon Numarası"
                    v-model="newStudent.phoneNumber"
                    variant="solo"
                  ></v-text-field>

                  <v-select
                    label="Kurs Seçiniz"
                    :items="courses"
                    :item-title="(item) => `${item.courseName}`"
                    item-value="_id"
                    variant="solo"
                    multiple
                    v-model="newStudent.courses"
                  ></v-select>
                </div>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="primary"
                    @click="handleUpdateStudent(newStudent._id)"
                  >
                    Öğrenciyi Güncelle
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

const snackbar = ref(false);
const text = ref("");

const handleUpdateStudent = async (studentId) => {
  try {
    const UpdateResponse = await axios.put(
      `http://localhost:3001/students/${studentId}/update`,
      {
        ...newStudent.value,
      }
    );

    if (UpdateResponse?.status === 200) {
      snackbar.value = true;
      text.value = "Eğitim başarıyla güncellendi";
      await handleGetStudents();
    }
  } catch (err) {}
};

const handleDeleteStudent = async (studentId) => {
  try {
    Swal.fire({
      title: "Öğrenciyi silmek istediğinize emin misiniz?",
      showDenyButton: true,
      confirmButtonText: `Sil`,
      denyButtonText: `Vazgeç`,
    }).then(async (response) => {
      if (response?.isConfirmed) {
        const DeleteResponse = await axios.delete(
          `http://localhost:3001/students/${studentId}/delete`
        );

        if (DeleteResponse.status === 204) {
          snackbar.value = true;
          text.value = "Öğrenci başarıyla silindi";

          await handleGetStudents();
        } else {
          snackbar.value = true;
          text.value = "Öğrenci silinirken bir hata oluştu";
        }
      }
    });
  } catch (err) {
    snackbar.value = true;
    text.value = "Öğrenci silinirken bir hata oluştu";
  }
};

const newStudent = ref({
  name: "",
  lastName: "",
  mail: "",
  phoneNumber: "",
  courses: [],
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

const handleCreateStudent = async () => {
  try {
    const responseNewStudent = await axios.post(
      "http://localhost:3001/students/create",
      newStudent.value
    );

    if (responseNewStudent.status === 201) {
      snackbar.value = true;
      text.value = "Öğrenci başarıyla oluşturuldu";

      await handleGetStudents();
    } else {
      snackbar.value = true;
      text.value = "Öğrenci oluşturulurken bir hata oluştu";
    }
  } catch (e) {
    snackbar.value = true;
    text.value = "Öğrenci oluşturulurken bir hata oluştu";
  }
};

onMounted(async () => {
  await handleGetStudents();
  await handleGetCourses();
});
</script>
