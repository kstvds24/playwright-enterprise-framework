import { BaseApi } from "./BaseApi";
import { GetUserResponse } from "../models/GetUserResponse";
import { CreateUserRequest } from "../models/CreateUserRequest";
import { CreateUserResponse } from "../models/CreateUserResponse";
import { expect } from "@playwright/test";
import { UpdateUserResponse } from "../models/UpdateUserResponse";
import { UpdateUserRequest } from "../models/UpdateUserRequest";
import { PatchUserRequest } from "../models/PatchUserRequest";
import { PatchUserResponse } from "../models/PatchUserResponse";

export class UserApi extends BaseApi {

    public async getUser(id: number): Promise<GetUserResponse> {

        return await this.client.get<GetUserResponse>(`users/${id}`);
       
    }
    public async createUser(
        request: CreateUserRequest
    ): Promise<CreateUserResponse> {

        return await this.client.post<CreateUserRequest,CreateUserResponse>(
            "users",
            request
        );

        
    }
    public async updateUser(id: number, request: UpdateUserRequest
    ): Promise<UpdateUserResponse> {
        return await this.client.put<UpdateUserRequest,UpdateUserResponse>(`users/${id}`, request)

    }
    public async patchUser(id: number, request: PatchUserRequest
    ): Promise<PatchUserResponse> {
        return await this.client.patch<PatchUserRequest,PatchUserResponse>(`users/${id}`, request)

    }
    public async deleteUser(id: number): Promise<void> {
        await this.client.delete(`users/${id}`)

    }
}