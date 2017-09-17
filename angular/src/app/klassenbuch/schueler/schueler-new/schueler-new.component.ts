import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Schueler} from "../schueler";
import {Klasse} from "../../klassen/klasse";
import {KlassenService} from "../../klassen/klassen.service";
import {SchuelerService} from "../schueler.service";

@Component({
  selector: 'app-schueler-new',
  templateUrl: './schueler-new.component.html',
  styleUrls: ['./schueler-new.component.css']
})
export class SchuelerNewComponent implements OnInit {
	private schueler: Schueler = {
		id: null,
		vorname: null,
		nachname: null,
		klasse: null
	};
	klassenListe: Klasse[];
	private error: string = null;

	constructor(private klassenService: KlassenService, private schuelerService: SchuelerService, private router: Router) {
	}

	ngOnInit() {
		this.klassenService.getKlassen().subscribe(klasse => {
			this.klassenListe = klasse;
		})
	}

	public save(): void {
		this.schuelerService.addSchueler(this.schueler).subscribe(() => {
			this.router.navigate(['/schueler']);
		}, error => {
			this.error = error.message;
		});
	}
}
