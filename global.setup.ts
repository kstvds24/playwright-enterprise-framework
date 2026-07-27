import { chromium } from "@playwright/test";
import { LoginPage } from "./src/pages/LoginPage";
import { configManager, userRepository } from "./src/core/Bootstrap";
import { LoggerService } from "./src/services/LoggerService";

const STORAGE_STATE_PATH = "playwright/auth/user.json";
const admin = userRepository.getAdmin();
const isCI = !!process.env.CI;
async function globalSetup() {
    LoggerService.info("Starting global setup...");
    LoggerService.info("Launching browser...");
    const browser = await chromium.launch({
        headless: isCI
    });
    
    const context = await browser.newContext();

    const page = await context.newPage();
    try {
        const loginPage = new LoginPage(page);
        LoggerService.info("Navigating to login page...");
        await loginPage.navigate();
        await loginPage.login(admin);
        LoggerService.info("Logging in...");
        LoggerService.success("Login successful.");
        LoggerService.info("Saving storage state...");
        await context.storageState({
            path: STORAGE_STATE_PATH,
        });
        LoggerService.success("Storage state created successfully.");
        LoggerService.success("Global setup completed.");
    } catch (error) {
        LoggerService.error("Global setup failed.");
        throw new Error(
        `Unable to create storage state: ${
            error instanceof Error ? error.message : String(error)
        }`
    );
    }
    finally {
        await browser.close();
    }

}
export default globalSetup;