import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.less']
})
export class UserRegisterComponent implements OnInit {
  registerUser: FormGroup; loading = false; gradList: Array<string> = ['Grd', 'Post Grd', 'HSC', 'SSC', 'Other'];
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userSer: UserService) { }

  ngOnInit() {
    this.registerUser = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      education: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  get f() { return this.registerUser.controls; }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.registerUser.invalid) {
      return;
    }

    console.log('Registration Started');
    this.loading = true;
    this.userSer.registerUser(this.registerUser.value);
    console.log('Registration Successfully');
    this.router.navigate(['/UserList']);

  }


}
