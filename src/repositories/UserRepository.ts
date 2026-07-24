import path from "node:path";

import { JsonReader } from "../utils/JsonReader";
import { User } from "../models/User";


type Users = Record<string, User>;


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

    public getUser(name: string): User {

        const user = this.users[name];

        if (!user) {
            throw new Error(`User '${name}' not found.`);
        }

        return user;
    }
    public getAdmin(): User {
        return this.getUser("admin");
    }

    public getInvalidUser(): User {
        return this.getUser("invalidUser");
    }

}