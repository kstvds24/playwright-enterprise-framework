export interface ApiResponseAttachment {
    status: number;
    headers?: Record<string, string>;
    body?: unknown;
}