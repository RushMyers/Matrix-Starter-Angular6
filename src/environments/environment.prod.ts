import { NgxLoggerLevel } from 'ngx-logger';
import * as Constants from '../app/constants/constants';
import { Environment } from '../app/models/environment';

export const environment = new Environment(
    Constants.ENVIRONMENT.prod,
    true,
    NgxLoggerLevel.WARN
);
