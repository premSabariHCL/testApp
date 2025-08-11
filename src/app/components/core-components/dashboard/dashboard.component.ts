import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['id', 'title', 'brand', 'category', 'availabilityStatus', 'warrantyInformation'];
  columnsToWithExpandDisplay = [...this.displayedColumns, 'actions'];
  data: any[] = [];
  expandElement: any | null;
  constructor(private routes: ActivatedRoute, private services: CommonService) {}
  ngOnInit(): void {
    this.services.getProductAPI().subscribe((data: any) => {
      this.data = data.products;
    }, (err: HttpErrorResponse) => {
      console.error('Fetching Error', err);
    });
  }
  onEditEvent(id: number): void {
    console.log('Edit event triggered for ID:', id);
}
  onDeleteEvent(id: number):void {
    console.log('Delete event triggered for ID:', id);
  }
}
