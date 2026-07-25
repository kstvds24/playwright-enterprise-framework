import { defineConfig } from "@playwright/test";
import { configManager } from "./src/core/Bootstrap";

const isCI = !!process.env.CI;
export default defineConfig({

    testDir: "./tests",

    timeout: 60 * 1000,

    expect: {
        timeout: 10 * 1000
    },

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: isCI ? 2 : 0,

    workers: isCI ? 2 : undefined,

    globalSetup: require.resolve("./global.setup"),

    reporter: [
        ["list"],
        ["html", { open: "never" }]
    ],

    use: {
        baseURL: configManager.getBaseURL(),

        navigationTimeout: 60000,

        headless: isCI,

        storageState: "playwright/auth/user.json",

        viewport: {
            width: 1920,
            height: 1080
        },

        trace: "on-first-retry",

        screenshot: "only-on-failure",

        video: "retain-on-failure"
    }
});