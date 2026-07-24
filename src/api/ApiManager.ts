import { ApiClient } from "./ApiClient";
import { AuthApi } from "./AuthApi";
import { UserApi } from "./UserApi";

export class ApiManager {

    private authApi?: AuthApi;
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

    get auth(): AuthApi {

        if (!this.authApi) {

            this.authApi = new AuthApi(this.client);

        }

        return this.authApi;

    }

}