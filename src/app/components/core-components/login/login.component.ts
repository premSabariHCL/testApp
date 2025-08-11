import { Component, OnInit } from '@angular/core';
import { IndexeddbService } from '../../shared/indexeddb.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<any>;
  constructor(private indexDB: IndexeddbService, private fb: FormBuilder, private snackBar: MatSnackBar, 
    private routes: Router
  ) {
    this.loginForm = this.fb.group({
      emailId: [''],
      password: [''],
      remember: ['']
    });
  }
  ngOnInit(): void {
  }

  onLogin(): void {
    const { emailId, password } = this.loginForm.value;

    this.indexDB.getUser(emailId, password).then(user => {
      if (!user) {
        console.error(`User Not Found ${user.emailId}`);
        return;
      }

      if((user.emailId === emailId) && (user.password === password)) {
        this.snackBar.open('User Login Sucessfully', `undo`, {duration: 5000 });
        this.routes.navigate(['/lobby']);
      } else {
        this.snackBar.open('Invalid Credientals', 'undo', { duration: 5000 });
      }
    }).catch(err => console.error('Login err', err))
  }

}
