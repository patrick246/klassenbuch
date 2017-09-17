import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Lehrer} from "./lehrer";
import {UUIDService} from "../uuid.service";

@Injectable()
export class LehrerService {

	lehrerDb: Lehrer[];

	constructor(private uuidService: UUIDService) {
		this.lehrerDb = [
			{
				id: uuidService.uuidv4(),
				firstName: 'Test',
				lastName: 'Lehrer',
				mail: 'test.lehrer@schule.example.com',
				role: '',
				loginName: 'test.lehrer',
				password: 'test'
			}
		];

		let lehrer = localStorage.getItem('klassenbuch_lehrer');
		if (lehrer) {
			this.lehrerDb = JSON.parse(lehrer);
		} else {
			localStorage.setItem('klassenbuch_lehrer', JSON.stringify(this.lehrerDb));
		}
	}

	public getLehrer(): Observable<Lehrer[]> {
		return Observable.of(this.lehrerDb);
	}

	public getOneLehrer(id: string): Observable<Lehrer> {
		let lehrer = this.lehrerDb.find(k => k.id === id);
		if (lehrer) {
			return Observable.of(lehrer);
		}
		return Observable.throw(new Error('Lehrer nicht gefunden'));
	}

	public getLehrerByLogin(loginName: string): Observable<Lehrer> {
		let lehrer = this.lehrerDb.find(l => l.loginName === loginName);
		if (lehrer) {
			return Observable.of(lehrer);
		}
		return Observable.throw(new Error('Lehrer nicht gefunden'));
	}

	public addLehrer(lehrer: Lehrer): Observable<Lehrer[]> {
		lehrer.id = this.uuidService.uuidv4();
		this.lehrerDb.push(lehrer);
		this.save();
		return Observable.of(this.lehrerDb);
	}

	public updateLehrer(lehrer: Lehrer): Observable<Lehrer[]> {
		let oldLehrer = this.lehrerDb.find(l => l.id === lehrer.id);
		oldLehrer.firstName = lehrer.firstName;
		oldLehrer.lastName = lehrer.lastName;
		oldLehrer.mail = lehrer.mail;
		oldLehrer.role = lehrer.role;
		this.save();
		return Observable.of(this.lehrerDb);
	}

	public removeLehrer(lehrer: Lehrer): Observable<Lehrer[]> {
		let index = this.lehrerDb.findIndex(k => k.id === lehrer.id);
		if (index > -1) {
			this.lehrerDb.splice(index, 1);
			this.save();
			return Observable.of(this.lehrerDb);
		}
		return Observable.throw(new Error('Lehrer nicht gefunden'));
	}

	private save() {
		localStorage.setItem('klassenbuch_lehrer', JSON.stringify(this.lehrerDb));
	}
}
