import fs from "fs";
import path from "path";
import { EnvironmentConfig } from "../models/EnvironmentConfig";
import { JsonReader } from "../utils/JsonReader";
export class ConfigurationLoader {

    constructor(
        private readonly jsonReader: JsonReader
    ) {

    }
public load(environment: string): EnvironmentConfig {
const filePath = path.join(
    __dirname,
    "env",
    `${environment}.json`
);
return this.jsonReader.read<EnvironmentConfig>(filePath);
}
}