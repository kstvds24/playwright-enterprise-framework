import { expect, Locator, Page } from "@playwright/test";

export class WaitService {

    constructor(private readonly page: Page) {}

    public async waitForVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    public async waitForHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    public async waitForURL(url: RegExp | string): Promise<void> {
        await this.page.waitForURL(url);
    }
    public async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState("load");
    }
}