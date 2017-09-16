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

  public getOneLehrer(mail: string): Observable<Lehrer> {
	  let index = this.lehrerDb.findIndex(k => k.mail === mail);
	  if (index > -1) {
		  let lehrer: Lehrer = this.lehrerDb[index];
		  return Observable.of(lehrer);
	  }}

  public addLehrer(Lehrer: Lehrer): Observable<Lehrer[]> {
    this.lehrerDb.push(Lehrer);
    localStorage.setItem('lehrer', JSON.stringify(this.lehrerDb));
    return Observable.of(this.lehrerDb);
  }

	public updateLehrer(oldLehrer: Lehrer, newLehrer: Lehrer): Observable<Lehrer[]> {
		this.removeLehrer(oldLehrer);
		this.addLehrer(newLehrer);
		return Observable.of(this.lehrerDb);
	}

  public removeLehrer(Lehrer: Lehrer): Observable<Lehrer[]> {
    let index = this.lehrerDb.findIndex(k => k.mail === Lehrer.mail);
    if (index > -1) {
      let Lehrer = this.lehrerDb[index];
      this.lehrerDb.splice(index, 1);
      this.addLehrer;
      return Observable.of(this.lehrerDb);
    }
  }
}
