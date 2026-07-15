import { JsonReader } from "../utils/JsonReader";
import { ConfigurationLoader } from "../config/ConfigurationLoader";
import { ConfigManager } from "../config/ConfigManager";

const jsonReader = new JsonReader();
const configurationLoader =
    new ConfigurationLoader(jsonReader);
export const configManager =
    new ConfigManager(configurationLoader);