var hari = 21;
var bulan = 1;
var tahun = 1945;

switch(bulan) {
  case 1: {
    bulan = 'Januari';
    break;
  }
  case 2: {
    bulan = 'Febuari';
    break;
  }
  case 3: {
    bulan = 'Maret';
    break;
  }
  case 4: {
    bulan = 'April';
    break;
  }
  case 5: {
    bulan = 'Mei';
    break;
  }
  case 6: {
    bulan = 'Juni';
    break;
  }
  case 7: {
    bulan = 'Juli';
    break;
  }
  case 8: {
    bulan = 'Agustus';
    break;
  }
  case 9: {
    bulan = 'September';
    break;
  }
  case 10: {
    bulan = 'Oktober';
    break;
  }
  case 11: {
    bulan = 'Nobember';
    break;
  }
  case 12: {
    bulan = 'Desember';
    break;
  }
  default: {
    bulan = "Error!";
  }
}

console.log(hari + " " + bulan + " " + tahun);
