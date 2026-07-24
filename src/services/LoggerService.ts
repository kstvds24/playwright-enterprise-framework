export class LoggerService {

    info(message: string): void {
        console.log(
            `[${this.getTimestamp()}] [INFO] ${message}`
        );
    }
    warn(message: string): void {
        console.warn(
            `[${this.getTimestamp()}] [WARN] ${message}`
        );
    }

    error(message: string): void {
        console.error(
            `[${this.getTimestamp()}] [ERROR] ${message}`
        );
    }

    success(message: string): void {
        console.log(
            `[${this.getTimestamp()}] [PASS] ${message}`
        );
    }
    logRequest(methodName: string, url: string, body?: any
    ) {

        console.log(`=`.repeat(20))
        console.log(this.getTimestamp());
        console.log(`${methodName}  ${url}`)
        if (body) {

            console.log("Body :")
            console.log(
                JSON.stringify(body, null, 2)
            );
        }


    }
    logResponse(
        duration: number, status: number, body?: any
    ) {
        console.log(`-`.repeat(20))
        console.log('RESPONSE')
        console.log(`Status :  ${status}`)
        console.log(`Duration : ${duration} ms`)
        console.log("Body :")
        console.log(
            JSON.stringify(body, null, 2)
        );

    }
    private getTimestamp(): string {
        return new Date().toISOString();
    }

}