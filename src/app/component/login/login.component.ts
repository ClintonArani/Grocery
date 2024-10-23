import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to styleUrls
})
export class LoginComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['',  Validators.required],
    email: ['',  Validators.required,Validators.email]
  });

  constructor(private fb: FormBuilder) {} 

  onSubmit(): void { 
    console.log('Submitted form', this.registerForm.value, this.registerForm.invalid);
  }
}
