import fs from "fs";

export class JsonReader {

    public read<T>(filePath: string): T {
        try{
        const fileContent = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(fileContent) as T;
        }
        catch(error)
        {
            if(error instanceof Error)
            {
                 throw new Error(
                    `Failed to read JSON file: ${filePath}\nReason: ${error.message}`
                );
            }
             throw new Error(
                `Failed to read JSON file: ${filePath}`
            );
        }

    }

}