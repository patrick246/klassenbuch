import {Injectable} from "@angular/core";
import {Notiz, notizReviver} from "./Notiz";
import {Observable} from "rxjs";
import {Schueler} from "../../schueler";
import {Lehrer} from "../../lehrer/lehrer";
import {UUIDService} from "../../uuid.service";

@Injectable()
export class NotizenService {

	private notizenDb: Notiz[];

	constructor(private uuidService: UUIDService) {
		this.notizenDb = [
			{
				id: uuidService.uuidv4(),
				lehrer: '0ccd8313-7996-45f9-9572-5c0998a4171f',
				schueler: '28cd6699-a56d-4017-b50e-cd823e63b5f6',
				date: new Date(),
				text: "Lorem Ipsum dolor sit amet..."
			}, {
				id: uuidService.uuidv4(),
				lehrer: '0ccd8313-7996-45f9-9572-5c0998a4171f',
				schueler: '28cd6699-a56d-4017-b50e-cd823e63b5f6',
				date: new Date(),
				text: "Lorem Ipsum dolor sit amet..."
			}
		];
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
		return Observable.of(notiz);
	}

	public updateNotiz(notiz: Notiz): Observable<Notiz> {
		let index = this.notizenDb.findIndex(n => n.id === notiz.id);
		if (index > -1) {
			this.notizenDb[index] = notiz;
			return Observable.of(notiz);
		}
		return Observable.throw(new Error('Notiz nicht gefunden'))
	}

	public deleteNotiz(notiz: Notiz): Observable<Notiz> {
		let index = this.notizenDb.findIndex(n => n.id === notiz.id);
		if (index > -1) {
			this.notizenDb.splice(index, 1);
			return Observable.of(notiz);
		}
		return Observable.throw(new Error('Notiz nicht gefunden'));
	}

}