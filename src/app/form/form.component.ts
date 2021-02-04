import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
    profileForm = this.fb.group ({
        name: ['', Validators.required],
        email: ['']
    });

    constructor(private fb: FormBuilder) { }

    onSubmit() {
        console.log(this.profileForm.value);
    }
};
