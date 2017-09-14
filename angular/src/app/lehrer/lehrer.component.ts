import {Component, OnInit} from "@angular/core";
import {LehrerService} from "./lehrer.service";
import {Lehrer} from "./lehrer";

@Component({
  selector: 'app-lehrer',
  templateUrl: './lehrer.component.html',
  styles: []
})

export class LehrerComponent implements OnInit {
  private Lehrer: Lehrer[];

  constructor(private lehrerService: LehrerService) {

  }

  ngOnInit() {
    this.lehrerService.getLehrer().subscribe(lehrer => {
      this.Lehrer = lehrer;
    })
  }
}

