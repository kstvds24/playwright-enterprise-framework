import { defineConfig } from "@playwright/test";
import { configManager } from "./src/core/Bootstrap";
export default defineConfig({
    testDir: "./tests",
    globalSetup: require.resolve("./global.setup"),
    use: {
        baseURL: configManager.getBaseURL(),
        navigationTimeout: 60000,
        headless: false,
        storageState: "playwright/auth/user.json",
        viewport: {
            width: 1920,
            height: 1080
        }
    }
});