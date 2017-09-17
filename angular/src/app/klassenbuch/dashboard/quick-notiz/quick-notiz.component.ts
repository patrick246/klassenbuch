import {Component, OnInit} from "@angular/core";
import {KlassenService} from "../../../klassen.service";
import {Klasse} from "../../../klasse";
import {SchuelerService} from "../../../schueler.service";
import {Schueler} from "../../../schueler";
import {Lehrer} from "../../../lehrer/lehrer";
import {LehrerService} from "../../../lehrer/lehrer.service";
import {NotizenService} from "../../notizen/notizen.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-quick-notiz',
	templateUrl: './quick-notiz.component.html',
	styleUrls: ['./quick-notiz.component.css']
})
export class QuickNotizComponent implements OnInit {
	klassen: Klasse[];
	klasse: string = 'all';
	schueler: Schueler[];
	schuelerShown: Schueler[];
	schuelerSelected: Schueler;
	lehrerListe: Lehrer[];
	lehrerSelected: Lehrer;
	text: string;

	constructor(private klassenService: KlassenService, private schuelerService: SchuelerService, private lehrerService: LehrerService, private notizenService: NotizenService, private router: Router) {
	}

	ngOnInit() {
		this.klassenService.getKlassen().subscribe(klassen => {
			this.klassen = klassen;
		});
		this.schuelerService.getSchueler().subscribe(schueler => {
			this.schueler = schueler;
			this.schuelerShown = [...schueler];
		});
		this.lehrerService.getLehrer().subscribe(lehrer => {
			this.lehrerListe = lehrer;
		});
	}

	public onSelectKlasse(): void {
		if (this.klasse === 'all') {
			this.schuelerShown = [...this.schueler];
		} else {
			this.schuelerShown = this.schueler.filter(s => s.klasse === this.klasse);
		}
	}

	public addNotiz(): void {
		this.notizenService.addNotiz(this.lehrerSelected, this.schuelerSelected, this.text).subscribe(() => {
			this.router.navigate(['/notes']);
		})
	}

}
