export class LoggerService {

    static info(message: string): void {
        console.log(
            `[${this.getTimestamp()}] [INFO] ${message}`
        );
    }
   static  warn(message: string): void {
        console.warn(
            `[${this.getTimestamp()}] [WARN] ${message}`
        );
    }

   static  error(message: string): void {
        console.error(
            `[${this.getTimestamp()}] [ERROR] ${message}`
        );
    }

   static  success(message: string): void {
        console.log(
            `[${this.getTimestamp()}] [PASS] ${message}`
        );
    }
   static  logRequest(methodName: string, url: string, body?: any
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
   static  logResponse(
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
    private static getTimestamp(): string {
        return new Date().toISOString();
    }

}