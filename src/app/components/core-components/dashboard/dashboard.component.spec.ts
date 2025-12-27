import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { HttpErrorResponse } from '@angular/common/http';
// import { throwError } from 'rxjs/internal/observable/throwError';
// import { of } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
// import { CommonService } from '../../shared/common.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  // let mockService: jasmine.SpyObj<CommonService>;

  beforeEach(() => {
    // mockService = jasmine.createSpyObj('CommonService', ['getProductAPI']);
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, HeaderComponent, FooterComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, MatCardModule, MatToolbarModule, MatMenuModule, MatTableModule ],
      // providers: [
      //   { provide: CommonService, useValue: mockService }
      // ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set data on successful API response', () => {
  //   const mockResponse = { products: [{ id: 1, name: 'Laptop' }] };
  //   mockService.getProductAPI.and.returnValue(of(mockResponse));

  //   component.ngOnInit();

  //   expect(mockService.getProductAPI).toHaveBeenCalled();
  //   expect(component.data).toEqual(mockResponse.products);
  // });

  // it('should log error on failed API response', () => {
  //   const mockError = new HttpErrorResponse({ status: 500, statusText: 'Server Error' });
  //   mockService.getProductAPI.and.returnValue(throwError(() => mockError));

  //   const consoleSpy = spyOn(console, 'error');

  //   component.ngOnInit();

  //   expect(mockService.getProductAPI).toHaveBeenCalled();
  //   expect(consoleSpy).toHaveBeenCalledWith('Fetching Error', mockError);
  // });

  it('should call console.log when onEditEvent is triggered', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onEditEvent(42);
    expect(consoleSpy).toHaveBeenCalledWith('Edit event triggered for ID:', 42);
  });

  it('should call console.log when onDeleteEvent is triggered', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onDeleteEvent(99);
    expect(consoleSpy).toHaveBeenCalledWith('Delete event triggered for ID:', 99);
  });

});
