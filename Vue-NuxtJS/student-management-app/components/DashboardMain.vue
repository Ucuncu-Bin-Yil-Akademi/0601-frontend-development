<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";

let isLoading = ref(true);
const students = ref([]);
const courses = ref([]);
const instructors = ref([]);

onMounted(async () => {
  try {
    const studentsResponse = await axios.get("http://localhost:3001/students");

    if (studentsResponse.status === 200) {
      students.value = studentsResponse.data;
    }

    const coursesResponse = await axios.get("http://localhost:3001/classes");

    if (coursesResponse.status === 200) {
      courses.value = coursesResponse.data;
    }

    const instructorsResponse = await axios.get(
      "http://localhost:3001/instructors"
    );

    if (instructorsResponse.status === 200) {
      instructors.value = instructorsResponse.data;
    }

    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    <div v-if="isLoading">
      <div class="w-full flex justify-center items-center py-10">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
    </div>

    <div class="p-5" v-else>
      <h2 class="my-5 text-2xl">İstatistikler</h2>

      <div class="grid grid-cols-3 gap-5">
        <div
          class="bg-red-700 text-white p-10 rounded flex flex-col items-center"
        >
          <span class="text-xl">Toplam Sınıflar</span>
          <span class="text-xl">{{ courses?.length || 0 }}</span>
        </div>

        <div
          class="bg-blue-900 text-white p-10 rounded flex flex-col items-center"
        >
          <span class="text-xl">Toplam Eğitmenler</span>
          <span class="text-xl">{{ instructors?.length || 0 }}</span>
        </div>

        <div
          class="bg-green-900 text-white p-10 rounded flex flex-col items-center"
        >
          <span class="text-xl">Toplam Öğrenciler</span>
          <span class="text-xl">{{ students?.length || 0 }}</span>
        </div>
      </div>

      <div>
        <h2 class="my-5 text-2xl">Son Açılan Sınıflar</h2>

        <div class="flex gap-5">
          <div
            class="flex gap-5"
            v-for="(course, index) in courses.slice(0, 6)"
          >
            <div class="flex flex-col p-5 border bg-gray-100 rounded">
              <span class="text-xl">{{ course.courseName }} </span>
              <span
                ><b
                  >Başlangıç:
                  {{ moment(course.startDate).format("DD-MM-YYYY") }}</b
                >
              </span>
              <span>Toplam {{ course.students.length }} öğrenci kayıtlı</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="my-5 text-2xl">Son Kayıt Olan Öğrenciler</h2>

        <div class="flex gap-5">
          <div class="flex gap-5" v-for="(student, index) in students">
            <div class="flex flex-col p-5 border bg-gray-100 rounded">
              <span class="text-xl">
                {{ student.name }} {{ student.lastName }}</span
              >
              <span><b>Telefon Numarası: </b> {{ student.phoneNumber }}</span>
              <span>
                Kayıtlı olduğu
                <b>{{ student.courses?.length || 0 }} adet kurs mevcut</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
