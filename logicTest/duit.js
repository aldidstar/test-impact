function jumlahTabungan(listHarga, history) {
  let objectTemplate = {};
  let arrayHistory = history.split(".");
  let day;
  let tabungan = 10000;
  for (let i = 0; i < arrayHistory.length; i++) {
    console.log(arrayHistory[i].split(","));

    day = arrayHistory[i].split("-");
    let menu = day[1].split(",");
    for (let j = 0; j < menu.length; j++) {
      for (let k = 0; k < listHarga.length; k++) {
        if (menu[j] == listHarga[k].nama) {
          tabungan - listHarga[k].harga;
          let tarif = tabungan - listHarga[k].harga;
          console.log(listHarga[k].nama, menu[j], tarif, "wjekewj");
        }
      }
    }
    objectTemplate[day[0]] = "Oke";
  }
  return objectTemplate;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
