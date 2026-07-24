import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage";

export class Sidebar extends BasePage{
    private readonly adminMenu: Locator;
    constructor(page:Page)
    {
        super(page)
        this.adminMenu = page.getByRole("link",{name:`Admin`})
    }
    async openAdmin(): Promise<void>{
        await this.actions.click(this.adminMenu);
    }
}