import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrmProductsService {

  constructor() { }

  getProductsClintNumber(id){
    // agarro al usuario por el id
    // lo comparo con la table usuarios productoscrm
    // y devuelvo el numero
    return id;
  }
}
