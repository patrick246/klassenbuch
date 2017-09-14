import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Lehrer} from "./lehrer";
@Injectable()
export class LehrerService {

  lehrerDb: Lehrer[] = [];

  public getLehrer(): Observable<Lehrer[]> {
    this.lehrerDb = JSON.parse(localStorage.getItem('lehrer'));
    return Observable.of(this.lehrerDb);
  }

  public setLehrer(Lehrer: Lehrer): Observable<Lehrer[]> {
    this.lehrerDb.push(Lehrer);
    localStorage.setItem('lehrer', JSON.stringify(this.lehrerDb));
    return Observable.of(this.lehrerDb);
  }

  public removeLehrer(Lehrer: Lehrer): Observable<Lehrer[]> {
    let index = this.lehrerDb.findIndex(k => k.mail === Lehrer.mail);
    if (index > -1) {
      let Lehrer = this.lehrerDb[index];
      this.lehrerDb.splice(index, 1);
      this.setLehrer;
      return Observable.of(this.lehrerDb);
    }
  }
}
