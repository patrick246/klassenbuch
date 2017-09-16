import {Component, OnInit} from "@angular/core";
import {Schueler} from "../../../schueler";
import {Lehrer} from "../../../lehrer/lehrer";
import {SchuelerService} from "../../../schueler.service";
import {LehrerService} from "../../../lehrer/lehrer.service";
import {NotizenService} from "../notizen.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-notizen-new',
	templateUrl: './notizen-new.component.html',
	styleUrls: ['./notizen-new.component.css']
})
export class NotizenNewComponent implements OnInit {
	lehrer: Lehrer;
	schueler: Schueler;
	text: string;
	schuelerListe: Schueler[];
	lehrerListe: Lehrer[];
	error: string;

	constructor(private schuelerService: SchuelerService, private lehrerService: LehrerService, private notizenService: NotizenService, private router: Router) {
	}

	ngOnInit() {
		this.schuelerService.getSchueler().subscribe(schueler => {
			this.schuelerListe = schueler;
		});
		this.lehrerService.getLehrer().subscribe(lehrer => {
			this.lehrerListe = lehrer;
		})
	}

	public save() {
		this.notizenService.addNotiz(this.lehrer, this.schueler, this.text).subscribe(
			() => this.router.navigate(['/notes']),
			error => {
				this.error = error.message
			}
		);
	}
}
