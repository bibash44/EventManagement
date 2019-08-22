import { SlidingImageEditService } from './sliding-image-edit.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-sliding-image-edit',
  templateUrl: './sliding-image-edit.component.html',
  styleUrls: ['./sliding-image-edit.component.css']
})
export class SlidingImageEditComponent implements OnInit, AfterViewInit {


  private servicesDisplay;
  baseurl = 'http://localhost:1954';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private slidingImageEditService: SlidingImageEditService) {
  }

  displayedColumns: string[] = ['image', 'slider_title', 'sub_title', 'actions'];
  dataSource = new MatTableDataSource(this.servicesDisplay);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.slidingImageEditService.getData().subscribe(res => this.dataSource.data = res);

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
    $('#display-sliding-image').fadeIn(200);
    this.uploadImageToServer($('#update-sliding-image'));
  }

  deleteById(id: any, image: any) {
    var Confirmdelete = confirm('Are you sure to delete');

    if (Confirmdelete) {
      $.ajax({
        type: 'DELETE',
        url: this.baseurl + '/sliding_image/delete',
        data: {
          id,
          image
        },
        success(data) {
          $('#sliding-image-comment-validation').removeClass('alert-danger');
          $('#sliding-image-comment-validation').addClass('alert-success').fadeIn(100);
          $('#sliding-image-comment-validation').text('Sliding Image details deleted successfully');
          $('#sliding-image-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#sliding-image-comment-validation').fadeOut(1000);
          }, 2000);
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        error() {
          $('#sliding-image-comment-validation').addClass('alert-danger');
          $('#sliding-image-comment-validation').removeClass('alert-success').fadeIn(100);
          $('#sliding-image-comment-validation').text('Failed to upload , something went wrong');
          $('#sliding-image-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#sliding-image-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }

    else{
      // Do nothing
    }

  }


  populateForm(element) {
    $('#createSlidingImageDisplayrow').fadeOut(500);
    $('#sliding-image-update-form').fadeIn(500);
    $('#update-sliding-image-title').focus();
    $('#update-sliding-image-title').val(element.slider_title);
    $('#update-sliding-image-sub-title').val(element.sub_title);
    $('#update-sliding-image-name').val(element.image);
    $('#update-sliding-image-id').val(element.id);
    this.imageUrl = this.baseurl + '/UPLOADS/images/sliding_image/' + element.image;
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
      $('#sliding-image-comment-validation').removeClass('alert-success');
      $('#sliding-image-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#sliding-image-comment-validation').text('Failed to upload, image size larger, please resize it');
      $('#sliding-image-comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#sliding-image-comment-validation').fadeOut(1000);
      }, 2000);
    } else {
      $.ajax({
        type: 'POST',
        url: this.baseurl + '/sliding_image/upload/image/sliding',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data)
          $('#update-sliding-image-name').val(data);
        },
        error() {
          $('#sliding-image-comment-validation').removeClass('alert-success');
          $('#sliding-image-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#sliding-image-comment-validation').text('Image Not Uploaded');
          $('#sliding-image-comment-validation').fadeIn(100);
          $('#sliding-image-comment-validation').focus();
        }
      });
    }
  }

  slidingImageFormUpdate() {

    const idValue = $('#update-sliding-image-id').val();
    const titleValue = $('#update-sliding-image-title').val();
    const subTitleValue = $('#update-sliding-image-sub-title').val();
    const imageValue = $('#update-sliding-image-name').val();

    if (titleValue == '') {
      alert('Please enter a Title');
    } else if (subTitleValue == '') {
      alert('Please enter sub title');
    } else if (imageValue == '') {
      alert('Please select an image***');
    } else {
      const data = {
        id: idValue,
        image: imageValue,
        slider_title: titleValue,
        sub_title: subTitleValue,
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/sliding_image/update/slidingImage',
        data,
        success(res) {
          if (res) {
            $('#update-sliding-image-title').focus();
            $('#sliding-image-comment-validation').removeClass('alert-danger');
            $('#sliding-image-comment-validation').addClass('alert-success').fadeIn(100);
            $('#sliding-image-comment-validation').text('Services successfully updated');
            $('#sliding-image-comment-validation').fadeIn(100);


            setTimeout(function () {
              $('#sliding-image-comment-validation').fadeOut(1000);
            }, 2000);


            setTimeout(function () {
              window.location.reload();
            }, 2000);
          }
        },
        error() {
          $('#sliding-image-comment-validation').removeClass('alert-success');
          $('#sliding-image-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#sliding-image-comment-validation').text('Something went wrong');
          $('#sliding-image-comment-validation').fadeIn(100);
          $('#sliding-image-comment-validation').focus();

          setTimeout(function () {
            $('#sliding-image-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }

  closeForm() {
    $('#sliding-image-update-form').fadeOut(500);
    $('#createSlidingImageDisplayrow').fadeIn(500);

  }
}
