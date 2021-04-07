import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokShareInfoService {

  public stringVar = new Subject<String>();

  //create an observebale to watch the subject 
  getObservable(): Subject<String>{
    return this.stringVar;
  }

  // -- how to update the subject -- 
  // create a method that allows you tu update the .

  public setValue(newStringVar: String){
    this.stringVar.next(newStringVar);
  }

}
