import {Component, OnInit} from "@angular/core";
import {LehrerService} from "./lehrer.service";
import {Lehrer} from "./lehrer";

@Component({
	selector: 'app-lehrer',
	templateUrl: './lehrer.component.html',
	styles: []
})

export class LehrerComponent implements OnInit {
	lehrers: Lehrer[];

	constructor(private lehrerService: LehrerService) {

	}

	ngOnInit() {
		this.lehrerService.getLehrer().subscribe(lehrer => {
			this.lehrers = lehrer;
		})
	}

	deleteTeacher(lehrer: Lehrer) {
		if (confirm(`Möchten Sie wirklich den Lehrer ${lehrer.firstName} ${lehrer.lastName} löschen?`)) {
			this.lehrerService.removeLehrer(lehrer).subscribe(lehrerList => {
				this.lehrers = lehrerList;
			});
		}
	}
}

