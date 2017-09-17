import {Injectable} from "@angular/core";
import {Klasse} from "./klasse";
import {Observable} from "rxjs/Observable";
import {UUIDService} from "../../uuid.service";

@Injectable()
export class KlassenService {
	private klassenDb: Klasse[];

	constructor(private uuidService: UUIDService) {
		this.klassenDb = [
			{
				id: uuidService.uuidv4(),
				stufe: 5,
				name: "a"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 5,
				name: "b"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 5,
				name: "c"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 5,
				name: "d"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 6,
				name: "a"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 6,
				name: "b"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 6,
				name: "c"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 6,
				name: "d"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 7,
				name: "a"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 7,
				name: "b"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 7,
				name: "c"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 7,
				name: "d"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 8,
				name: "a"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 8,
				name: "b"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 8,
				name: "c"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 8,
				name: "d"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 9,
				name: "a"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 9,
				name: "b"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 9,
				name: "c"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 9,
				name: "d"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 10,
				name: "a"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 10,
				name: "b"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 10,
				name: "c"
			},
			{
				id: uuidService.uuidv4(),
				stufe: 10,
				name: "d"
			}
		];

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
		klasse.id = this.uuidService.uuidv4();
		this.klassenDb.push(klasse);
		this.save();
		return Observable.of(klasse);
	}

	public deleteKlasse(klasse: Klasse): Observable<Klasse> {
		let index = this.klassenDb.findIndex(k => k.id === klasse.id);
		if (index > -1) {
			let klasse = this.klassenDb[index];
			this.klassenDb.splice(index, 1);
			this.save();
			return Observable.of(klasse);
		}
		return Observable.throw(new Error('Klasse not found'));
	}

	public updateKlasse(klasse: Klasse): Observable<Klasse> {
		let oldklasse = this.klassenDb.find(k => k.id === klasse.id);
		if (!oldklasse) {
			return Observable.throw(new Error('Klasse nicht gefunden'));
		}
		oldklasse.name = klasse.name;
		oldklasse.stufe = klasse.stufe;
		this.save();
		return Observable.of(oldklasse);
	}

	public getKlasse(id: string): Observable<Klasse> {
		let klasse = this.klassenDb.find(k => k.id === id);
		if (!klasse) {
			return Observable.throw(new Error('Klasse not found'));
		}
		return Observable.of(klasse);
	}

	private save() {
		localStorage.setItem('klassenbuch_klassen', JSON.stringify(this.klassenDb));
	}
}
