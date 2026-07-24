import { ApiClient } from "./ApiClient";

export abstract class BaseApi {

    constructor(
        protected readonly client: ApiClient
    ) {}

}