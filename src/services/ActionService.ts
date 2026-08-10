import { Locator } from "@playwright/test";
import { LoggerService } from "./LoggerService";
import { ScreenshotService } from "./ScreenshotService";
import { ReportingService } from "./ReportingService";

export class ActionService {

    constructor( private readonly screenshot: ScreenshotService) {

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
        LoggerService.info(`${actionName}`);
        try {
            await action();
           LoggerService.success(`${actionName} successful`);
        }
        catch (error) {

    LoggerService.error(`${actionName} failed`);

    try {

        const screenshotPath =
            await this.screenshot.capture(actionName);

        await ReportingService.attachScreenshot(
            actionName,
            screenshotPath
        );

        await ReportingService.attachText(
            "Error Details",
            String(error)
        );

    } catch (attachmentError) {

        LoggerService.warn(
            "Failed to capture or attach failure artifacts."
        );

    }

    throw error;
}
    }

}