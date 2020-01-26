import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  errorMessage(text) {
    return Swal.fire({
      title: 'Oops...',
      icon: 'error',
      text: text,
    });
  }
}
