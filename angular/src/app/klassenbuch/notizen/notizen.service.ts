import {Injectable} from "@angular/core";
import {Notiz, notizReviver} from "./Notiz";
import {Observable} from "rxjs";
import {Schueler} from "../schueler/schueler";
import {Lehrer} from "../lehrer/lehrer";
import {UUIDService} from "../../uuid.service";

@Injectable()
export class NotizenService {

	private notizenDb: Notiz[];

	constructor(private uuidService: UUIDService) {
		this.notizenDb = [];
		let notizen = localStorage.getItem('klassenbuch_notizen');
		if (notizen) {
			this.notizenDb = JSON.parse(notizen, notizReviver);
		} else {
			localStorage.setItem('klassenbuch_notizen', JSON.stringify(this.notizenDb));
		}
	}

	public getNotizen(): Observable<Notiz[]> {
		return Observable.of(this.notizenDb);
	}

	public getNotiz(id: string): Observable<Notiz> {
		let notiz = this.notizenDb.find(n => n.id === id);
		if (!notiz) {
			return Observable.throw(new Error('Notiz nicht gefunden'));
		}
		return Observable.of(notiz);
	}

	public addNotiz(lehrer: Lehrer, schueler: Schueler, text: string): Observable<Notiz> {
		let notiz = {
			id: this.uuidService.uuidv4(),
			date: new Date(),
			lehrer: lehrer.id,
			schueler: schueler.id,
			text
		};
		this.notizenDb.push(notiz);
		this.save();
		return Observable.of(notiz);
	}

	public updateNotiz(notiz: Notiz): Observable<Notiz> {
		let index = this.notizenDb.findIndex(n => n.id === notiz.id);
		if (index > -1) {
			this.notizenDb[index] = notiz;
			this.save();
			return Observable.of(notiz);
		}
		return Observable.throw(new Error('Notiz nicht gefunden'))
	}

	public deleteNotiz(notiz: Notiz): Observable<Notiz> {
		let index = this.notizenDb.findIndex(n => n.id === notiz.id);
		if (index > -1) {
			this.notizenDb.splice(index, 1);
			this.save();
			return Observable.of(notiz);
		}
		return Observable.throw(new Error('Notiz nicht gefunden'));
	}

	private save(): void {
		localStorage.setItem('klassenbuch_notizen', JSON.stringify(this.notizenDb));
	}
}
