import {Component, OnInit} from '@angular/core';
import {SchuelerService} from "../../schueler.service";
import {Schueler} from "../../schueler";
import {KlassenService} from "../../klassen.service";

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
							vorname: _schueler.vorname,
							nachname: _schueler.nachname,
							klasse: null
						};
					}
					let _klasse = await this.klassenService.getKlasse(_schueler.klasse).toPromise();
					return {
						id: _schueler.id,
						vorname: _schueler.vorname,
						nachname: _schueler.nachname,
						klasse: _klasse
					};
				})
			).then(result => {
				this.schueler = result;
			});
		});

	}


	public
	deleteSchueler(schueler: Schueler): void {
		if (confirm(`Möchten Sie die Klasse ${schueler.vorname} ${schueler.nachname} wirklich löschen?`) === false
		)
			return;
		this.schuelerService.deleteSchueler(schueler).subscribe(
			() => {
				this.loadSchueler();
			}
		)
	}

}
