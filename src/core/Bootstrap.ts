import { JsonReader } from "../utils/JsonReader";
import { ConfigurationLoader } from "../config/ConfigurationLoader";
import { ConfigManager } from "../config/ConfigManager";
import { UserRepository } from "../repositories/UserRepository";

const jsonReader = new JsonReader();
const configurationLoader =
    new ConfigurationLoader(jsonReader);
export const configManager =
    new ConfigManager(configurationLoader);
    export const userRepository =
    new UserRepository();