import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student/student.service";
import { Router, ActivatedRoute } from '@angular/router';
import {MailService} from "../mail.service";
import {FormGroup, FormControl} from "@angular/forms";
import {id} from "@swimlane/ngx-datatable/release/utils";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  providers: [MailService]
})
export class MailComponent implements OnInit {
  private student : object;
  private id : number;
  private sub: any;
  Send : boolean = false;

  mailForm = new FormGroup({
    subject: new FormControl(),
    message: new FormControl(),
    to_email: new FormControl()
  })

  constructor(private studentservice : StudentService, private router: Router, private route: ActivatedRoute, private mailservice: MailService) {
    this.student = {};
    this.mailForm.patchValue({
      subject: "Afspraak met SLB'er.",
      message: "Je bent al een tijdje niet meer aanwezig geweest, graag wil ik je uitnodigen voor een gesprek."
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.getStudent(params['id']);
  });
  }

  getStudent(id){
    this.studentservice.getStudentById(id)
      .subscribe(data => {
        this.student = data;
        this.mailForm.patchValue({
          to_email: data.email
        })
      })
  }
  sendMail() {
    this.mailservice.setEmail({
      subject: this.mailForm.value.subject,
      message: this.mailForm.value.message,
      to_email: this.mailForm.value.to_email
    })
      .subscribe(data => {
        this.Send = true;
        this.router.navigate(['/student/'+this.id ]);
      });
  }
}
