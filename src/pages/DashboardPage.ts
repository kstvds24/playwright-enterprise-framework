import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { ReportingService } from "../services/ReportingService";

export class DashboardPage extends BasePage {
    private readonly dashboardHeading: Locator;
    constructor(page: Page) {
        super(page);
        this.dashboardHeading = this.page.getByRole("heading", {
            name: "Dashboard"
        });
    }

    public async open(): Promise<void> {

        await ReportingService.step(
            "Open Dashboard",
            async () => {
                await this.page.goto("/");
            }
        );
    }
    public async verifyDashboardLoaded(): Promise<void> {

        await ReportingService.step(
            "Verify dashboard is displayed",
            async () => {
                await this.waits.waitForVisible(this.dashboardHeading);
            }
        );
    }


}