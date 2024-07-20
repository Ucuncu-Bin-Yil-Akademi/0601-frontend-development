<script setup>
import { ref } from "vue";
import AdminsMain from "~/components/AdminsMain.vue";
import AttendanceMain from "~/components/AttendanceMain.vue";
import CoursesMain from "~/components/CoursesMain.vue";
import DashboardMain from "~/components/DashboardMain.vue";
import StudentsMain from "~/components/StudentsMain.vue";

let currentMenuItem = ref(0);

const menuItems = ref([
  {
    name: "Anasayfa",
    allowedRoles: ["manager", "instructor", "editor"],
    component: DashboardMain,
  },
  {
    name: "Eğitimler",
    allowedRoles: ["manager", "editor"],
    component: CoursesMain,
  },
  {
    name: "Öğrenciler",
    allowedRoles: ["manager", "editor"],
    component: StudentsMain,
  },
  {
    name: "Yoklama",
    allowedRoles: ["manager", "instructor", "editor"],
    component: AttendanceMain,
  },
  {
    name: "Yöneticiler",
    allowedRoles: ["manager"],
    component: AdminsMain,
  },
]);
</script>

<template>
  <div>
    <div
      class="w-full bg-gray-200 p-3 flex items-center justify-between shadow"
    >
      <img
        src="https://www.ucuncubinyil.com/wp-content/uploads/2023/10/ucuncubinyil-logo.png"
      />

      <a href="/" class="bg-blue-800 text-white px-5 py-3 rounded">Çıkış Yap</a>
    </div>

    <div class="w-full flex justify-center items-start p-5 gap-5">
      <div class="w-1/6 bg-gray-200 p-3 rounded">
        <ul class="flex flex-col gap-3">
          <li
            v-for="(menuItem, index) in menuItems"
            :class="`${
              currentMenuItem === index ? 'bg-gray-800' : 'bg-gray-600'
            } text-white rounded p-3 cursor-pointer`"
            @click="currentMenuItem = index"
          >
            {{ menuItem.name }}
          </li>
        </ul>
      </div>

      <div class="w-5/6 bg-gray-200 p-3 rounded">
        <div>
          <component :is="menuItems[currentMenuItem].component" />
        </div>
      </div>
    </div>
  </div>
</template>
