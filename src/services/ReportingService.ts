    import {
        attachment,
        attachmentPath,
        ContentType,
        step
    } from "allure-js-commons";
import { LoggerService } from "./LoggerService";
export class ReportingService {

    static async attachText(
        name: string,
        text: string
    ): Promise<void> {
        await this.attach(
            name,
            text,
            ContentType.TEXT
        );
    }

    static async attachJson(name: string, json: unknown): Promise<void> {
        await this.attach(
            name,
            JSON.stringify(json, null, 2),
            ContentType.JSON
        );
    }

    static async attachScreenshot(name: string, path: string): Promise<void> {
        try {
            await attachmentPath(name, path, ContentType.PNG)
            LoggerService.info(
                `Attached Screenshot to Allure: ${name}`
            );
        }
        catch (error) {
            this.logAttachmentFailure(name, error)
        }
    }
    private static logAttachmentFailure(
        name: string,
        error: unknown
    ): void {
        LoggerService.warn(
            `Failed to attach '${name}' to Allure`
        );

        LoggerService.error(String(error));
    }
    private static async attach(
        name: string,
        content: string | Buffer | Uint8Array,
        contentType: ContentType
    ): Promise<void> {
        try {
            await attachment(
                name,
                content,
                contentType
            );

            LoggerService.info(
                `Attached '${name}' to Allure`
            );
        } catch (error) {
            this.logAttachmentFailure(name, error);
        }
    }
    static async step<T>(
        name: string,
        action: () => T | Promise<T>
    ): Promise<T> {
        return await step(name, async () => action());
    }
}