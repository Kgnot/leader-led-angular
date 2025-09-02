import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgWsp {

  private message: string = '';
  private baseUrl = new URL("https://api.whatsapp.com/send");
  private cellphone = '3132056541';


  private communicate(message: string) {
    return {
      baseUrl: this.baseUrl,
      cellphone: this.cellphone,
      message: message
    }
  }

  sendMessage(message: string) {
    const comm = this.communicate(message);
    const url = new URL(comm.baseUrl);
    url.searchParams.set("phone", comm.cellphone);
    if (comm.message) {
      url.searchParams.set("text", comm.message);
    }
    window.open(url.toString(), '_blank');
  }

}
