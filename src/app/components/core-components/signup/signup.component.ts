import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexeddbService } from '../../shared/indexeddb.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup<any>;

  countryData: any = [];
  stateData: any = [];
  cityData: any = [];

  selectedCountry = '';
  selectedState = '';

  durationInSeconds = 5;

  constructor(private services: CommonService, private fb: FormBuilder, private indexDB: IndexeddbService,
    private snackbar: MatSnackBar
  ) {
    this.signupForm = this.fb.group({
      fname: [''],
      lname: [''],
      mobileNo: [''],
      emailId: ['', Validators.email],
      password: [''],
      cpassword: [''],
      country: [''],
      state: [''],
      city: ['']
    });
  }
  ngOnInit(): void {
    this.services.getCountryAPI().subscribe((res: any) => {
      this.countryData = (res.data);
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  onCountryChange(event: any) {
    this.selectedCountry = event.value;
    if (this.selectedCountry) {
      this.services.getStatesAPI(this.selectedCountry).subscribe((res: any) => {
        this.stateData = (res.data.states);
      }, (err: HttpErrorResponse) => {
        console.error(err);
      });
    }
  }

  onStateChange(event: any) {
    this.selectedState =  event.value;
    this.services.getCitiesAPI(this.selectedCountry, this.selectedState).subscribe((res: any) => {
      this.cityData = res.data;
    }, (err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  onSubmit() {
    const user = (this.signupForm.value);
    if (!user.fname) {
      console.error(`${user.fname} is already exists!`);
      return;
    }
    this.indexDB.addUser(user)
    .then(() => {
      this.snackbar.open('User added',  'undo', { duration: 1000 });
    } )
    .catch((err) => console.error(err));
  }

}
