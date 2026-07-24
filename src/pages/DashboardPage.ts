import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../../base/BasePage";

export class DashboardPage extends BasePage {
    private readonly dashboardHeading: Locator;
    constructor(page: Page) {
        super(page);
        this.dashboardHeading = this.page.getByRole("heading", {
            name: "Dashboard"
        });

    }
    public async verifyDashboardLoaded(): Promise<void> {

    await this.waits.waitForVisible(this.dashboardHeading);

}


}