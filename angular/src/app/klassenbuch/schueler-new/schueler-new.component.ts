import { Component, OnInit } from '@angular/core';
import {Schueler} from "../../schueler";
import {SchuelerService} from "../../schueler.service";
import {Router} from "@angular/router";
import {KlassenService} from "../../klassen.service";
import {Klasse} from "../../klasse";

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
