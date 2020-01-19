export class User {

    constructor(firstName: string, lastName: string, email: string, password: string, isAdmin: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
}