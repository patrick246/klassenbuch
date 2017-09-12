
import {Component, OnInit} from "@angular/core";
import {LehrerService} from "./lehrer.service";
@Component({
  selector: 'app-lehrer',
  templateUrl: 'htmlcss/admin/index.html',
  styles:[]
})

export class LehrerComponent implements OnInit{
  name = 'LehrerComponent';
  constructor(public dataService: LehrerService){}
  ngOnInit(){

  }

}

