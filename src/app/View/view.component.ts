import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';
import { CommunicationService } from '../Communication/communication.service';
import { ManagerService } from '../Manager/manager.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  project: string = '';
  isSubmitted = false;

  constructor(
    public fb: FormBuilder,
    private translateService: TranslateService,
    public managerService: ManagerService,
    public communicationService: CommunicationService
  ) {
    this.translateService.use('en');
  }

  changeLanguage(index: number) {
    
    this.translateService.use(this.managerService.codes[index]);
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
          var blob = new Blob([data], {type: 'application/x-tar'});
        FileSaver.saveAs(blob, "report.tgz");
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
