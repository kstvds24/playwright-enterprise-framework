import {
    attachment,
    attachmentPath,
    ContentType,
    epic,
    feature,
    owner,
    severity,
    Severity,
    step,
    story,
    tag
} from "allure-js-commons";
import { LoggerService } from "./LoggerService";
import { AllureMetadata } from "../models/AllureMetadata";
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
    //MetaData Section
    public static async epic(name: string): Promise<void> {
    await epic(name);
}

public static async feature(name: string): Promise<void> {
    await feature(name);
}

public static async story(name: string): Promise<void> {
    await story(name);
}

public static async owner(name: string): Promise<void> {
    await owner(name);
}

public static async severity(level: Severity): Promise<void> {
    await severity(level);
}

public static async tag(name: string): Promise<void> {
    await tag(name);
}
public static async setAllureMetadata(
    metadata: AllureMetadata
): Promise<void> {

    if (metadata.epic) {
        await this.epic(metadata.epic);
    }

    if (metadata.feature) {
        await this.feature(metadata.feature);
    }

    if (metadata.story) {
        await this.story(metadata.story);
    }

    if (metadata.owner) {
        await this.owner(metadata.owner);
    }

    if (metadata.severity) {
        await this.severity(metadata.severity);
    }

    if (metadata.tags) {
        for (const tag of metadata.tags) {
            await this.tag(tag);
        }
    }
}
}