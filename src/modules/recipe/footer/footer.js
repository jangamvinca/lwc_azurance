import { LightningElement } from 'lwc';

export default class footer extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
