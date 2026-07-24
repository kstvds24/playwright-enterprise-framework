import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/baseFixture";
import { CreateUserRequest } from "../../src/models/CreateUserRequest";

test("Verify Create User API", async ({ apiManager }) => {

    const request: CreateUserRequest = {
        name: "KaustavD",
        job: "SDET"
    };

    const response = await apiManager.user.createUser(request);
    console.log(response.id)
    expect(response.name).toBe(request.name);
    expect(response.job).toBe(request.job);
    expect(response.id).toBeTruthy();
    expect(response.createdAt).toBeTruthy();

});