import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { configManager } from "../core/Bootstrap";
import { DashboardPage } from "./DashboardPage";
import { User } from "../models/LoginUser";

export class LoginPage extends BasePage
{
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page:Page)
    {
        super(page)
        this.usernameInput = page.getByRole("textbox",{name:'username'})
        this.passwordInput = page.getByRole("textbox",{name:'password'})
        this.loginButton = page.getByRole("button",{name:'Login'})
    }
public async navigate(){
    await this.page.goto(configManager.getBaseURL())
}
public async login(
    user: User
): Promise<DashboardPage> {

    await this.usernameInput.fill(user.username);

    await this.passwordInput.fill(user.password);

    await this.loginButton.click();

    return new DashboardPage(this.page);

}
}