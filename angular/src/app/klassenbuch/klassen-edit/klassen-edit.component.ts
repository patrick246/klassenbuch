import {Component, OnInit} from "@angular/core";
import {Klasse} from "../../klasse";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {KlassenService} from "../../klassen.service";

@Component({
	selector: 'app-klassen-edit',
	templateUrl: './klassen-edit.component.html',
	styleUrls: ['./klassen-edit.component.css']
})
export class KlassenEditComponent implements OnInit {
	private name: string;
	private stufe: number;
	private klasse: Klasse = null;
	private error: string = null;

	constructor(private activatedRoute: ActivatedRoute, private klassenService: KlassenService, private router: Router) {
	}

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
			let stufe = Number.parseInt(paramMap.get('stufe'));
			let name = paramMap.get('name');
			this.klassenService.getKlasse(stufe, name).subscribe(klasse => {
				this.klasse = klasse;
				this.name = klasse.name;
				this.stufe = klasse.stufe;
			}, error => {
				this.error = error.message;
			});
		})
	}

	public save() {
		console.log('save');
		this.klassenService.updateKlasse({stufe: this.stufe, name: this.name}, this.klasse).subscribe(
			() => {
				this.router.navigate(['/class']);
			},
			error => {
				this.error = error.message;
			}
		)
	}
}
