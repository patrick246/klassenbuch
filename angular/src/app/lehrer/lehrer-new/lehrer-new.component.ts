import {OnInit, Component} from "@angular/core";
import {LehrerService} from "../lehrer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Lehrer} from "../lehrer";
@Component({
	selector: 'app-lehrer-edit',
	templateUrl: './lehrer-edit.compinent.html',
	styleUrls: []
})

export class LehrerNewComponent implements OnInit {

	private firstName: string;
	private lastName: string;
	private mail: string;
	private role: string;
	private lehrer: Lehrer = null;

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private lehrerService: LehrerService) {

	}

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
			let firstName = paramMap.get('firstName');
			let lastName = paramMap.get('lastName');
			let mail = paramMap.get('mail');
			let role = paramMap.get('role');

		})
	}


	public save() {
		console.log('save');
		this.lehrerService.addLehrer({
			firstName: this.firstName,
			lastName: this.lastName,
			mail: this.mail,
			role: this.role
		}).subscribe(
			() => {
				this.router.navigate(['/teacher'])
			}
		)
	}


}
