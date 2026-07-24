import { test, expect } from "../../src/fixtures/baseFixture";
import { UpdateUserRequest } from "../../src/models/UpdateUserRequest";

test("Verify Update User API", async ({ apiManager }) => {
 const request: UpdateUserRequest = {
         name: "KaustavDev",
         job: "SDETEng"
     };
    const response = await apiManager.user.updateUser(574, request)
    const today = new Date().toISOString().substring(0, 10);
    const updatedDate = response.updatedAt.substring(0, 10);

    expect(response.name).toBe("KaustavDev");
    expect(response.job).toBe("SDETEng");
    expect(today).toBe(updatedDate);
});