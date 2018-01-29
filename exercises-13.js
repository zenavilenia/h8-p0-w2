function xo(str) {
  // you can only write your code here!

  var jumlahX = str.match(/x/g).length;
  var jumlahO = str.match(/o/g).length;

  return (jumlahX === jumlahO) ? true : false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
