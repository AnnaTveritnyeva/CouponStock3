import { Role } from "./Role";

export class UserCred{
public email:string = "";
public password:string = "";
public role:Role = Role.GUEST;

/*
constructor (email:string, password:string, role:Role){
    this.email=email;
    this.password=password;
    this.role=role;
}
*/
}