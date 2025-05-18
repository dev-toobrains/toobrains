import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  get formControls() {
    return this.contactForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // In a real application, we would send the form data to a server
      console.log('Form submission', this.contactForm.value);
      
      // Reset the form
      this.contactForm.reset();
      this.submitted = false;
      
      // Show success message (in a real app)
      alert('Your message has been sent successfully!');
    }
  }
}