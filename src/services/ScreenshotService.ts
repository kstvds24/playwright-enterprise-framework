import { Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export class ScreenshotService {

    constructor(
        private readonly page: Page
    ) { }

    private sanitize(fileName: string): string {

        return fileName
            .replace(/\s+/g, "_")
            .toLowerCase();
    }

    async capture(fileName: string): Promise<void> {

        try {

            const directory = path.join("reports", "screenshots");

            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory, { recursive: true });
            }

            const name = this.sanitize(fileName);

            await this.page.screenshot({
                path: path.join(directory, `${name}.png`),
                fullPage: true
            });

        } catch (error) {

            console.warn("Screenshot capture failed.");

        }

    }

}