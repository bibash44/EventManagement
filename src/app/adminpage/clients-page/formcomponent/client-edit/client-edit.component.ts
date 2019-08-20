import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsEditService} from './clients-edit.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, AfterViewInit {

  private clients;
  baseurl = 'http://localhost:1954';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  // tslint:disable-next-line: no-unused-expression
  constructor(private  clientsService: ClientsEditService) { }


  displayedColumns: string[] = ['client_name', 'image', 'comment', 'company', 'actions'];
  dataSource = new MatTableDataSource(this.clients);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
    // alert(image);
    $.ajax({
      type: 'DELETE',
      url: this.baseurl + '/clients/delete',
      data: {
        id,
        image
      },
      success(data) {
        alert('Image Deleted');
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      },
      error() {

      }
    });
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
      $('#update-comment-validation').removeClass('alert-success');
      $('#update-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#update-comment-validation').text('Failed to upload, image size larger, please resize it');
      $('#update-comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#update-comment-validation').fadeOut(1000);
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
          console.log(data)
          $('#update-clients-image-name').val(data);
        },
        error() {

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

    if (nameValue == 'Select Type') {
      alert('Please enter client name');

    } else if (imageValue == '') {
      alert('Please select an image***');
    } else if (commentValue == '') {
      alert('Please enter client comment');
    } else if (companyValue == '') {
      alert('Please enter clients company');
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
            $('#update-comment-validation').removeClass('alert-danger');
            $('#update-comment-validation').addClass('alert-success').fadeIn(100);
            $('#update-comment-validation').text('Services successfully uploaded');
            $('#update-comment-validation').fadeIn(100);
            $('#update-comment-validation').focus();

            setTimeout(function () {
              $('#update-comment-validation').fadeOut(1000);
            }, 2000);


            setTimeout(function () {
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

          setTimeout(function () {
            $('#update-comment-validation').fadeOut(1000);
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
