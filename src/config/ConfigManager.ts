import { EnvironmentConfig } from "../models/EnvironmentConfig";
import { ConfigurationLoader } from "./ConfigurationLoader";

export class ConfigManager {
    private readonly config: EnvironmentConfig;
    constructor(private readonly loader: ConfigurationLoader) {
        const environment = process.env.ENV ?? "qa";
        this.config = this.loader.load(environment);
    }

    public getBaseURL(): string {
        return this.config.baseUrl;
    }
    public getApiBaseUrl(): string {
        return this.config.apiBaseUrl;
    }
    public getReqResApiKey(): string {
    return this.config.reResApiKey;
}

}