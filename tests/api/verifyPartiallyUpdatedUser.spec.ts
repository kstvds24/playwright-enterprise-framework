import { test, expect } from "../../src/fixtures/baseFixture";
import { PatchUserRequest } from "../../src/models/PatchUserRequest";

test("Verify Patch User API", async ({ apiManager }) => {
 const request: PatchUserRequest = {
         name: "KaustavDas",
     };
    const response = await apiManager.user.patchUser(574, request)
    const today = new Date().toISOString().substring(0, 10);
    const updatedDate = response.updatedAt.substring(0, 10);

    expect(response.name).toBe(request.name);
    expect(today).toBe(updatedDate);
});