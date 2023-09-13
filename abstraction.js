// Keyword abstract digunakan untuk membuat class atau method yang bersifat abstrak.

class Person {
    constructor(name) {
        if (this.constructor === Person) {
            throw new Error("Tidak boleh menggunakan kelas ini, kelas ini bersifat abstrak.")
        }
        this.name = name;
    }
    greet() {
        throw new Error("Method abstract belum diimplementasi.")
    }

}

class Teacher extends Person{
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    greet() {
        console.log("Halo nama saya "+this.name);
    }
}

const dosen = new Teacher("Ninja Ken", 62);
// const student = new Person("Maulana")
dosen.greet();