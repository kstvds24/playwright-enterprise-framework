import { Page } from "@playwright/test";
import { LoggerService } from "./LoggerService";

export class ScreenshotService {

    constructor(
        private readonly page: Page
    ) { }

    async capture(outputPath: string): Promise<string> {

        try {

            await this.page.screenshot({
                path: outputPath,
                fullPage: true
            });

            return outputPath;

        } catch (error) {

            LoggerService.warn("Screenshot capture failed.");
            throw error;

        }

    }

}