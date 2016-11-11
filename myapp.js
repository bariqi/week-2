var Agenda = [
  {
    hari: "Senin",
    kehadiran: "Masuk",
    kendaraan: "Honda Jazz",
    alasan: " "
  },
  {
    hari: "Selasa",
    kehadiran: "Masuk",
    kendaraan: "Toyota Yaris",
    alasan: " "
  },
  {
    hari: "Rabu",
    kehadiran: "Masuk",
    kendaraan: "Honda Jazz",
    alasan: " "
  },
  {
    hari: "Kamis",
    kehadiran: "Masuk",
    kendaraan: "Suzuki Swift",
    alasan: " "
  },
  {
    hari: "Jumat",
    kehadiran: "Absen",
    kendaraan: " ",
    alasan: "Antar Istri Cek Kandungan"
  },
  {
    hari: "Senin",
    kehadiran: "Masuk",
    kendaraan: "Honda Jazz",
    alasan: " "
  },
  {
    hari: "Selasa",
    kehadiran: "Masuk",
    kendaraan: "Toyota Yaris",
    alasan: " "
  },
  {
    hari: "Rabu",
    kehadiran: "Masuk",
    kendaraan: "Toyota Yaris",
    alasan: " "
  },
  {
    hari: "Kamis",
    kehadiran: "Absen",
    kendaraan: " ",
    alasan: "Kunjungan Mertua"
  },
  {
    hari: "Jumat",
    kehadiran: "Absen",
    kendaraan: " ",
    alasan: "Kunjungan Mertua"
  }
]

var masukKerja = function(hari,kehadiran,kendaraan,alasan){
  return console.log("Hari "+hari+" tanggal "+(i*7+j+1)+", Saya pergi ke kantor dengan "+kendaraan);
}

var tidakMasuk = function(hari,kehadiran,kendaraan,alasan){
  return console.log("Hari "+hari+" tanggal "+(i*7+j+1)+", Saya tidak masuk kerja karena "+alasan);
}

for(i = 0; i <= 1; i++){
  for(j = 0; j <= Agenda.length / 2 - 1; j++){
    if(Agenda[i*5+j].kehadiran=="Masuk"){
      masukKerja(Agenda[i*5+j].hari,Agenda[i*5+j].kehadiran,Agenda[i*5+j].kendaraan,Agenda[i*5+j].alasan);
    }
    else{
      tidakMasuk(Agenda[i*5+j].hari,Agenda[i*5+j].kehadiran,Agenda[i*5+j].kendaraan,Agenda[i*5+j].alasan);
    }
  }
}

var totalMasuk = 0;
var totalTidakMasuk = 0;
var jazz = 0;
var yaris = 0;
var swift = 0;
for(i = 0; i <= Agenda.length-1; i++){
  if(Agenda[i].kehadiran=="Masuk"){
    totalMasuk = totalMasuk + 1;
    if(Agenda[i].kendaraan=="Honda Jazz"){jazz = jazz + 1;}
    else if(Agenda[i].kendaraan=="Toyota Yaris"){yaris = yaris + 1;}
    else if(Agenda[i].kendaraan=="Suzuki Swift"){swift = swift + 1;}
  }
  else{
    totalTidakMasuk = totalTidakMasuk + 1;
  }
}
console.log("Saya masuk kerja sebanyak "+totalMasuk+" hari");
console.log("Saya tidak masuk kerja sebanyak "+totalTidakMasuk+" hari");
console.log("Saya menggunakan mobil honda jazz sebanyak "+jazz+" kali");
console.log("Saya menggunakan mobil toyota yaris sebanyak "+yaris+" kali");
console.log("Saya menggunakan mobil suzuki swift sebanyak "+swift+" kali");
