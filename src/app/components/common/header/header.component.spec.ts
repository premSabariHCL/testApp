import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, MatToolbarModule, MatMenuModule ],
      // providers: [
      //   { provide: Router, useValue: mockRouter }
      // ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should navigate to /lobby when URL is /lobby', () => {
  //   const consoleSpy = spyOn(console, 'log');
  //   component.handleURL('/lobby');
  //   expect(consoleSpy).toHaveBeenCalledWith('URL: ', '/lobby');
  //   expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/lobby');
  // });

  // it('should navigate to /admin when URL is /admin', () => {
  //   const consoleSpy = spyOn(console, 'log');
  //   component.handleURL('/admin');
  //   expect(consoleSpy).toHaveBeenCalledWith('URL: ', '/admin');
  //   expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/admin');
  // });

  // it('should navigate to /user when URL is /user', () => {
  //   const consoleSpy = spyOn(console, 'log');
  //   component.handleURL('/user');
  //   expect(consoleSpy).toHaveBeenCalledWith('URL: ', '/user');
  //   expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/user');
  // });

  // it('should not navigate for unknown URLs', () => {
  //   const consoleSpy = spyOn(console, 'log');
  //   component.handleURL('/unknown');
  //   expect(consoleSpy).toHaveBeenCalledWith('URL: ', '/unknown');
  //   expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
  // });

});
