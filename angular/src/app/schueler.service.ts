import {Injectable} from "@angular/core";
import {Schueler} from "./schueler";
import {Observable} from "rxjs/Observable";
import {UUIDService} from "./uuid.service";

@Injectable()
export class SchuelerService {
	private schuelerDb: Schueler[];

	constructor(private uuidService: UUIDService) {
		this.schuelerDb = [
			{
				id: uuidService.uuidv4(),
				vorname: "Muster",
				nachname: "Maxmann",
				klasse: "dd2c95ea-7867-44a5-8748-7f3527a22ec7"
			},
			{
				id: uuidService.uuidv4(),
				vorname: "Max",
				nachname: "Mustermann",
				klasse: "dd2c95ea-7867-44a5-8748-7f3527a22ec7"
			}
		];

		let schueler = localStorage.getItem('klassenbuch_schueler');
		if (schueler !== null) {
			this.schuelerDb = JSON.parse(schueler);
		} else {
			localStorage.setItem('klassenbuch_schueler', JSON.stringify(this.schuelerDb));
		}

	}

	public getSchueler(): Observable<Schueler[]> {
		return Observable.of(this.schuelerDb);
	}

	public getSingleSchueler(id: string): Observable<Schueler> {
		let schueler = this.schuelerDb.find(s => s.id === id);
		if (schueler) {
			return Observable.of(schueler);
		}
		return Observable.throw(new Error('Schueler nicht gefunden'));
	}

	public addSchueler(schueler: Schueler): Observable<Schueler> {
		if (this.schuelerDb.find(s => s.id === schueler.id)) {
			return Observable.throw(new Error('Dieser Schueler existiert bereits'));
		}
		this.schuelerDb.push(schueler);
		this.save();
		return Observable.of(schueler);
	}

	public deleteSchueler(schueler: Schueler): Observable<Schueler> {
		let index = this.schuelerDb.findIndex(s => s.id === schueler.id);
		if (index > -1) {
			let schueler = this.schuelerDb[index];
			this.schuelerDb.splice(index, 1);
			this.save();
			return Observable.of(schueler);
		}
		return Observable.throw(new Error('Schueler not found'));
	}

	public updateSchueler(schueler: Schueler): Observable<Schueler> {
		let index = this.schuelerDb.findIndex(s => s.id === schueler.id);
		if (index === -1) {
			return Observable.throw("Schueler nicht gefunden");
		}
		this.schuelerDb[index] = schueler;
		this.save();
		return Observable.of(schueler);
	}

	private save() {
		localStorage.setItem('klassenbuch_schueler', JSON.stringify(this.schuelerDb));
	}
}
