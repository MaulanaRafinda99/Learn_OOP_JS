class Labtop {
    constructor(merek, harga) {
        this.merek = merek;
        this.harga = harga;
    }
    printSpecification() {
        return `Ini adalah labtop dengan merek ${this.merek}. Harga ${this.harga}`;
    }
}

class Detail extends Labtop{
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
const labtop1_detail = new Detail("Asus","Rp. 8.000.000,-","Gray");
console.log(labtop1_detail.printDetail());