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

	constructor(private notizenService: NotizenService, private schuelerService: SchuelerService, private lehrerService: LehrerService) {
	}

	ngOnInit() {
		this.notizenService.getNotizen().subscribe((notizen) => {
			Promise.all(
				notizen.map(async (notiz) => {
					let results = await Promise.all([
						this.schuelerService.getSingleSchueler(notiz.schueler).toPromise(),
						this.lehrerService.getOneLehrer(notiz.lehrer).toPromise()
					]);
					console.log(results);
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

}
