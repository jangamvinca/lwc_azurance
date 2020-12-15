import { LightningElement } from 'lwc';

export default class getquote extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
