import { test, expect } from "../../src/fixtures/baseFixture";

test("Verify Dashboard", async ({  pageManager }) => {
    await pageManager.dashboard.open();
    await pageManager.dashboard.verifyDashboardLoaded();
});