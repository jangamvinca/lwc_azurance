import { LightningElement } from 'lwc';

export default class testimony extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
