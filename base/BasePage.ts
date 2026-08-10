import {  Locator, Page } from "@playwright/test";
import { ActionService } from "../src/services/ActionService";
import { WaitService } from "../src/services/WaitService";
import { ScreenshotService } from "../src/services/ScreenshotService";

export abstract class BasePage {
    protected readonly waits: WaitService
    protected readonly actions: ActionService;
    protected readonly screenshot: ScreenshotService;
   constructor(
    protected readonly page: Page
) {
    this.waits = new WaitService(page);
    this.screenshot = new ScreenshotService(page);
    this.actions = new ActionService(this.screenshot);
}


}