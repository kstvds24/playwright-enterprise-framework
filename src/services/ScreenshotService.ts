import { Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { LoggerService } from "./LoggerService";

export class ScreenshotService {

    constructor(
        private readonly page: Page
    ) { }

    private sanitize(fileName: string): string {

        return fileName
            .replace(/\s+/g, "_")
            .toLowerCase();
    }

    async capture(fileName: string): Promise<string> {

        try {

            const directory = path.join("reports", "screenshots");

            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory, { recursive: true });
            }

            const name = this.sanitize(fileName);
            const screenshotPath =
                path.join(directory, `${name}.png`);
            await this.page.screenshot({
                path: screenshotPath,
                fullPage: true
            });
            return screenshotPath;

        } catch (error) {

            LoggerService.warn("Screenshot capture failed.");
            throw error;
        }

    }

}