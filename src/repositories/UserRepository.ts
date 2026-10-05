import path from "node:path";

import { JsonReader } from "../utils/JsonReader";
import { LoginUser } from "../models/LoginUser";


type Users = Record<string, LoginUser>;


export class UserRepository {

    private readonly users: Users;

    constructor(
        private readonly jsonReader: JsonReader = new JsonReader()
    ) {

        this.users = this.jsonReader.read<Users>(
            path.join(
                process.cwd(),
                "test-data",
                "qa",
                "users.json"
            )
        );

    }

    public getUser(name: string): LoginUser {

        const user = this.users[name];

        if (!user) {
            throw new Error(`User '${name}' not found.`);
        }

        return user;
    }
    public getAdmin(): LoginUser {
        return this.getUser("admin");
    }

    public getInvalidUser(): LoginUser {
        return this.getUser("invalidUser");
    }

}