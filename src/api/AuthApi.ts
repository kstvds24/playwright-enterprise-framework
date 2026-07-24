
import { LoginResponse } from "../models/LoginResponse";
import { LoginUser } from "../models/LoginUser";
import { BaseApi } from "./BaseApi";

export class AuthApi extends BaseApi {

    public async login(
        user: LoginUser
    ): Promise<LoginResponse> {

        const response = await this.client.post(
            "/login",
            user
        );

        // We'll improve this part next
        if (!response.ok()) {
            throw new Error("Login failed.");
        }

        return await response.json() as LoginResponse;
    }

}