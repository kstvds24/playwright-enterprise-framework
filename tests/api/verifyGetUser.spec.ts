import { test, expect } from "../../src/fixtures/baseFixture";

test("Verify Get User API", async ({ apiManager }) => {

    const response = await apiManager.user.getUser(2);
    

    expect(response.data.id).toBe(2);
    expect(response.data.first_name).toBe("Janet");
    expect(response.data.last_name).toBe("Weaver");
    expect(response.data.email).toContain("@");

});