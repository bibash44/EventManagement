import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesEditService } from './services-edit.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit, AfterViewInit {


  private clients;
  baseurl = 'http://localhost:1954';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private serviceService: ServicesEditService) {
  }

  displayedColumns: string[] = ['type', 'title', 'image', 'description', 'actions'];
  dataSource = new MatTableDataSource(this.clients);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.serviceService.getData().subscribe(res => this.dataSource.data = res);
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
    this.uploadImageToServer($('#update-services'));
  }

  deleteById(id: any, image: any) {

    var confirmDelete = confirm('Are you sure to delete ?');
    console.log(confirmDelete);
    if (confirmDelete) {
      $.ajax({
        type: 'DELETE',
        url: this.baseurl + '/services/delete',
        data: {
          id,
          image
        },
        success(data) {
          $('#delete-comment-validation').removeClass('alert-danger');
          $('#delete-comment-validation').addClass('alert-success').fadeIn(100);
          $('#delete-comment-validation').text('Services deleted successfully');
          $('#delete-comment-validation').fadeIn(100);

          setTimeout(function () {
            $('#delete-comment-validation').fadeOut(1000);
          }, 2000);

          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        error() {
          $('#delete-comment-validation').removeClass('alert-success');
          $('#delete-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#delete-comment-validation').text('Failed to delete service something went wrong');
          $('#delete-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#delete-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
    else {

    }


  }

  populateForm(element) {
    // alert(id);
    $('#updateform').fadeIn(500);
    $('#updatetype').focus();
    $('#createservicerow').fadeOut(500);

    $('#updatetitle').val(element.title);
    $('#updatepackageDescription').val(element.description);
    $('#updatetype').val(element.type);
    $('#updateimagename').val(element.image);
    $('#updateid').val(element.id);
    this.imageUrl = this.baseurl + '/UPLOADS/images/services/' + element.image;
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
        url: this.baseurl + '/services/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          $('#updateimagename').val(data);
        },
        error() {

        }
      });
    }
  }

  servicesFormUpdate() {

    const idValue = $('#updateid').val();
    const typeValue = $('#updatetype').val();
    const imageValue = $('#updateimagename').val();
    const updatetitleValue = $('#updatetitle').val();
    const packageDescriptionValue = $('#updatepackageDescription').val();

    if (typeValue == 'Select Type' || typeValue == '') {
      $('#updatetype').focus();
      $('#update-comment-validation').removeClass('alert-success');
      $('#update-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#update-comment-validation').text('Please select type');
      $('#update-comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#update-comment-validation').fadeOut(1000);
      }, 2000);

    } else if (imageValue == '') {
      $('#updatetype').focus();
      $('#update-comment-validation').removeClass('alert-success');
      $('#update-comment-validation').addClass('alert-danger').fadeIn(100);
      $('#update-comment-validation').text('Please select image');
      $('#update-comment-validation').fadeIn(100);
      setTimeout(function () {
        $('#update-comment-validation').fadeOut(1000);
      }, 2000);


    } else if (updatetitleValue == '') {
      $('#updatetitle').attr('placeholder', 'Please enter a title *');
      $('#updatetitle').focus();
      $('#updatetitle').css({ border: '2px solid red' });
    } else if (packageDescriptionValue === '') {
      $('#updatepackageDescription').attr('placeholder', 'Please enter package description *');
      $('#updatepackageDescription').focus();
      $('#updatepackageDescription').css({ border: '2px solid red' });
    } else {
      const data = {
        id: idValue,
        type: typeValue,
        image: imageValue,
        title: updatetitleValue,
        description: packageDescriptionValue
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/services/update/services',
        data,
        success(res) {
          if (res) {
            $('#updatetype').focus();
            $('#update-comment-validation').removeClass('alert-danger');
            $('#update-comment-validation').addClass('alert-success').fadeIn(100);
            $('#update-comment-validation').text('Services successfully uploaded');
            $('#update-comment-validation').fadeIn(100);

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

          setTimeout(function () {
            $('#update-comment-validation').fadeOut(1000);
          }, 2000);
        }
      });
    }
  }

  closeForm() {
    $('#updateform').fadeOut(500);
    $('#createservicerow').fadeIn(500);

  }

}
