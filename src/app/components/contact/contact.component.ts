import { Component, OnInit } from '@angular/core';

import { SlideInterface } from './imageSlider/types/slide.interface';
// import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private emailservice: EmailService) { }



  slides: SlideInterface[] = [
    { url: '/assets/images/Updated_Images/Asset 21212121.png', title: 'beach' },
    // { url: '/assets/images/2.png', title: 'beach' },
    // { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    // { url: '/assets/images/service_background_2.jpg', title: 'beach' }
  ];



  connectwithusForm = this.fb.group({
    name: ['', Validators.required],
    // phone: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });


  ngOnInit(): void {
  }




  SendEmail() {
    var name = this.connectwithusForm.value.name
    // var phone = this.connectwithusForm.value.phone
    var projecttype = this.connectwithusForm.value.subject
    var emailid = this.connectwithusForm.value.email
    var contact = this.connectwithusForm.value.phone
    var message = this.connectwithusForm.value.message

    this.emailservice.sendMail2(name, projecttype, emailid, contact, message).subscribe((result) => {
      // this.router.navigate(['/home'])
      location.reload();
    }, error => {
      console.log(error);
    });
  }



}
