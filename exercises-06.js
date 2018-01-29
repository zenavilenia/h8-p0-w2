// 1. Melakukan Looping Menggunakan While
var number = 0;

console.log("LOOPING PERTAMA");
while(number < 20) {
  number+=2;
  console.log(number + " - I love coding");
}

console.log("LOOPING KEDUA");
while(number >= 2) {
  console.log(number + " - I will become fullstack developer");
  number-=2;
}

// ===========================================

// 2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
for(var i = 20; i >= 1; i--) {
  console.log(i + " - I will become fullstack developer");
}

// ============================================

// 3. Angka Ganjil dan Genap
// Ganjil genap
for(var i = 1; i <= 100; i++) {
  if(i%2 == 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

// Pertambahan counter 2
for(var i = 1; i <= 100; i+=2) {
  if(i%3 == 0) {
    console.log(i + " KELIPATAN 3");
  } else {
    console.log("");
  }
}

// Pertambahan counter 5
for(var i = 1; i <= 100; i+=5) {
  if(i%6 == 0) {
    console.log(i + " KELIPATAN 6");
  } else {
    console.log("");
  }
}

// Pertambahan counter 9
for(var i = 1; i <= 100; i+=9) {
  if(i%10 == 0) {
    console.log(i + " KELIPATAN 10");
  } else {
    console.log("");
  }
}
