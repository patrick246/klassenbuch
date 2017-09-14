import {Component, OnInit} from "@angular/core";
import {KlassenService} from "../../klassen.service";
import {Klasse} from "../../klasse";

@Component({
	selector: 'app-klassen-liste',
	templateUrl: './klassen-liste.component.html',
	styleUrls: ['./klassen-liste.component.css']
})
export class KlassenListeComponent implements OnInit {
	private klassen: Klasse[];

	constructor(private klassenService: KlassenService) {
	}

	ngOnInit() {
		this.klassenService.getKlassen().subscribe(klassen => {
			this.klassen = klassen.sort((klasse1: Klasse, klasse2: Klasse): number => {
				if (klasse1.stufe === klasse2.stufe) {
					return klasse1.name.localeCompare(klasse2.name);
				}
				return klasse1.stufe - klasse2.stufe;
			});
		})
	}

}
