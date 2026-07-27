import {
    APIRequestContext,
    APIResponse
} from "@playwright/test";
import { LoggerService } from "../services/LoggerService";

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

    async delete(url: string): Promise<void> {
        LoggerService.logRequest(this.delete.name.toUpperCase(), url)
        const startTime = performance.now();
        const response = await this.request.delete(url);
        if (!response.ok()) {
            throw new Error(
                `Request failed with status ${response.status()}`
            );
        }
        LoggerService.logResponse(performance.now() - startTime, response.status())
    }

    private async parseResponse<T>(
        response: APIResponse
    ): Promise<T> {

        if (!response.ok()) {
            throw new Error(
                `Request failed with status ${response.status()}`
            );
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

    const startTime = performance.now();

    const response = await action();

    const parsedResponse = await this.parseResponse<T>(response);

    LoggerService.logResponse(
        performance.now() - startTime,
        response.status(),
        parsedResponse as Record<string, unknown>
    );

    return parsedResponse;
}
}




