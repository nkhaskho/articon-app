import { UserRole } from "./user-role";

export class User {
    id?: string = "";
    username: string = "";
    email: string = "";
    fullname: string = "";
    region: string = "";
    registration: string = "E12XXXXXX";
    password: string = "";
    role: UserRole = UserRole.CLIENT;
    // others
}
