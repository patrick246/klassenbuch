
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {lehrer} from "./lehrer";
@Injectable()
export class LehrerService{

  lehrerDb: lehrer[] = [];

  public getLehrer(): Observable<lehrer[]>{
    this.lehrerDb =JSON.parse(localStorage.getItem('lehrer'));
    return Observable.of(this.lehrerDb);
  }

  public setLehrer(Lehrer:lehrer): Observable<lehrer[]>{
    this.lehrerDb.push(Lehrer);
    localStorage.setItem('lehrer', JSON.stringify(this.lehrerDb));
    return Observable.of(this.lehrerDb);
  }

  public removeLehrer(Lehrer: lehrer): Observable<lehrer[]>{
    localStorage.removeItem(Lehrer.id);
    return Observable.of(this.lehrerDb);
  }
}
