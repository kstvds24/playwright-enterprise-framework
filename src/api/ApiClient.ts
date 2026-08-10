import {
    APIRequestContext,
    APIResponse
} from "@playwright/test";
import { LoggerService } from "../services/LoggerService";
import { ApiReportingService } from "../services/ApiReportingService";

export class ApiClient {

    constructor(
        private readonly request: APIRequestContext,
        
    ) {
        // noop
    }

    async get<T>(url: string): Promise<T> {
        return this.execute<T>("GET",url,()=>this.request.get(url))
    }

    async post<TRequest, TResponse>(
        url: string,
        data: TRequest
    ): Promise<TResponse> {
       return this.execute<TResponse>("POST",url,()=>this.request.post(url,{data}),data)

    }

    async put<TRequest, TResponse>(
        url: string,
        data: TRequest
    ): Promise<TResponse> {

       return this.execute<TResponse>("PUT",url,()=>this.request.put(url,{data}),data)


    }
    async patch<TRequest, TResponse>(
        url: string,
        data: TRequest
    ): Promise<TResponse> {
        return this.execute<TResponse>("PATCH", url, () => this.request.patch(url, { data }), data)

    }

    public async delete(
    url: string
): Promise<void> {

    await this.execute<void>(
        "DELETE",
        url,
        () => this.request.delete(url)
    );
}

    private async parseResponse<T>(
        response: APIResponse
    ): Promise<T> {

        if (!response.ok()) {
            throw new Error(
                `Request failed with status ${response.status()}`
            );
        }
         if (response.status() === 204) {
        return undefined as T;
    }

        return response.json() as Promise<T>;
    }

private async execute<T>(
    method: string,
    url: string,
    action: () => Promise<APIResponse>,
    body?: unknown
): Promise<T> {

    LoggerService.logRequest(method, url, body);
    await ApiReportingService.attachRequest({
    method,
    url,
    body
});
    const startTime = performance.now();

    const response = await action();

    const parsedResponse = await this.parseResponse<T>(response);

    LoggerService.logResponse(
        performance.now() - startTime,
        response.status(),
        parsedResponse as Record<string, unknown>
    );
    await ApiReportingService.attachResponse({
    status: response.status(),
    headers: response.headers(),
    body: parsedResponse
});

    return parsedResponse;
}
}




