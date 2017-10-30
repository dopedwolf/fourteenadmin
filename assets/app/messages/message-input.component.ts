import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.title = form.value.title;
            this.message.description = form.value.description;
            this.message.venue = form.value.venue;
            this.message.address = form.value.address;
            this.message.time = form.value.time;
            this.message.price = form.value.price;
            this.message.date = form.value.date;
            this.message.eventType = form.value.eventType;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        } else {
            // Create
            const message = new Message(form.value.title, form.value.description, form.value.venue, form.value.address, form.value.price, form.value.time, form.value.date, form.value.eventType);
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}
