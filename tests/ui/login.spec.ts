import { test, expect } from "../../src/fixtures/baseFixture";

test("Verify Dashboard", async ({ page, pageManager }) => {
    await page.goto("/");
    await pageManager.dashboard.verifyDashboardLoaded();
});