import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as $ from 'jquery';
import {SuccessStoryEditService} from './success-story-edit.service';

@Component({
  selector: 'app-success-story-edit',
  templateUrl: './success-story-edit.component.html',
  styleUrls: ['./success-story-edit.component.css']
})
export class SuccessStoryEditComponent implements OnInit, AfterViewInit {


  private servicesDisplay;
  baseurl = 'http://localhost:1954';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private  successStoryEditService: SuccessStoryEditService) {
  }

  displayedColumns: string[] = ['title', 'image', 'actions'];
  dataSource = new MatTableDataSource(this.servicesDisplay);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.successStoryEditService.getData().subscribe(res => this.dataSource.data = res);

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
    $('#display-success-story-image').fadeIn(200);
    this.uploadImageToServer($('#update-success-story-image'));
  }

  deleteById(id: any, image: any) {
    // alert(image);
    $.ajax({
      type: 'DELETE',
      url: this.baseurl + '/success_story/delete',
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
    $('#successStoryDisplayrow').fadeOut(500);
    $('#success-story-update-form').fadeIn(500);
    $('#update-success-story-title').focus();
    $('#update-success-story-title').val(element.title);
    $('#update-success-story-image-name').val(element.image);
    $('#update-success-story-id').val(element.id);
    this.imageUrl = this.baseurl + '/UPLOADS/images/success_story/' + element.image;
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
        url: this.baseurl + '/success_story/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data);
          $('#update-success-story-image-name').val(data);
        },
        error() {

        }
      });
    }
  }

  servicesDisplayFormUpdate() {

    const idValue = $('#update-success-story-id').val();
    const servicesDisplayTitle = $('#update-success-story-title').val();
    const imageValue = $('#update-success-story-image-name').val();

    if (servicesDisplayTitle == '') {
      alert('Please enter Title');

    } else if (imageValue == '') {
      alert('Please select an image***');
    } else {
      const data = {
        id: idValue,
        title: servicesDisplayTitle,
        image: imageValue
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/success_story/update',
        data,
        success(res) {
          if (res) {
            $('#update-comment-validation').removeClass('alert-danger');
            $('#update-comment-validation').addClass('alert-success').fadeIn(100);
            $('#update-comment-validation').text('Success Story successfully updated');
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
    $('#success-story-update-form').fadeOut(500);
    $('#successStoryDisplayrow').fadeIn(500);

  }

}
