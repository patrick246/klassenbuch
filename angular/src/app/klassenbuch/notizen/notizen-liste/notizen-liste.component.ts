import {Component, OnInit} from "@angular/core";
import {NotizenService} from "../notizen.service";
import {SchuelerService} from "../../../schueler.service";
import {LehrerService} from "../../../lehrer/lehrer.service";

@Component({
	selector: 'app-notizen-liste',
	templateUrl: './notizen-liste.component.html',
	styleUrls: ['./notizen-liste.component.css']
})
export class NotizenListeComponent implements OnInit {
	notizen: any;
	error: string;

	constructor(private notizenService: NotizenService, private schuelerService: SchuelerService, private lehrerService: LehrerService) {
	}

	ngOnInit() {
		this.loadNotizen();
	}

	loadNotizen() {
		this.notizenService.getNotizen().subscribe((notizen) => {
			Promise.all(
				notizen.map(async (notiz) => {
					let results = await Promise.all([
						this.schuelerService.getSingleSchueler(notiz.schueler).toPromise(),
						this.lehrerService.getOneLehrer(notiz.lehrer).toPromise()
					]);
					return {
						id: notiz.id,
						lehrer: results[1],
						schueler: results[0],
						date: notiz.date,
						text: notiz.text
					};
				})
			).then(result => {
				this.notizen = result;
			});
		});
	}

	public deleteNotiz(notiz: any): void {
		if (confirm(`Möchten Sie die Notiz für den Schüler ${notiz.schueler.vorname} wirklich löschen?`)) {
			let origNotiz = {
				...notiz,
				schueler: notiz.schueler.id,
				lehrer: notiz.lehrer.id
			};
			this.notizenService.deleteNotiz(origNotiz).subscribe(
				() => this.loadNotizen(),
				error => this.error = error.message
			)
		}
	}

}
