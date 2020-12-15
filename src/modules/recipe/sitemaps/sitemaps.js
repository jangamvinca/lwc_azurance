import { LightningElement } from 'lwc';

export default class sitemaps extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
