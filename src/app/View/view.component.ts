import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {

  project: string = '';
  
  serverFrameworks = ['C#', 'Python', 'Java', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'JS'];
  languages = ['English', 'हिंदी', 'Français', 'Español', '中文', '日本語']
  
  isSubmitted = false;

  constructor(public fb: FormBuilder, private translateService: TranslateService) {
    this.translateService.use('en');
    }
    
    changeLanguage(index: number) {
    let codes = ['en', 'hin', 'fr', 'es', 'zh', 'ja']
    this.translateService.use(codes[index]);
    }

  registrationForm = this.fb.group({
    serverName: ['', [Validators.required]],
    clientName: ['', [Validators.required]],
    projectName:  ['', [Validators.required]]
  });

  changeServer(e: any) {
    this.serverName?.setValue(e.target.value, {
      onlySelf: true
    });
  }

  changeClient(e: any) {
    this.clientName?.setValue(e.target.value, {
      onlySelf: true
    });
  }

  // Access formcontrols getter
  get serverName() {
    return this.registrationForm.get('serverName');
  }

  get clientName() {
    return this.registrationForm.get('clientName');
  }

  get projectName(){
    return this.registrationForm.get('projectName');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      alert(JSON.stringify(this.registrationForm.value, null,1));
    }
  }
}