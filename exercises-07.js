// 1. Menyusun Barisan Bintang
var rows1 = 5;

for(var i = 0; i < rows1; i++) {
  console.log("*");
}

// ==========================================

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var bintang2 = "";
for(var i = 0; i < rows2; i++) {
  for(var j = 0; j < rows2; j++) {
    bintang2 += "*";
  }
  bintang2 += "\n";
}

console.log(bintang2);

// ==========================================

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var bintang3 = "";
for(var i = 0; i < rows2; i++) {
  for(var j = 0; j <= i; j++) {
      bintang3 += "*";
  }
  bintang3 += "\n";
}

console.log(bintang3);
