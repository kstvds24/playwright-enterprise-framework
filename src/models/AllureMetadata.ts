import { Severity } from "allure-js-commons";

export interface AllureMetadata {
    epic?: string;
    feature?: string;
    story?: string;
    owner?: string;
    severity?: Severity;
    tags?: string[];
}