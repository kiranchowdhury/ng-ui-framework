// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import 'angular-material';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './core/core.module';
import appComponent from './app.component';

export const moduleName =
    angular.module('app', [coreModule])
    .component('appComponent', appComponent)
    .name;
