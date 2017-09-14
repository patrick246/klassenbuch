import {Component, OnInit} from "@angular/core";
import {LehrerService} from "./lehrer.service";
import {lehrer} from "./lehrer";

@Component({
  selector: 'app-lehrer',
  templateUrl: './lehrer.component.html',
  styles: ['htmlcss/styles/main.css']
})

export class LehrerComponent implements OnInit {
  private Lehrer: lehrer[];

  constructor(private lehrerService: LehrerService) {

  }

  ngOnInit() {
    this.lehrerService.getLehrer().subscribe(lehrer => {
      this.Lehrer = lehrer;
    })
  }
}

