import { ApiRequestAttachment } from "../models/ApiRequestAttachment";
import { ApiResponseAttachment } from "../models/ApiResponseAttachment";
import { ReportingService } from "./ReportingService";

export class ApiReportingService {

    public static async attachRequest(
        request: ApiRequestAttachment
    ): Promise<void> {

        await ReportingService.attachJson(
            "API Request",
            request
        );
    }

    public static async attachResponse(
        response: ApiResponseAttachment
    ): Promise<void> {

        await ReportingService.attachJson(
            "API Response",
            response
        );
    }
}