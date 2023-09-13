
class Labtop {
    constructor(merek, harga) {
        this.merek = merek;
        this.harga = harga;
    }
    printSpecification() {
        return `Ini adalah labtop dengan merek ${this.merek}. Harga ${this.harga}`;
    }
}

class Detail extends Labtop {
    constructor(merek, harga, warna) {
        super(merek, harga);
        this.warna = warna;
    }
    printDetail() {
        return `Ini adalah labtop dengan merek ${this.merek}. Harga ${this.harga}. Warna ${this.warna}.`;
    }
}

// Untuk mencetak hanya merek dan harga labtop
const labtop1 = new Labtop("Asus", "Rp. 8.000.000,-")
console.log(labtop1.printSpecification());

// Untuk mencetak detail daripada labtop :
const labtop1_detail = new Detail("Asus", "Rp. 8.000.000,-", "Gray");
console.log(labtop1_detail.printDetail());

// Encapsulation :
function produk(nama, harga) {
    // this itu adalah public
    this.nama_pub = nama;
    this.harga_pub = harga;
    this.diskon = 40/100;

    // var adalah private
    var diskon = 40/100;
    var nama_pri = nama;
    var harga_pri = harga;

    // Membuat function tambahan agar var dapat digunakan secara public
    this.detail_pub = function () {
        return "Nama " + nama + ". Harga : " + harga;
    }

    // Membuat function untuk menampilkan detail barang + diskon;
    this.detail_dis_pub = function() {
        return "Nama " + nama + ". Harga : " + (harga - (harga * this.diskon));
    }

    // Membuat function dengan menggunakan variable var diskon.
    this.detail_dis_pri = function () {
        return "Nama " + nama + ". Harga : " + (harga - (harga * diskon));
    }

    function detail_pri() {
        return "Nama " + nama + ". Harga : " + harga;
    }
}

const transaksi = new produk("Lato-lato", 3000);
console.log(transaksi.harga_pub);
console.log(transaksi.harga_pri);
console.log(transaksi.detail_pub());
// console.log(transaksi.detail_pri());

// Tanpa menggunakan encapsulation kita dapat mengubah logika dalam function di luar kelas.
transaksi.diskon = 80/100;

console.log("Detail Diskon tanpa menggunakan Encapsulation :" + transaksi.detail_dis_pub());

// Dapat kita liat nilai diskon tetap 40% dan tidak bisa di ubah lagi.
console.log("Detail Diskon tanpa menggunakan Encapsulation :" + transaksi.detail_dis_pri());


