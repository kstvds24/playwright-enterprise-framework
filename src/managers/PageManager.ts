import { Page } from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { Sidebar } from "../components/Sidebar";

export class PageManager {

    private dashboardPage?: DashboardPage;
    private sideBar?: Sidebar

    constructor(private readonly page: Page) { }
    public get dashboard(): DashboardPage {
        if (!this.dashboardPage) {
            this.dashboardPage = new DashboardPage(this.page);
        }
        return this.dashboardPage;
    }

    public get sidebar(): Sidebar{
        if(!this.sideBar){
            this.sideBar = new Sidebar(this.page);
        }
        return this.sideBar;
    }
}