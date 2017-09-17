import {Component, OnInit} from "@angular/core";
import {LehrerService} from "../lehrer.service";
import {Router} from "@angular/router";
import {Lehrer} from "../lehrer";
@Component({
	selector: 'app-lehrer-new',
	templateUrl: './lehrer-new.component.html',
	styleUrls: ['lehrer-new.component.css']
})

export class LehrerNewComponent implements OnInit {
	private lehrer: Lehrer = {
		id: '',
		firstName: '',
		lastName: '',
		mail: '',
		role: '',
		loginName: '',
		password: ''
	};

	constructor(private router: Router, private lehrerService: LehrerService) {

	}

	ngOnInit() {
	}


	public save() {
		console.log('save');
		this.lehrerService.addLehrer(this.lehrer).subscribe(
			() => {
				this.router.navigate(['/lehrer'])
			}
		)
	}


}
