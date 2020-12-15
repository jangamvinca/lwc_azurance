import { LightningElement } from 'lwc';

export default class carousal extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
