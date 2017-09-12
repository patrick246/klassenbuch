import {Injectable} from "@angular/core";
import {Klasse} from "./klasse";
import {Observable} from "rxjs/Observable";

@Injectable()
export class KlassenService {
	private klassenDb: Klasse[] = [
		{
			stufe: 5,
			name: "a"
		},
		{
			stufe: 5,
			name: "b"
		},
		{
			stufe: 5,
			name: "c"
		},
		{
			stufe: 5,
			name: "d"
		},
		{
			stufe: 6,
			name: "a"
		},
		{
			stufe: 6,
			name: "b"
		},
		{
			stufe: 6,
			name: "c"
		},
		{
			stufe: 6,
			name: "d"
		},
		{
			stufe: 7,
			name: "a"
		},
		{
			stufe: 7,
			name: "b"
		},
		{
			stufe: 7,
			name: "c"
		},
		{
			stufe: 7,
			name: "d"
		},
		{
			stufe: 8,
			name: "a"
		},
		{
			stufe: 8,
			name: "b"
		},
		{
			stufe: 8,
			name: "c"
		},
		{
			stufe: 8,
			name: "d"
		},
		{
			stufe: 9,
			name: "a"
		},
		{
			stufe: 9,
			name: "b"
		},
		{
			stufe: 9,
			name: "c"
		},
		{
			stufe: 9,
			name: "d"
		},
		{
			stufe: 10,
			name: "a"
		},
		{
			stufe: 10,
			name: "b"
		},
		{
			stufe: 10,
			name: "c"
		},
		{
			stufe: 10,
			name: "d"
		}
	];

	constructor() {
		let klassen = localStorage.getItem('klassenbuch_klassen');
		if (klassen !== null) {
			this.klassenDb = JSON.parse(klassen);
		} else {
			localStorage.setItem('klassenbuch_klassen', JSON.stringify(this.klassenDb));
		}
	}

	public getKlassen(): Observable<Klasse[]> {
		return Observable.of(this.klassenDb);
	}

	public addKlasse(klasse: Klasse): Observable<Klasse> {
		if (this.klassenDb.find(k => k.name === klasse.name && k.stufe === klasse.stufe)) {
			return Observable.throw(new Error('Diese Klasse existiert bereits'));
		}
		this.klassenDb.push(klasse);
		this.save();
		return Observable.of(klasse);
	}

	public deleteKlasse(klasse: Klasse): Observable<Klasse> {
		let index = this.klassenDb.findIndex(k => k.name === klasse.name && k.stufe === klasse.stufe);
		if (index > -1) {
			let klasse = this.klassenDb[index];
			this.klassenDb.splice(index, 1);
			this.save();
			return Observable.of(klasse);
		}
		return Observable.throw(new Error('Klasse not found'));
	}

	public updateKlasse(old: Klasse, newElem: Klasse): Observable<Klasse> {
		let foundNew = this.klassenDb.findIndex(k => k.name === newElem.name && k.stufe === newElem.stufe);
		if (foundNew === -1) {
			let oldIndex = this.klassenDb.findIndex(k => k.name === old.name && k.stufe === old.stufe);
			if (oldIndex === -1) {
				return Observable.throw("Klasse nicht gefunden");
			}
			this.klassenDb[oldIndex] = newElem;
			this.save();
			return Observable.of(newElem);
		}
		return Observable.throw("Neue Klasse existiert bereits");
	}

	private save() {
		localStorage.setItem('klassenbuch_klassen', JSON.stringify(this.klassenDb));
	}
}
