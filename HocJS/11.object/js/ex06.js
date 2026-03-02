class User {
    // Thuộc tính
    name = null;
    email = null;
    // Phương thức khởi tạo (chạy ngay sau khi instance được tạo)

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // phương thức

    getName() {
        return this.name;
    }

    getEmail() {
        this.email;
    }

    // thuộc tính stattic
    static message = "Hello";
    // phương thức static
    static getMessage() {
        return " Chào anh em";
    }
}

class Admin extends User {
    role = "admin";
    constructor(name, email, role) {
        super(name, email); // Gọi constructor của class cha và truyền đối số tương ứng
        this.role = role;
    }
    getInfo() {
        return `${this.name} - ${this.email}`;
    }
}

// const user = new User("Hoàng A ", "sdfdf");
// console.log(user);
// console.log(User.message);

// console.log(User.getMessage());

const admin = new Admin("Hoàng A ", "sdfdf", "admin");
console.log(admin);
console.log(admin.getInfo());
console.log(admin.role);
