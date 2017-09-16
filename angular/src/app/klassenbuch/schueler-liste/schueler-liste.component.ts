import { Component, OnInit } from '@angular/core';
import { SchuelerService } from "../../schueler.service";
import { Schueler } from "../../schueler";

@Component({
  selector: 'app-schueler-liste',
  templateUrl: './schueler-liste.component.html',
  styleUrls: ['./schueler-liste.component.css']
})
export class SchuelerListeComponent implements OnInit {
	schueler: Schueler[];

	constructor(private schuelerService: SchuelerService) {
	}

	ngOnInit() {
		this.loadSchueler();
	}

	private loadSchueler(): void {
		this.schuelerService.getSchueler().subscribe(schueler => {
			this.schueler = schueler.sort((schueler1: Schueler, schueler2: Schueler): number => {
				if (schueler1.nachname === schueler2.nachname) {
					return schueler1.vorname.localeCompare(schueler2.vorname);
				}
				return schueler1.nachname.localeCompare(schueler2.nachname);
			});
		});
	}

	public deleteSchueler(schueler: Schueler): void {
		if (confirm(`Möchten Sie die Klasse ${schueler.vorname}${schueler.nachname} wirklich löschen?`) === false) return;
		this.schuelerService.deleteSchueler(schueler).subscribe(
			() => {
				this.loadSchueler();
			}
		)
	}

}
