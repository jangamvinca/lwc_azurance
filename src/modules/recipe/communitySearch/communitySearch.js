import { LightningElement } from 'lwc';

export default class communitySearch extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
