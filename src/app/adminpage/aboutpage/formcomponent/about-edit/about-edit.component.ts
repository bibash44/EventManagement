import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as $ from 'jquery';
import {AboutUsEditService} from './about-edit.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {

  private clients;
  baseurl = 'http://eventmandu.com';

  constructor(private  aboutusService: AboutUsEditService) { }


  displayedColumns: string[] = ['title', 'content', 'actions'];
  dataSource = new MatTableDataSource(this.clients);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit() {
    return this.aboutusService.getData().subscribe(res => this.dataSource.data = res);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteById(id: any) {
    $.ajax({
      type: 'DELETE',
      url: this.baseurl + '/aboutus/delete',
      data: {
        id
      },
      success(res) {
        alert('Content Deleted');
        setTimeout(function() {
          window.location.reload();
        }, 2000);
      },
      error() {

      }
    });
  }


  populateForm(element) {
    $('#createaboutusrow').fadeOut(500);
    $('#aboutus-update-form').fadeIn(500);
    $('#update-aboutus-title').focus();
    $('#update-aboutus-title').val(element.title);
    $('#update-aboutus-content').val(element.content);
    $('#update-aboutus-id').val(element.id);
  }

  aboutusFormUpdate() {

    const idValue = $('#update-aboutus-id').val();
    const titleValue = $('#update-aboutus-title').val();
    const contentValue = $('#update-aboutus-content').val();

    if (titleValue == '') {
      alert('Please enter AboutUs title');

    }else if (contentValue == '') {
      alert('Please enter content');
    } else {
      const data = {
        id: idValue,
        title: titleValue,
        content: contentValue
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/aboutus/update/aboutus',
        data,
        success(res) {
          if (res) {
            $('#update-comment-validation').removeClass('alert-danger');
            $('#update-comment-validation').addClass('alert-success').fadeIn(100);
            $('#update-comment-validation').text('Services successfully uploaded');
            $('#update-comment-validation').fadeIn(100);
            $('#update-comment-validation').focus();

            setTimeout(function() {
              $('#update-comment-validation').fadeOut(1000);
            }, 2000);


            setTimeout(function() {
              window.location.reload();
            }, 2000);
          }
        },
        error() {
          $('#update-comment-validation').removeClass('alert-success');
          $('#update-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#update-comment-validation').text('Something went wrong');
          $('#update-comment-validation').fadeIn(100);
          $('#update-comment-validation').focus();

          setTimeout(function() {
            $('#update-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }

  closeForm() {
    $('#aboutus-update-form').fadeOut(500);
    $('#createaboutusrow').fadeIn(500);

  }


}
