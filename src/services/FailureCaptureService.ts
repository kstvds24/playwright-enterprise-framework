import { Page, TestInfo } from "@playwright/test";
import { ScreenshotService } from "./ScreenshotService";
import { ReportingService } from "./ReportingService";
import { LoggerService } from "./LoggerService";

export class FailureCaptureService {
    private static readonly FINAL_STATE_FILE =
        "final-test-state";

    private static readonly FINAL_STATE_ATTACHMENT =
        "Final Test State";

    public static async capture(
        page: Page,
        testInfo: TestInfo
    ): Promise<void> {

        try {
            LoggerService.info("FailureCaptureService started");
            const screenshotPath = testInfo.outputPath(
                "final-test-state.png"
            );
            console.log(screenshotPath);
            const screenshotService = new ScreenshotService(page);

            await screenshotService.capture(screenshotPath);

            await ReportingService.attachScreenshot(
                this.FINAL_STATE_ATTACHMENT,
                screenshotPath
            );
            LoggerService.info("Screenshot attached to Allure");

        } catch (error) {

            LoggerService.warn(
                "Failed to capture failure diagnostics."
            );

            LoggerService.error(String(error));
        }
    }
}