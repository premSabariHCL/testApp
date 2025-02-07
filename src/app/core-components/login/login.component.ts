import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formData: FormGroup<any> = new FormGroup({});
  constructor(private _fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.formData = this._fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  handleLogin(data: any): void {
    this.authService.login(data.userName, data.password).subscribe((res) => {
      console.log('Is Login Success', res);
      if (res) this.router.navigate(['/lobby']);
    });
  }

}
