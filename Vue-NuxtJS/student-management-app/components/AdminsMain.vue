<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Yöneticiler ({{ admins?.length || 0 }})</h1>

      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Yeni Yönetici Ekle"
            variant="flat"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Yeni Yönetici ekle">
            <div class="p-5">
              <v-text-field
                label="Yönetici Adı"
                v-model="newAdmin.name"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Yönetici Soyadı"
                v-model="newAdmin.lastName"
                variant="solo"
              ></v-text-field>

              <div class="flex gap-5">
                <v-text-field
                  label="Şifre"
                  v-model="newAdmin.password"
                  variant="solo"
                  type="password"
                ></v-text-field>

                <v-text-field
                  label="Şifrenizi tekrar giriniz"
                  v-model="newAdmin.repassword"
                  variant="solo"
                  type="password"
                ></v-text-field>
              </div>

              <v-text-field
                label="Email"
                v-model="newAdmin.mail"
                variant="solo"
              ></v-text-field>

              <v-text-field
                label="Telefon Numarası"
                v-model="newAdmin.phoneNumber"
                variant="solo"
              ></v-text-field>

              <v-select
                label="Yetki"
                :items="roles"
                :item-title="(item) => `${item.title}`"
                item-value="value"
                variant="solo"
                v-model="newAdmin.role"
              ></v-select>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="primary" @click="handleCreateAdmin">
                Yönetici Oluştur
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>

    <div class="my-5 grid grid-cols-3 gap-3 mt-10">
      <div
        class="flex flex-col p-5 rounded border bg-gray-100"
        v-for="admin in admins"
      >
        <span>{{ admin.name }} {{ admin.lastName }}</span>
        <span> <b>Telefon Numarası:</b>{{ admin.phoneNumber }} </span>

        <span> <b>Email: </b> {{ admin.mail }} </span>

        <div class="flex gap-3 justify-end mt-5">
          <v-btn color="red" @click="handleDeleteAdmin(admin._id)">
            Yöneticiyi Sil
          </v-btn>
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
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const admins = ref([]);
const snackbar = ref(false);
const text = ref("");
const roles = ref([
  { title: "Yönetici", value: "manager" },
  { title: "Editör", value: "editor" },
  { title: "Eğitmen", value: "instructor" },
]);

const handleDeleteAdmin = async (adminId) => {
  try {
    Swal.fire({
      title: "Yöneticiyi silmek istediğinize emin misiniz?",
      showDenyButton: true,
      confirmButtonText: `Sil`,
      denyButtonText: `Vazgeç`,
    }).then(async (response) => {
      if (response?.isConfirmed) {
        const DeleteResponse = await axios.delete(
          `http://localhost:3001/admins/${adminId}/delete`
        );

        if (DeleteResponse.status === 200) {
          snackbar.value = true;
          text.value = "Yönetici başarıyla silindi";

          await handleGetAdmins();
        } else {
          snackbar.value = true;
          text.value = "Yönetici silinirken bir hata oluştu";
        }
      }
    });
  } catch (err) {
    snackbar.value = true;
    text.value = "Yönetici silinirken bir hata oluştu";
  }
};

const newAdmin = ref({
  name: "",
  lastName: "",
  mail: "",
  phoneNumber: "",
  role: "",
});

const handleGetAdmins = async () => {
  try {
    const adminsResponse = await axios.get("http://localhost:3001/admins");

    if (adminsResponse.status === 200) {
      admins.value = adminsResponse.data.admins;
    }
  } catch (e) {
    console.log(e);
  }
};

const handleCreateAdmin = async () => {
  try {
    if (newAdmin.value.password !== newAdmin.value.repassword) {
      snackbar.value = true;
      text.value = "Şifreler uyuşmuyor";
      return;
    }

    delete newAdmin.value.repassword;

    const responsenewAdmin = await axios.post(
      "http://localhost:3001/admins/create",
      newAdmin.value
    );

    if (responsenewAdmin.status === 201) {
      snackbar.value = true;
      text.value = "Yönetici başarıyla oluşturuldu";

      await handleGetAdmins();
    } else {
      snackbar.value = true;
      text.value = "Yönetici oluşturulurken bir hata oluştu";
    }
  } catch (e) {
    snackbar.value = true;
    text.value = "Yönetici oluşturulurken bir hata oluştu";
  }
};

onMounted(async () => {
  await handleGetAdmins();
});
</script>
