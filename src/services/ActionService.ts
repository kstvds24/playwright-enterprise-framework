import { Locator, Page } from "@playwright/test";
import { LoggerService } from "./LoggerService";
import { ScreenshotService } from "./ScreenshotService";

export class ActionService {

    constructor(private readonly page: Page, private readonly logger: LoggerService, private readonly screenshot: ScreenshotService) {

    }
    async click(locator: Locator, displayName?: string): Promise<void> {
        await this.executeAction(`Clicking ${displayName ?? "element"}`, () => locator.click())

    }
    async fill(locator: Locator, value: string, displayName?: string): Promise<void> {
        await this.executeAction(

            `Filling ${displayName ?? "field"}`,

            () => locator.fill(value)

        );
    }
    private async executeAction(actionName: string, action: () => Promise<void>) {
        this.logger.info(`${actionName}`);
        try {
            await action();
            this.logger.success(`${actionName} successful`);
        }
        catch (error) {

            this.logger.error(`${actionName} failed`);

            await this.screenshot.capture(actionName);

            throw error;
        }
    }

}