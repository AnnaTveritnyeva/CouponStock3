import { Role } from "./Role";

export class User{
    public email?:string="";
    public role:Role= Role.GUEST;
    public token?:string="";
}

