const dateVariable = new Date();
let day;
let month;

console.log(dateVariable);

const yearInfo = dateVariable.getFullYear();
console.log("Yıl: ", yearInfo);

const monthInfo = dateVariable.getMonth();
console.log("Ay:", monthInfo);

const dayInfo = dateVariable.getDay();
console.log("Gün", dayInfo);

const monthDay = dateVariable.getDate();
console.log("Ayın günü: ", monthDay);

const hourInfo = dateVariable.getHours();
console.log("Saat:", hourInfo);

const minuteInfo = dateVariable.getMinutes();
console.log("Dakika:", minuteInfo);

switch (dayInfo) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
  default:
    day = "Gün belirlenemedi";
    break;
}

console.log(day);

switch (monthInfo) {
  case 0:
    month = "Ocak";
  case 1:
    month = "Şubat";
    break;
  case 2:
    month = "Mart";
    break;
  case 3:
    month = "Nisan";
    break;
  case 4:
    month = "Mayıs";
    break;
  case 5:
    month = "Haziran";
    break;
  case 6:
    month = "Temmuz";
    break;
  case 7:
    month = "Ağustos";
    break;
  case 8:
    month = "Eylül";
    break;
  case 9:
    month = "Ekim";
    break;
  case 10:
    month = "Kasım";
    break;
  case 11:
    month = "Aralık";
    break;
  default:
    month = "Gün belirlenemedi";
    break;
}

console.log(month);

console.log(
  "Bugünün tarihi: ",
  `${month} ${yearInfo}, ${day} - ${hourInfo}:${minuteInfo}`
);

console.log("Gün/Ay/Yıl", `${monthDay} ${month} ${yearInfo}`);

console.log(`${monthDay}/${monthInfo + 1}/${yearInfo}`);

// MomentJS

const date2 = moment().locale("tr");
console.log(date2.format("DD/MMMM/YYYY"));

const date3 = date2.add(10, "days").add(3, "years");
console.log(date3.format("DD/MM/YYYY"));
