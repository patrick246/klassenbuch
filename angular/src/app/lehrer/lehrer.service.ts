
import {Injectable} from "@angular/core";
@Injectable()
export class LehrerService{
  firstName: string;
  lastName: string;
  mail: string;
  role: string;
  id: string;

  getLehrer(id:string){
    return JSON.parse(localStorage.getItem(id));
  }

  setLehrer(id: string, name1: string, name2:string, mail1: string, role1: string){
    let tmp = {firstName: name1, lastName: name2, mail: mail1, role: role1};
    localStorage.setItem(id, JSON.stringify(tmp));
  }

  removeLehrer(id: string){
    localStorage.removeItem(id);
  }
}
