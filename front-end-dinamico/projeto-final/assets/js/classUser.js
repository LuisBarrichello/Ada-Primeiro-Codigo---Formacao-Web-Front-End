class User {
    static id = 0;
    constructor(userName, email, password) {
        this.id = User.id++;
        this.userName = userName,
        this.email = email;
        this.password = password;
    }
};

export { User }