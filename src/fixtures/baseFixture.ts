import { test as base, request } from "@playwright/test";
import { PageManager } from "../managers/PageManager";
import { ApiManager } from "../api/ApiManager";
import { ApiClient } from "../api/ApiClient";
import { configManager } from "../core/Bootstrap";
import { LoggerService } from "../services/LoggerService";

type Fixtures = {
    pageManager: PageManager;
    apiManager: ApiManager;
};

export const test = base.extend<Fixtures>({
    pageManager: async ({ page }, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    },

    apiManager: async ({ }, use) => {
        const apiContext = await request.newContext({
            baseURL: configManager.getApiBaseUrl(),
            extraHTTPHeaders: {
                "x-api-key": configManager.getReqResApiKey()
            }

        });
        const apiClient = new ApiClient(apiContext,new LoggerService());
        const apiManager = new ApiManager(apiClient);
//console.log("Request Headers:", request().headers());
        await use(apiManager);

        await apiContext.dispose();
    }
});

export { expect } from "@playwright/test";