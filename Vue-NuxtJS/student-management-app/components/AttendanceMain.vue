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
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";

const courses = ref([""]);
const attendanceDateDialog = ref(false);

const newAttendanceForm = ref({
  classId: "",
  attendanceDate: "",
});

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

    console.log(attendanceResponse.data);
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

onMounted(async () => {
  await handleGetCourses();
});
</script>
