import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';
import { SlideInterface2 } from './imageSlider3/types/slide.interface';
// import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import { EmailService } from 'src/app/services/email.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/images/Updated_Images/colorful-paint-black-background.jpg', title: 'beach' },
    // { url: '/assets/images/2.png', title: 'beach' },
    // { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    // { url: '/assets/images/service_background_2.jpg', title: 'beach' }
  ];

  slides2: SlideInterface[] = [
    { url: '/assets/images/2.png', title: 'beach' },
    { url: '/assets/images/carousel_1.jpg', title: 'beach' },
    { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    { url: '/assets/images/service_background_2.jpg', title: 'beach' }
  ];

  slides3: SlideInterface2[] = [
    { url: '/assets/images/stay_update_1.png', title: 'beach1' },
    { url: '/assets/images/stay_update_2.png', title: 'beach1' },
    { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    { url: '/assets/images/service_background_2.jpg', title: 'beach' }
  ];

  constructor(private fb : FormBuilder,  private router: Router, private emailservice : EmailService) { }


  
  connectwithusForm = this.fb.group({
    name: ['',Validators.required],
    company: ['',Validators.required],
    projecttype: ['',Validators.required],
    emailId:['',Validators.required],
    contact:['',Validators.required],
    message:['',Validators.required]
  });

  ngOnInit(): void {
  }


  SendEmail(){
    var name = this.connectwithusForm.value.name
    var company = this.connectwithusForm.value.company
    var projecttype = this.connectwithusForm.value.projecttype
    var emailid = this.connectwithusForm.value.emailId
    var contact = this.connectwithusForm.value.contact
    var message = this.connectwithusForm.value.message

    this.emailservice.sendMail(name, company, projecttype, emailid, contact, message).subscribe((result)=>{
      // this.router.navigate(['/home'])
      location.reload();
    },error => {
      console.log(error);
    });
  }


  changePage(name:string){
    if(name == 'grapic_design'){
      this.router.navigate(['/graphic-design'])
    }
    if(name == 'signage_wayfinding'){
      this.router.navigate(['/signage-wayfinding'])
    }
    if(name == 'digital_marketing'){
      this.router.navigate(['/digital-marketing'])
    }
    if(name == 'wideformat_printing'){
      this.router.navigate(['/print-media'])
    }
    if(name == 'print_media'){
      this.router.navigate(['/print-media'])
    }
  }

}
