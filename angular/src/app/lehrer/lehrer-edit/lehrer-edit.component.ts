import {Component, OnInit} from "@angular/core";
import {LehrerService} from "../lehrer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Lehrer} from "../lehrer";
@Component({
	selector: 'app-lehrer-edit',
	templateUrl: './lehrer-edit.component.html',
})

export class LehrerEditComponent implements OnInit {
	private lehrer: Lehrer = null;

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private lehrerService: LehrerService) {

	}

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
			let id = paramMap.get('id');

			this.lehrerService.getOneLehrer(id).subscribe(lehrer => {
				this.lehrer = lehrer;
			})
		})

	}

	public save() {
		console.log('save');
		this.lehrerService.updateLehrer(this.lehrer).subscribe(
			() => {
				this.router.navigate(['/lehrer'])
			}
		)
	}


}
