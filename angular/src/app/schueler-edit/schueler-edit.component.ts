import { Component, OnInit } from '@angular/core';
import {KlassenService} from "../klassen.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {SchuelerService} from "../schueler.service";
import {Klasse} from "../klasse";

@Component({
  selector: 'app-schueler-edit',
  templateUrl: './schueler-edit.component.html',
  styleUrls: ['./schueler-edit.component.css']
})
export class SchuelerEditComponent implements OnInit {
	private schueler;
	private error: string = null;
	klassenListe: Klasse[];

	constructor(private klassenService: KlassenService, private activatedRoute: ActivatedRoute, private schuelerService: SchuelerService, private router: Router) {
	}

	ngOnInit() {

		this.klassenService.getKlassen().subscribe(klasse => {
			this.klassenListe = klasse;
		})

		this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
			let id = paramMap.get('id');
			this.schuelerService.getSingleSchueler(id).subscribe(schueler => {
				this.schueler = {...schueler};
			}, error => {
				this.error = error.message;
			});
		})
	}

	public save() {
		this.schuelerService.updateSchueler(this.schueler).subscribe(
			() => {
				this.router.navigate(['/schueler']);
			},
			error => {
				this.error = error.message;
			}
		)
	}
}
