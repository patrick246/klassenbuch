import {Component, OnInit} from "@angular/core";
import {Notiz} from "../Notiz";
import {Schueler} from "../../schueler/schueler";
import {Lehrer} from "../../lehrer/lehrer";
import {SchuelerService} from "../../schueler/schueler.service";
import {LehrerService} from "../../lehrer/lehrer.service";
import {NotizenService} from "../notizen.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-notizen-edit',
	templateUrl: './notizen-edit.component.html',
	styleUrls: ['./notizen-edit.component.css']
})
export class NotizenEditComponent implements OnInit {
	notiz: Notiz;

	schuelerListe: Schueler[];
	lehrerListe: Lehrer[];
	error: string;

	constructor(private schuelerService: SchuelerService, private lehrerService: LehrerService, private notizenService: NotizenService, private router: Router, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {

		this.activatedRoute.paramMap.map(paramMap => {
			return paramMap.get('id');
		}).flatMap(id => {
			return this.notizenService.getNotiz(id);
		}).subscribe(notiz => {
			this.notiz = notiz;
		});
		this.schuelerService.getSchueler().subscribe(schueler => {
			this.schuelerListe = schueler;
		});
		this.lehrerService.getLehrer().subscribe(lehrer => {
			this.lehrerListe = lehrer;
		})
	}

	public save() {
		this.notizenService.updateNotiz(this.notiz).subscribe(
			() => this.router.navigate(['/notes']),
			error => {
				this.error = error.message
			}
		);
	}
}
