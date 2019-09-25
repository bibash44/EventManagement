import { AppServiceService } from './../../../app-service.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';
import { ReviewEditService } from './review-edit.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit, AfterViewInit {

  private review;
  // baseurl = 'https://eventmandu.com';
  baseurl = this.BASE_URL.publishBaseUrl();
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private reviewService: ReviewEditService, private BASE_URL: AppServiceService) {
  }

  displayedColumns: string[] = ['name', 'comment', 'date', 'image', 'actions'];
  dataSource = new MatTableDataSource(this.review);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.reviewService.getData().subscribe(res => this.dataSource.data = res['data']);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteById(id: any, image: any) {
    var ConfirmDelete = confirm('Are you sure you want to delete');
    if (ConfirmDelete) {
      $.ajax({
        type: 'DELETE',
        url: this.baseurl + 'review',
        data: {
          id,
          image
        },
        success(data) {
          $('#review-comment-validation').removeClass('alert-danger');
          $('#review-comment-validation').addClass('alert-success').fadeIn(100);
          $('#review-comment-validation').text('Review deleted successfully');
          $('#review-comment-validation').fadeIn(100);
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        },
        error() {
          $('#review-comment-validation').removeClass('alert-success');
          $('#review-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#review-comment-validation').text('Something went wrong.');
          $('#review-comment-validation').fadeIn(100);
        }
      });
    } else { }
  }

  closeForm() {
    $('#review-update-form').fadeOut(500);
    $('#reviewDisplayrow').fadeIn(500);

  }

}
