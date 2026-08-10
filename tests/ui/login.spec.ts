import { test, expect } from "../../src/fixtures/baseFixture";

test("Verify Dashboard", async ({ page, pageManager }) => {
    await pageManager.dashboard.open();
    await pageManager.dashboard.verifyDashboardLoaded();
});