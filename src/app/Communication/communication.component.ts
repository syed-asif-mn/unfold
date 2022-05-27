import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class CommunicationComponent {
  onSubmit(uname: string, pwd: string) {
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
      
      xhr.open("POST", "http://127.0.0.1:8001/api/v1/create-project");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Cookie", "csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7");
      
      xhr.send(data);
  }
}