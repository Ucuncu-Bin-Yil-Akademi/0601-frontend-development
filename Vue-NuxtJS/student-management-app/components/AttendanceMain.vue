<template>
  <div>
    <h1 class="text-2xl">Yoklama Sistemi</h1>

    <div class="flex items-center gap-5 justify-between mt-5 w-full">
      <v-select
        class="w-full"
        label="Kurs Seçiniz"
        :items="courses"
        :item-title="(item) => `${item?.courseName ? item?.courseName : ''}`"
        item-value="_id"
        variant="solo"
        placeholder="Lütfen kurs seçiniz"
        v-model="newAttendanceForm.classId"
      ></v-select>

      <VueDatePicker
        class="w-full"
        size="large"
        v-model="newAttendanceForm.attendanceDate"
      ></VueDatePicker>
    </div>
    <div class="w-full">
      <v-btn class="w-full" color="primary" @click="handleGetAttendance"
        >Yoklamayı Getir</v-btn
      >
    </div>
  </div>
  <div>
    <div class="my-10 w-full">
      <table class="min-w-full text-left">
        <thead class="border bg-white">
          <tr class="w-full">
            <th class="p-5">Yoklama Durumu</th>
            <th class="p-5">Öğrenci Adı</th>
            <th class="p-5">Öğrenci Soyadı</th>
            <th class="p-5">Öğrenci Numarası</th>
            <th class="p-5">Öğrenci Email</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="border-b bg-gray-700 text-white"
            v-for="student in courses.find(
              (course) => course._id === selectedCourse
            )?.students"
          >
            <td class="p-5">
              <input
                type="checkbox"
                :checked="existingStudents?.includes(student._id)"
                @change="
                  existingStudents.includes(student._id)
                    ? (existingStudents = existingStudents?.filter(
                        (id) => id !== student._id
                      ))
                    : existingStudents.push(student._id)
                "
              />
              <span class="mx-3">Mevcut</span>
            </td>
            <td class="p-5">{{ student.name }}</td>
            <td class="p-5">{{ student.lastName }}</td>
            <td class="p-5">{{ student.phoneNumber }}</td>
            <td class="p-5">{{ student.mail }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex w-full justify-end mt-5">
        <v-btn color="primary" @click="handleCreateAttendance"
          >Yoklamayı Kaydet</v-btn
        >
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";

const courses = ref([""]);
const existingStudents = ref([]);
const snackbar = ref(false);
const text = ref("");

const newAttendanceForm = ref({
  classId: "",
  attendanceDate: "",
});

const selectedCourse = ref("");

const handleCreateAttendance = async () => {
  try {
    const newAttendanceResponse = await axios.post(
      "http://localhost:3001/attendance/record",
      {
        attendanceDate: moment(newAttendanceForm.value.attendanceDate).format(
          "YYYY-MM-DD"
        ),
        classId: selectedCourse.value,
        students: existingStudents.value,
      }
    );

    if (newAttendanceResponse.status === 200) {
      snackbar.value = true;
      text.value = "Yoklama başarıyla kaydedildi.";
      return;
    }
  } catch (e) {
    snackbar.value = true;
    text.value = "Yoklama kaydedilirken bir hata oluştu.";
  }
};

const handleGetAttendance = async () => {
  try {
    const attendanceResponse = await axios.post(
      `http://localhost:3001/attendance/get`,
      {
        attendanceDate: moment(newAttendanceForm.value.attendanceDate).format(
          "YYYY-MM-DD"
        ),
        classId: newAttendanceForm.value.classId,
      }
    );

    if (attendanceResponse.status === 200) {
      selectedCourse.value = newAttendanceForm.value.classId;

      existingStudents.value = attendanceResponse?.data?.[0]?.students;
      snackbar.value = true;
      text.value = "Yoklama başarıyla getirildi.";
      return;
    }
  } catch (e) {
    snackbar.value = true;
    text.value = "Yoklama getirilirken bir hata oluştu.";
    return;
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

onMounted(async () => {
  await handleGetCourses();
});
</script>
