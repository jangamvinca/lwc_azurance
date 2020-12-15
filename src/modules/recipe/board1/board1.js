import { LightningElement } from 'lwc';

export default class board1 extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
