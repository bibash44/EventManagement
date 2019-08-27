import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsEditService } from './clients-edit.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, AfterViewInit {

  private clients;
  // baseurl = 'https://eventmandu.com';
  baseurl = 'http://localhost/1954';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  // tslint:disable-next-line: no-unused-expression
  constructor(private clientsService: ClientsEditService) { }


  displayedColumns: string[] = ['client_name', 'image', 'comment', 'company', 'actions'];
  dataSource = new MatTableDataSource(this.clients);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    $('#img').fadeIn(200);
    this.uploadImageToServer($('#update-clients-image'));
  }

  deleteById(id: any, image: any) {
    var Confirmdelete = confirm('Are you sure to delete');

    if (Confirmdelete) {
      $.ajax({
        type: 'DELETE',
        url: this.baseurl + '/clients/delete',
        data: {
          id,
          image
        },
        success(data) {
          $('#client-comment-validation').removeClass('alert-danger');
          $('#client-comment-validation').addClass('alert-success').fadeIn(100);
          $('#client-comment-validation').text('Success story deleted');
          $('#client-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#client-comment-validation').fadeOut(1000);
          }, 2000);
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        error() {
          $('#client-comment-validation').removeClass('alert-success');
          $('#client-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#client-comment-validation').text('Something went wrong');
          $('#client-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#client-comment-validation').fadeOut(1000);
          }, 2000);
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        }
      });
    } else { }
  }


  populateForm(element) {
    $('#createclientsrow').fadeOut(500);
    $('#clients-update-form').fadeIn(500);
    $('#display-clients-image').fadeIn(500);
    $('#update-clients-name').focus();
    $('#update-clients-name').val(element.client_name);
    $('#display-clients-image').val(element.image);
    $('#update-clients-image-name').val(element.image);
    $('#update-clients-comment').val(element.comment);
    $('#update-clients-company').val(element.company);
    $('#update-clients-id').val(element.id);
    this.imageUrl = this.baseurl + '/UPLOADS/images/clients/' + element.image;
  }

  uploadImageToServer(imageUploadSelector) {
    const formData = new FormData();
    const files = imageUploadSelector.get(0).files;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    const fileDetails = imageUploadSelector[0].files[0];
    const fileSize = fileDetails.size;

    if (fileSize > 10000000) {
      $('#client-comment-validation').removeClass('alert-success');
      $('#client-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#client-comment-validation').text('Failed to upload, image size larger, please resize it');
      $('#client-comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#client-comment-validation').fadeOut(1000);
      }, 2000);
    } else {
      $.ajax({
        type: 'POST',
        url: this.baseurl + '/clients/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log('client update image ' + data);
          $('#update-clients-image-name').val(data);
        },
        error() {
          $('#client-comment-validation').removeClass('alert-success');
          $('#client-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#client-comment-validation').text('Failed to upload image');
          $('#client-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#client-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }

  clientsFormUpdate() {

    const idValue = $('#update-clients-id').val();
    const nameValue = $('#update-clients-name').val();
    const imageValue = $('#update-clients-image-name').val();
    const commentValue = $('#update-clients-comment').val();
    const companyValue = $('#update-clients-company').val();

    if (nameValue == '' || nameValue == 'Select Type') {
      $('#update-clients-name').focus();
      $('#client-comment-validation').removeClass('alert-success');
      $('#client-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#client-comment-validation').text('Please select type');
      $('#client-comment-validation').fadeIn(100);

      setTimeout(function () {
        $('#client-comment-validation').fadeOut(1000);
      }, 2000);

    } else if (imageValue == '') {
      $('#update-clients-name').focus();
      $('#client-comment-validation').removeClass('alert-success');
      $('#client-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#client-comment-validation').text('Please select image');
      $('#client-comment-validation').fadeIn(100);

      setTimeout(function () {
        $('#client-comment-validation').fadeOut(1000);
      }, 2000);
    }
    else if (commentValue == '') {
      $('#update-clients-comment').focus();
      $('#update-clients-comment').attr('placeholder', 'Please write client comment');
      $('#update-clients-comment').css({ border: '2px solid red' });;

    }
    else if (companyValue == '') {
      $('#update-clients-company').focus();
      $('#update-clients-company').css({ border: '2px solid red' });;
    } else {
      const data = {
        id: idValue,
        client_name: nameValue,
        image: imageValue,
        comment: commentValue,
        company: companyValue
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/clients/update/clients',
        data,
        success(res) {
          if (res) {
            $('#client-comment-validation').focus();
            $('#client-comment-validation').removeClass('alert-danger');
            $('#client-comment-validation').addClass('alert-success').fadeIn(100);
            $('#client-comment-validation').text('Services successfully uploaded');
            $('#client-comment-validation').fadeIn(100);

            setTimeout(function () {
              $('#client-comment-validation').fadeOut(1000);
            }, 2000);


            setTimeout(function () {
              window.location.reload();
            }, 2000);
          }
        },
        error() {
          $('#client-comment-validation').focus();
          $('#client-comment-validation').removeClass('alert-success');
          $('#client-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#client-comment-validation').text('Something went wrong');
          $('#client-comment-validation').fadeIn(100);

          setTimeout(function () {
            $('#client-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }

  closeForm() {
    $('#clients-update-form').fadeOut(500);
    $('#createclientsrow').fadeIn(500);

  }

  ngOnInit() {
    return this.clientsService.getData().subscribe(res => this.dataSource.data = res);
  }

}
