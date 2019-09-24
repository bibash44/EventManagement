import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings-create',
  templateUrl: './settings-create.component.html',
  styleUrls: ['./settings-create.component.css']
})
export class SettingsCreateComponent implements OnInit {
  playCode: boolean;
  playPassword: boolean;

  hideAndShow(value) {
    if (value == 0) {
      this.playPassword = true;
      this.playCode = false;
    } else if (value == 1) {
      this.playCode = true;
      this.playPassword = false;
    }
  }

  settingsSubmit() {
    // const typeValue = type.value;

    // if (titleValue === '') {
    //   $('#title').attr('placeholder', 'Please enter a Title *');
    //   $('#title').focus();
    //   $('#title').css({border: '2px solid red'});
    // } else {
    //   const data = {
    //     description: packageDescriptionValue
    //   };
    //
    //   $.ajax({
    //     type: 'PUT',
    //     url: this.baseurl + '/settings/updateSettings',
    //     data,
    //     success(res) {
    //       if (res) {
    //         $('#comment-validation').removeClass('alert-danger');
    //         $('#comment-validation').addClass('alert-success').fadeIn(100);
    //         $('#comment-validation').text('Services successfully uploaded');
    //         $('#comment-validation').fadeIn(100);
    //
    //         setTimeout(function () {
    //           $('#comment-validation').fadeOut(1000);
    //         }, 2000);
    //       }
    //     },
    //     error() {
    //       $('#comment-validation').removeClass('alert-success');
    //       $('#comment-validation').addClass('alert-danger').fadeIn(100);
    //       $('#comment-validation').text('Something went wrong');
    //       $('#comment-validation').fadeIn(100);
    //
    //       setTimeout(function () {
    //         $('#comment-validation').fadeOut(1000);
    //       }, 2000);
    //     }
    //   });
    // }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
