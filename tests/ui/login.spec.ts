import { test, expect } from "../../src/fixtures/baseFixture";

test("Valid Login", async ({ loginPage }) => {
    await loginPage.navigate();
     const dashboard = await loginPage.login({
        username: "Admin",
        password: "admin123"
    });
    await dashboard.verifyDashboardLoaded();

});