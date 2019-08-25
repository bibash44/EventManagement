import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioEditService } from './portfolio-edit.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';


@Component({
  selector: 'app-protfolio-edit',
  templateUrl: './protfolio-edit.component.html',
  styleUrls: ['./protfolio-edit.component.css']
})
export class ProtfolioEditComponent implements OnInit, AfterViewInit {


  private clients;
  baseurl = 'https://eventmandu.com';
  fileToUpload: File = null;
  imagename = null;
  imageUrl: string;

  constructor(private portfolioService: PortfolioEditService) {
  }

  displayedColumns: string[] = ['type', 'image', 'actions'];
  dataSource = new MatTableDataSource(this.clients);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    return this.portfolioService.getData().subscribe(res => this.dataSource.data = res);

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
    this.uploadImageToServer($('#update-portfolio'));
  }

  deleteById(id: any, image: any) {

    var confirmDelete = confirm('Are you sure to delete ?');

    if (confirmDelete) {
      $.ajax({
        type: 'DELETE',
        url: this.baseurl + '/portfolio/delete',
        data: {
          id,
          image
        },
        success(data) {
          $('#update-comment-validation').addClass('alert-success');
          $('#update-comment-validation').removeClass('alert-danger').fadeIn(100);
          $('#update-comment-validation').text('Deleted successfully');
          $('#update-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#update-comment-validation').fadeOut(1000);
          }, 2000);


          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        error() {

          $('#update-comment-validation').removeClass('alert-success');
          $('#update-comment-validation').addClass('alert-danger').fadeIn(100);
          $('#update-comment-validation').text('Failed to delete');
          $('#update-comment-validation').fadeIn(100);
          setTimeout(function () {
            $('#update-comment-validation').fadeOut(1000);
          }, 2000);

        }
      });

    }
  }


  populateForm(element) {
    $('#createportfoliorow').fadeOut(500);
    $('#portfolio-update-form').fadeIn(500);
    $('#display-portfolio-image').fadeIn(500);
    $('#update-portfolio-type').focus();
    $('#update-portfolio-type').val(element.type);
    $('#display-portfolio-image').val(element.image);
    $('#update-portfolio-image-name').val(element.image);
    $('#update-portfolio-id').val(element.id);
    this.imageUrl = this.baseurl + '/UPLOADS/images/portfolio/' + element.image;
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
        url: this.baseurl + '/portfolio/upload/image',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success(data) {
          console.log(data)
          $('#update-portfolio-image-name').val(data);
        },
        error() {

        }
      });
    }
  }

  portfolioFormUpdate() {

    const idValue = $('#update-portfolio-id').val();
    const typeValue = $('#update-portfolio-type').val();
    const imageValue = $('#update-portfolio-image-name').val();

    if (typeValue == 'Select Type') {
      alert('Please select a package');

    } else if (imageValue == '') {
      alert('Please select an image***');
    } else {
      const data = {
        id: idValue,
        type: typeValue,
        image: imageValue
      };

      $.ajax({
        type: 'put',
        url: this.baseurl + '/portfolio/update/portfolio',
        data,
        success(res) {
          if (res) {
            $('#update-portfolio-type').focus();
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
    $('#portfolio-update-form').fadeOut(500);
    $('#createportfoliorow').fadeIn(500);

  }

}
