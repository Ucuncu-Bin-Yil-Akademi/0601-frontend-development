const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const AdminModel = require("./models/Admins");
const app = express();
const mongoose = require("mongoose");

// BEGIN ## NOT: Bu kısım gönderilen post/put ve delete isteklerindeki request body'sini okuyabilmek için kullanılır.
const httpServer = http.createServer(app);
app.use(express.json());
// END ## NOT: Bu kısım gönderilen post/put ve delete isteklerindeki request body'sini okuyabilmek için kullanılır.

// BEGIN ## MONGODB BAĞLANTISI

mongoose.connect("MONGODB CONNECTION STRING DEĞERİNİNİZ BURAYA YAPIŞTIRINIZ", {
  useNewUrlParser: true,
});

//END ## MONGODB BAĞLANTISI

const port = 3000;

let users = [
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

let admins = [
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

app.use(bodyParser.json());

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

app.get("/admins", async (req, res) => {
  /*  try {
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
  } */

  try {
    const adminsMongo = await AdminModel.find();
    res.json({
      result: {
        isSuccess: true,
        exceptionDetail: "",
      },
      data: adminsMongo,
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

app.post("/admins", async (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    res.status(400).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Gerekli parametreler gönderilmedi!",
      },
      data: [],
    });

    return;
  }

  const newAdmin = await AdminModel.create({
    id,
    name,
  });

  res.status(201).json({
    message: "Admin başarıyla oluşturuldu!",
    data: newAdmin,
  });

  /*   admins.push({
    id,
    name,
  });

  res.json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: admins,
  }); */
});

app.delete("/admins", async (req, res) => {
  console.log(req.body);
  const { id } = req.body;

  if (!id) {
    res.status(400).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Gerekli parametreler gönderilmedi!",
      },
      data: [],
    });

    return;
  }

  const findAdmin = await AdminModel.find({
    id: id,
  });

  if (!findAdmin) {
    res.status(404).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Admin bulunamadı!",
      },
      data: [],
    });
    return;
  }

  await AdminModel.deleteOne({
    id: id,
  });

  res.json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: findAdmin,
  });

  /* admins = admins.filter((admin) => admin.id != id);

  res.json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: admins,
  }); */
});

app.put("/admins", async (req, res) => {
  console.log(req.body);
  const { id, name } = req.body;

  if (!id) {
    res.status(400).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Gerekli parametreler gönderilmedi!",
      },
      data: [],
    });

    return;
  }

  const findAdmin = await AdminModel.find({
    id: id,
  });

  if (!findAdmin) {
    res.status(404).json({
      result: {
        isSuccess: false,
        exceptionDetail: "Admin bulunamadı!",
      },
      data: [],
    });
    return;
  }

  await AdminModel.updateOne(
    {
      id: id, // Filtreleme yapılacak alan
    },
    {
      name: name, // Güncellenecek alan
    }
  );

  res.json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: findAdmin,
  });

  /*   admins.map((admin) => {
    if (admin.id == id) {
      admin.name = req.body.name;
    }
  });

  res.json({
    result: {
      isSuccess: true,
      exceptionDetail: "",
    },
    data: admins,
  }); */
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

httpServer.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde başlatıldı.`);
});
