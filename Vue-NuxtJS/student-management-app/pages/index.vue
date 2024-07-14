<template>
  <div class="w-screen h-screen bg-gray-100">
    <div class="flex justify-center items-center h-full">
      <div class="bg-gray-200 p-5 rounded-lg w-1/2 shadow-lg">
        <div class="flex flex-col items-center my-5">
          <img
            src="https://www.ucuncubinyil.com/wp-content/uploads/2023/10/ucuncubinyil-logo.png"
          />
          <h1 class="text-xl font-semibold">Giriş Yap</h1>
        </div>
        <div class="flex flex-col gap-5 my-10">
          <input
            type="email"
            placeholder="E-mail"
            class="border rounded p-3"
            v-model="email"
          />
          <input
            type="password"
            placeholder="Şifre"
            class="border rounded p-3"
            v-model="password"
          />
          <button
            class="bg-gray-800 text-white p-3 rounded mt-5"
            @click="handleLogin"
          >
            Giriş Yap
          </button>
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
import { ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

const snackbar = ref(false);
const text = ref("");

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:3001/admins/login", {
      mail: email.value,
      password: password.value,
    });

    if (response.status !== 200) {
      text.value = "Giriş Başarısız";
      snackbar.value = true;
    } else {
      text.value = "Giriş Başarılı";
      snackbar.value = true;
      Cookies.set("role", response.data.data.role);
    }
  } catch (error) {
    text.value = "Giriş Başarısız";
    snackbar.value = true;
  }
};
</script>
