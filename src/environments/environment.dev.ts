import { NgxLoggerLevel } from 'ngx-logger';
import { Environment } from '../app/models/environment';

export const environment = new Environment('', '', NgxLoggerLevel.WARN, 'dev', false);
