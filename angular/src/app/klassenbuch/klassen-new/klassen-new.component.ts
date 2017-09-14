import {Component, OnInit} from "@angular/core";
import {Klasse} from "../../klasse";
import {KlassenService} from "../../klassen.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-klassen-new',
	templateUrl: './klassen-new.component.html',
	styleUrls: ['./klassen-new.component.css']
})
export class KlassenNewComponent implements OnInit {
	private klasse: Klasse = {
		stufe: null,
		name: ""
	};
	private error: string = null;

	constructor(private klassenService: KlassenService, private router: Router) {
	}

	ngOnInit() {
	}

	public save(): void {
		this.klassenService.addKlasse(this.klasse).subscribe(() => {
			this.router.navigate(['/class']);
		}, error => {
			this.error = error.message;
		});
	}
}
