import { Page, TestInfo } from "@playwright/test";
import { FailureCaptureService } from "../services/FailureCaptureService";

export class AfterEachHook {

    public static async execute(
        page: Page,
        testInfo: TestInfo
    ): Promise<void> {

        if (
            testInfo.status !==
            testInfo.expectedStatus
        ) {

            await FailureCaptureService.capture(page,testInfo);

        }

    }

}