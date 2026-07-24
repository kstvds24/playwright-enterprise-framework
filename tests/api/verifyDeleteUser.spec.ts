import { test, expect } from "../../src/fixtures/baseFixture";
import { UpdateUserRequest } from "../../src/models/UpdateUserRequest";

test("Verify Delete User API", async ({ apiManager }) => {
    await apiManager.user.deleteUser(574)

});