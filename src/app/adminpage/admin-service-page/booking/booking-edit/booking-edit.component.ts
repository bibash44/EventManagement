import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BookingEditService } from './booking-edit.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  private booking;
  baseurl = 'http://localhost:1954';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private bookingService: BookingEditService) {
  }

  displayedColumns: string[] = ['username', 'useremail', 'userphone', 'prefered_location', 'booked_time', 'actions'];
  dataSource = new MatTableDataSource(this.booking);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.bookingService.getData().subscribe(res => this.dataSource.data = res);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteById(id: any, image: any) {

    var confirmDelete = confirm('Are you sure to delete ?');

    if (confirmDelete) {
      $.ajax({
        type: 'DELETE',
        url: this.baseurl + '/booking/',
        data: {
          id,
          image
        },
        success() {
          $('#booking-comment-validation').removeClass('alert-danger');
          $('#booking-comment-validation').addClass('alert-success').fadeIn(100);
          $('#booking-comment-validation').text('Booking data deleted');
          $('#booking-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#booking-comment-validation').fadeOut(1000);
          }, 2000);

          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        error() {
          $('#booking-comment-validation').removeClass('alert-success');
          $('#booking-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#booking-comment-validation').text('Something went wrong');
          $('#booking-comment-validation').fadeIn(100);
        }
      });
    }

    else {
      // do nothing
    }


  }

  closeForm() {
    $('#booking-update-form').fadeOut(500);
    $('#bookingDisplayrow').fadeIn(500);

  }

}
