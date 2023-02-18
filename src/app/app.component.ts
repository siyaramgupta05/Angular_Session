import { Component } from '@angular/core';
import { EnvService } from './service/env.service';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private environment:EnvService){
    console.log("App Component")
  }
  title=this.environment.projectName;
  // title=environment.projectName;
}
