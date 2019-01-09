import { IAuth } from "./IAuth";

export class Authenticator {
    /**
     *
     */
    constructor(private Auth: IAuth) {
        
    }

    public isValid() {
        
        let user = this.checkUser(this.Auth.username);
        // console.log(user.username == this.Auth.username && user.password == this.Auth.password, user.username + " == " + this.Auth.username,  user.password + " == " + this.Auth.password);
        return user.username == this.Auth.username && user.password == this.Auth.password;
    }

    private checkUser(username: string): IAuth{
        // TODO modify later to check from DB
        return {
            username: "testOPENDB",
            password: "PASSWOEDOPENDB"
        }
    }
} 