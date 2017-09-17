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
		console.log('start');
		this.schuelerService.getSchueler().subscribe((schueler) => {
			console.log(schueler);
			console.log('test');
			Promise.all(
				schueler.map(async (_schueler) => {
					console.log(_schueler);
					console.log('log');
					console.log(this.schueler);
					let _klasse = await this.klassenService.getKlasse(_schueler.klasse).toPromise();

					console.log(_schueler.klasse, _schueler.vorname);
					return {
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
		if (confirm(`Möchten Sie die Klasse ${schueler.vorname}${schueler.nachname} wirklich löschen?`) === false
		)
			return;
		this.schuelerService.deleteSchueler(schueler).subscribe(
			() => {
				this.loadSchueler();
			}
		)
	}

}
