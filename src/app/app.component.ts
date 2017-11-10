import { IComponentController, IComponentOptions } from 'angular';
import 'angular-material/angular-material.scss';

import './app.component.scss';

class AppController implements IComponentController {
    items: {name: string}[];
    selecteItem: string;
    constructor() {
        console.log('app controller loaded successfully');
        this.items = [{name: 'English'},
        {name: 'French'}];
        this.selecteItem = 'English';
    }
    getSelectedText(): string {
        // alert('hello');
        // if (this.selecteItem !== undefined) {
        //    // this.selecteItem = 'English';
        //     console.log( 'selected item is'  + this.selecteItem);
        // }
        console.log('Selected lang is ' + this.selecteItem);
        return this.selecteItem;
    }
}

const AppComponent: IComponentOptions = {
    controller: AppController,
    template: require('./app.component.html') as string,
    bindings: {
       // selecteItem: '@'
    }
};

export default AppComponent;
