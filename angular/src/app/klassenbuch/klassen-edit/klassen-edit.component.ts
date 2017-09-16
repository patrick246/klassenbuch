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
	private klasse: Klasse = null;
	private error: string = null;

	constructor(private activatedRoute: ActivatedRoute, private klassenService: KlassenService, private router: Router) {
	}

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
			let id = paramMap.get('id');
			this.klassenService.getKlasse(id).subscribe(klasse => {
				this.klasse = {...klasse};
			}, error => {
				this.error = error.message;
			});
		})
	}

	public save() {
		this.klassenService.updateKlasse(this.klasse).subscribe(
			() => {
				this.router.navigate(['/class']);
			},
			error => {
				this.error = error.message;
			}
		)
	}
}
