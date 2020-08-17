import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  otherServerName ='TestServer';
  serverCreated = false;
  servers = [
    'TestServer1',
    'TestServer2'
  ]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Server name: ${this.serverName}`;
  }

  /**
   * The event object has a property named "target". This is the HTML element on which the 
   * event occurred. Since this element is an input element, it has a value property. This 
   * value property is what the user has entered into the input element at the time of the 
   * event.
   * 
   * We explicitly cast the target property so the IDE is satisfied.
   */
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
