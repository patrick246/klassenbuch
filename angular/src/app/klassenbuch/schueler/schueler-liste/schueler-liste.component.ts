import {Component, OnInit} from "@angular/core";
import {SchuelerService} from "../schueler.service";
import {KlassenService} from "../../klassen/klassen.service";
import {Schueler} from "../schueler";


@Component({
	selector: 'app-schueler-liste',
	templateUrl: './schueler-liste.component.html',
	styleUrls: ['./schueler-liste.component.css']
})
export class SchuelerListeComponent implements OnInit {
	schueler: any;

	constructor(private schuelerService: SchuelerService, private klassenService: KlassenService) {
	}

	ngOnInit() {
		this.loadSchueler();
	}

	private loadSchueler(): void {

		this.schuelerService.getSchueler().subscribe((schueler) => {

			Promise.all(
				schueler.map(async (_schueler) => {
					if(_schueler.klasse == "" || _schueler.klasse == null){
						return {
							..._schueler,
							klasse: null
						};
					}
					let klasse = await this.klassenService.getKlasse(_schueler.klasse).toPromise();
					return {
						..._schueler,
						klasse
					};
				})
			).then(result => {
				this.schueler = result;
			});
		});

	}


	public
	deleteSchueler(schueler: Schueler): void {
		if (confirm(`Möchten Sie den Schüler ${schueler.vorname} ${schueler.nachname} wirklich löschen?`) === false
		)
			return;
		this.schuelerService.deleteSchueler(schueler).subscribe(
			() => {
				this.loadSchueler();
			}
		)
	}

}
