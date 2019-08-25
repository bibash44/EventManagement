import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as $ from 'jquery';
import {ServicesDisplayEditService} from './services-display-edit.service';
@Component({
  selector: 'app-services-display-edit',
  templateUrl: './services-display-edit.component.html',
  styleUrls: ['./services-display-edit.component.css']
})
export class ServicesDisplayEditComponent implements OnInit, AfterViewInit {

  private servicesDisplay;
  baseurl = 'http://eventmandu.com';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private  servicesDisplayService: ServicesDisplayEditService) {
  }

  displayedColumns: string[] = ['services_title', 'image', 'actions'];
  dataSource = new MatTableDataSource(this.servicesDisplay);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.servicesDisplayService.getData().subscribe(res => this.dataSource.data = res);

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
    $('#display-services-display-image').fadeIn(200);
    this.uploadImageToServer($('#update-services-display-image'));
  }

  deleteById(id: any, image: any) {
    // alert(image);
    var ConfirmDelete= confirm('Are you sure you want to delete');
    if(ConfirmDelete){
    $.ajax({
      type: 'DELETE',
      url: this.baseurl + '/services_home/delete',
      data: {
        id,
        image
      },
      success(data) {
        $('#service-display-comment-validation').removeClass('alert-danger');
        $('#service-display-comment-validation').focus();
        $('#service-display-comment-validation').addClass('alert-success').fadeIn(100);
        $('#service-display-comment-validation').text('Service deleted successfully');
        $('#service-display-comment-validation').fadeIn(100);
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      },
      error() {
        $('#service-display-comment-validation').removeClass('alert-success');
        $('#service-display-comment-validation').addClass('alert-danger').fadeIn(100);
        $('#service-display-comment-validation').text('Something went wrong.');
        $('#service-display-comment-validation').fadeIn(100);
      }
    });
  }
  }


  populateForm(element) {
    $('#createservicesDisplayrow').fadeOut(500);
    $('#services-display-update-form').fadeIn(500);
    $('#update-services-display-title').focus();
    $('#update-services-display-title').val(element.services_title);
    $('#update-services-display-image-name').val(element.image);
    $('#update-services-display-id').val(element.id);
    this.imageUrl = this.baseurl + '/UPLOADS/images/services_home/' + element.image;
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
      $('#service-display-comment-validation').removeClass('alert-success');
      $('#service-display-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#service-display-comment-validation').text('Failed to upload, image size larger, please resize it');
      $('#service-display-comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#service-display-comment-validation').fadeOut(1000);
      }, 2000);
    } else {
      $.ajax({
        type: 'POST',
        url: this.baseurl + '/services_home/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data)
          $('#update-services-display-image-name').val(data);
        },
        error() {

        }
      });
    }
  }

  servicesDisplayFormUpdate() {

    const idValue = $('#update-services-display-id').val();
    const servicesDisplayTitle = $('#update-services-display-title').val();
    const imageValue = $('#update-services-display-image-name').val();

    if (servicesDisplayTitle == '') {
      alert('Please enter Service Title');

    } else if (imageValue == '') {
      alert('Please select an image***');
    } else {
      const data = {
        id: idValue,
        services_title: servicesDisplayTitle,
        image: imageValue
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/services_home/update/services_home',
        data,
        success(res) {
          if (res) {
            $('#service-display-comment-validation').removeClass('alert-danger');
            $('#service-display-comment-validation').addClass('alert-success').fadeIn(100);
            $('#service-display-comment-validation').text('Services successfully updated');
            $('#service-display-comment-validation').fadeIn(100);
            $('#service-display-comment-validation').focus();

            setTimeout(function () {
              $('#service-display-comment-validation').fadeOut(1000);
            }, 2000);


            setTimeout(function () {
              window.location.reload();
            }, 2000);
          }
        },
        error() {
          $('#service-display-comment-validation').removeClass('alert-success');
          $('#service-display-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#service-display-comment-validation').text('Something went wrong');
          $('#service-display-comment-validation').fadeIn(100);
          $('#service-display-comment-validation').focus();

          setTimeout(function () {
            $('#service-display-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }

  closeForm() {
    $('#services-display-update-form').fadeOut(500);
    $('#createservicesDisplayrow').fadeIn(500);

  }

}
