import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  getList() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open(
      'GET',
      'https://d3d3-2409-4055-1-34f9-442-90-f1fd-74a7.ngrok.io/api/v1/list'
    );
    xhr.setRequestHeader(
      'Cookie',
      'csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7'
    );

    xhr.send();
  }
  
  downloadData(data: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=Ekkns2E4gRIgZ7yBCJadRbdlMyLimPXU02U1HVE8hRU61q996yILmZvDSQJJbUr7");
    myHeaders.append("mode", "no-cors");
    
    fetch("https://8924-2409-4055-69d-b5f-f4ae-8473-9a06-b555.ngrok.io/api/v1/create-project",  {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    })
    .then(response => response.blob())
    .then(()=>console.log("Hi"))
    .then(blob => FileSaver.saveAs(blob, "code.zip"))
      .catch(error => console.log('error', error));
  }
}