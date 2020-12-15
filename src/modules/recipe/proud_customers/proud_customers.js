import { LightningElement } from 'lwc';

export default class proud_customers extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
