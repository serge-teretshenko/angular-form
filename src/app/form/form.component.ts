import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ConfigService} from '../config/config.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
    profileForm = this.fb.group ({
        name: [''],
        email: [''],
        phone: ['']
    });

    constructor(private fb: FormBuilder) { }

    onSubmit() {
        console.log(this.profileForm.value);
    }
};
