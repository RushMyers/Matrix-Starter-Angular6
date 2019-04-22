export class Environment {
    apiBaseUrl: string;
    loggingEndpoint: string;
    logLevel: number;
    name: string;
    production: boolean;

    constructor(
        apiBaseUrl: string,
        loggingEndpoint: string,
        logLevel: number,
        name: string,
        production: boolean
    ) {
        this.apiBaseUrl = apiBaseUrl;
        this.loggingEndpoint = loggingEndpoint;
        this.logLevel = logLevel;
        this.name = name;
        this.production = production;
    }
}
