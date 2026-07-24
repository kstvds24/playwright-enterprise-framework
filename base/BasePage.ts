import { expect, Locator, Page } from "@playwright/test";
import { ActionService } from "../src/services/ActionService";
import { WaitService } from "../src/services/WaitService";
import { LoggerService } from "../src/services/LoggerService";
import { ScreenshotService } from "../src/services/ScreenshotService";

export abstract class BasePage {
    protected readonly page: Page;
    protected readonly waits: WaitService
    protected readonly actions: ActionService;
    protected readonly logger: LoggerService;
    protected readonly screenshot: ScreenshotService;
    constructor(page: Page) {
        this.page = page;
        this.logger = new LoggerService()
        this.waits = new WaitService(page)
        this.screenshot = new ScreenshotService(page)
        this.actions = new ActionService(page, this.logger, this.screenshot)

    }


    protected async getText(
        locator: Locator
    ): Promise<string> {

        return await locator.innerText();

    }
}