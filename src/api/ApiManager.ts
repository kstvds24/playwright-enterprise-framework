import { ApiClient } from "./ApiClient";
import { UserApi } from "./UserApi";

export class ApiManager {
    private userApi?: UserApi;
    constructor(
        private readonly client: ApiClient
    ) { }


    public get user(): UserApi {
        if (!this.userApi) {
            this.userApi = new UserApi(this.client);
        }

        return this.userApi;
    }

}