import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage";
import { configManager } from "../core/Bootstrap";
import { DashboardPage } from "./DashboardPage";
import { LoginUser  } from "../models/LoginUser";
import { ReportingService } from "../services/ReportingService";

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
public async navigate(): Promise<void> {

    await ReportingService.step(
        "Open OrangeHRM application",
        async () => {
            await this.page.goto(
                configManager.getBaseURL()
            );
        }
    );
}
public async login(
    user: LoginUser 
): Promise<DashboardPage> {

    await ReportingService.step(
        `Login as ${user.username}`,
        async () => {
    await this.actions.fill(this.usernameInput,user.username)

    await this.actions.fill(this.passwordInput,user.password)

    await Promise.all([
    this.waits.waitForURL(/dashboard/),
    this.actions.click(this.loginButton)
]);
        }
    );

    return new DashboardPage(this.page);

}
}