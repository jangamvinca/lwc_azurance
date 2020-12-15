import { LightningElement } from 'lwc';

export default class plan extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
