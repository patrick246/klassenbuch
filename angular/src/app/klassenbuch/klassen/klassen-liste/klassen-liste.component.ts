import {Component, OnInit} from "@angular/core";
import {Klasse} from "../klasse";
import {KlassenService} from "../klassen.service";


@Component({
	selector: 'app-klassen-liste',
	templateUrl: './klassen-liste.component.html',
	styleUrls: ['./klassen-liste.component.css']
})
export class KlassenListeComponent implements OnInit {
	klassen: Klasse[];

	constructor(private klassenService: KlassenService) {
	}

	ngOnInit() {
		this.loadKlassen();
	}

	private loadKlassen(): void {
		this.klassenService.getKlassen().subscribe(klassen => {
			this.klassen = klassen.sort((klasse1: Klasse, klasse2: Klasse): number => {
				if (klasse1.stufe === klasse2.stufe) {
					return klasse1.name.localeCompare(klasse2.name);
				}
				return klasse1.stufe - klasse2.stufe;
			});
		});
	}

	public deleteKlasse(klasse: Klasse): void {
		if (confirm(`Möchten Sie die Klasse ${klasse.stufe}${klasse.name} wirklich löschen?`) === false) return;
		this.klassenService.deleteKlasse(klasse).subscribe(
			() => {
				this.loadKlassen();
			}
		)
	}

}
