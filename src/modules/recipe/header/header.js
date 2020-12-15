import { LightningElement } from 'lwc';

export default class header extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
