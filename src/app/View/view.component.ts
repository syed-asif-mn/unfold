import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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
      alert(
        `Downloading files for project: ${JSON.stringify(this.projectName)}?`
      );
    }
  }
}
