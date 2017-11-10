// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import * as ngMaterial from 'angular-material';



/**
 * Import Module Configuration
 */
import { configuration } from './core.configuration';

export const moduleName =
    angular.module('app.core', [
        // todo : inject route here
        'ngMaterial',
        'ui.router'
    ])
    /**
     * Register Module Configuration
     */
    .config(configuration)
    .name;
