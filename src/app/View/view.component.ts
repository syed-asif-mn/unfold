import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ManagerComponent } from '../Manager/manager.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  project: string = '';

  serverFrameworks = ['C#', 'Python', 'Java', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'JS'];
  languages = ['English', 'हिंदी', 'Français', 'Español', '中文', '日本語'];

  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private managerComponent: ManagerComponent
  ) {
    this.translateService.use('en');
  }

  changeLanguage(index: number) {
    let codes = ['en', 'hin', 'fr', 'es', 'zh', 'ja'];
    this.translateService.use(codes[index]);
  }

  registrationForm = this.fb.group({
    serverName: ['', [Validators.required]],
    clientName: ['', [Validators.required]],
    projectName: ['', [Validators.required]],
  });

  changeServer(e: any) {
    this.serverName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeClient(e: any) {
    this.clientName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // Access formcontrols getter
  get serverName() {
    return this.registrationForm.get('serverName');
  }

  get clientName() {
    return this.registrationForm.get('clientName');
  }

  get projectName() {
    return this.registrationForm.get('projectName');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      alert(JSON.stringify(this.registrationForm.value, null, 1));
      var data = JSON.stringify({
        "serverFramework": 1,
        "clientFramework": 2,
        "projectName": "airbus_test1"
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
        console.log(this.responseText);
        }
        });

        xhr.open("POST", "https://d3d3-2409-4055-1-34f9-442-90-f1fd-74a7.ngrok.io/api/v1/create-project");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Cookie", "csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7");

        xhr.send(data);

    //   var xhr = new XMLHttpRequest();
    //   xhr.withCredentials = true;

    //   xhr.addEventListener('readystatechange', function () {
    //     if (this.readyState === 4) {
    //       console.log(this.responseText);
    //     }
    //   });

    //   xhr.open(
    //     'GET',
    //     'https://d3d3-2409-4055-1-34f9-442-90-f1fd-74a7.ngrok.io/api/v1/list'
    //   );
    //   xhr.setRequestHeader(
    //     'Cookie',
    //     'csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7'
    //   );

    //   xhr.send();
  }
}
}
