import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  serverFrameworks = ['C#', 'Python', 'Java', 'NodeJS', 'DJango'];
  clientFrameworks = ['Angular', 'React', 'JS'];
  languages = ['English', 'हिंदी', 'Français', 'Español', '中文', '日本語'];
  codes = ['en', 'hin', 'fr', 'es', 'zh', 'ja'];
}
