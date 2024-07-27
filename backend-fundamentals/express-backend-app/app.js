const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Mehmet",
  },
  {
    id: 3,
    name: "Ayşe",
  },
];

const admins = [
  {
    id: 1,
    name: "Admin 1",
  },
  {
    id: 2,
    name: "Admin 2",
  },
];

// START: MIDDLEWARE TANIMLAMASI
// Middleware yapısı, gelen isteklerin işlenmeden önce araya girerek isteği işleyebileceğimiz bir yapıdır.
app.use((req, res, next) => {
  console.log("Middleware çalıştı! Birazdan istek işlenecek");
  const userTokenCode = req?.headers?.authorization;

  if (!userTokenCode) {
    res.status(401).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Kullanıcı bu işlem için yetkilendirilmedi!",
      },
      data: [],
    });
    return;
  }

  next(); // Middleware işlemi bittiğinde bir sonraki işleme geçmek için next fonksiyonunu çağırıyoruz.
});
// END: MIDDLEWARE TANIMLAMASI

app.get("/contents", (req, res) => {
  console.log("İstek işleniyor...");
  res.send("İçerikler getirildi!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/admins", (req, res) => {
  try {
    res.json({
      result: {
        isSuccess: true,
        exceptionDetail: "",
      },
      data: tanimliOlmayanBirDegiskenGirerekHatayaZorladik,
    });
  } catch (err) {
    res.json({
      result: {
        isSuccess: false,
        exceptionDetail: err.message,
      },
      data: [],
    });
  }
});

app.get("/admin", (req, res) => {
  const adminId = req?.query?.id;
  if (!adminId) {
    res.status(400).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Admin id bilgisi gönderilmedi!",
      },
      data: [],
    });
    return;
  }

  const foundedAdmin = admins.find((admin) => admin.id == adminId);
  if (!foundedAdmin) {
    res.status(404).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Admin bulunamadı!",
      },
      data: [],
    });
    return;
  }

  res.status(200).json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: foundedAdmin,
  });
});

app.get("/users/:id", (req, res) => {
  const userId = req?.params?.id;
  const foundedUser = users.find((user) => user.id == userId);
  if (!foundedUser) {
    res.status(404).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Kullanıcı bulunamadı!",
      },
      data: [],
    });

    return;
  }

  res.json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: foundedUser,
  });

  res.send("Kullanıcı getirildi!");
  return;
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde başlatıldı.`);
});
