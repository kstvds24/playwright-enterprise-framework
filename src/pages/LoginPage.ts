import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { configManager } from "../core/Bootstrap";
import { DashboardPage } from "./DashboardPage";
import { LoginUser  } from "../models/LoginUser";

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
    user: LoginUser 
): Promise<DashboardPage> {

    await this.actions.fill(this.usernameInput,user.username)

    await this.actions.fill(this.passwordInput,user.password)

    await Promise.all([
    this.page.waitForURL(/dashboard/),
    await this.actions.click(this.loginButton)
]);


    return new DashboardPage(this.page);

}
}