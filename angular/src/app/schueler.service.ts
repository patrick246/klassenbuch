import { Injectable } from '@angular/core';
import {Schueler} from "./schueler";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SchuelerService {
	private SchuelerDb: Schueler[] = [
		{
			name: "Muster",
			nachname: "Maxmann",
			klasse: ""
		},
		{
			name: "Max",
			nachname: "Mustermann",
			klasse: ""
		}
	];

  constructor() {


	let schueler = localStorage.getItem('klassenbuch_schueler');
	if (schueler !== null) {
		this.SchuelerDb = JSON.parse(schueler);
	} else {
		localStorage.setItem('klassenbuch_schueler', JSON.stringify(this.SchuelerDb));
	}

	}

public getSchueler(): Observable<Schueler[]> {
	return Observable.of(this.SchuelerDb);
}

public addSchueler(schueler: Schueler): Observable<Schueler> {
	if (this.SchuelerDb.find(s => s.name === schueler.name && s.nachname === schueler.nachname && s.klasse === schueler.klasse)) {
	return Observable.throw(new Error('Dieser Schueler existiert bereits'));
}
this.SchuelerDb.push(schueler);
this.save();
return Observable.of(schueler);
}

public deleteSchueler(schueler: Schueler): Observable<Schueler> {
	let index = this.SchuelerDb.findIndex(s => s.name === schueler.name && s.nachname === schueler.nachname && s.klasse === schueler.klasse);
if (index > -1) {
	let schueler = this.SchuelerDb[index];
	this.SchuelerDb.splice(index, 1);
	this.save();
	return Observable.of(schueler);
}
return Observable.throw(new Error('Schueler not found'));
}

public updateSchueler(old: Schueler, newElem: Schueler): Observable<Schueler> {
	let foundNew = this.SchuelerDb.findIndex(s => s.name === newElem.name && s.nachname === newElem.nachname && s.klasse === newElem.klasse);
if (foundNew === -1) {
	let oldIndex = this.SchuelerDb.findIndex(s => s.name === old.name && s.nachname === old.nachname);
	if (oldIndex === -1) {
		return Observable.throw("Schueler nicht gefunden");
	}
	this.SchuelerDb[oldIndex] = newElem;
	this.save();
	return Observable.of(newElem);
}
return Observable.throw("Neuer Schueler existiert bereits");
}

private save() {
	localStorage.setItem('klassenbuch_schueler', JSON.stringify(this.SchuelerDb));
}
}
