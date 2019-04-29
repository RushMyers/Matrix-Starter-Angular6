import { NgxLoggerLevel } from 'ngx-logger';
import * as Constants from '../../app/constants/constants';

export class Environment {
    name: string;
    production: boolean;
    logLevel?: number;
    loggingEndpoint?: string;
    apiBaseUrl?: string;

    constructor(
        name: string,
        production: boolean,
        logLevel?: number,
        loggingEndpoint?: string,
        apiBaseUrl?: string
    ) {
        this.name = name ? name : Constants.ENVIRONMENT.dev;
        this.production = production ? production : false;
        this.logLevel = logLevel ? logLevel : NgxLoggerLevel.WARN;
        this.loggingEndpoint = loggingEndpoint ? loggingEndpoint : '';
        this.apiBaseUrl = apiBaseUrl ? apiBaseUrl : '';
    }
}
