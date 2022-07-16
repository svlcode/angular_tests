import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit  {
  allowNewServer = false;
  serverName = '';
  userName = '';
  serverCreated = false;

  constructor() {
    // this is called a fire and forget method because the severName variable will be set immediately.
    this.toggleAllowNewServer();
    this.serverName = 'Test server';
  }

  ngOnInit() { }
  
  
  

  async toggleAllowNewServer() {
    await this.sleep(() => (this.allowNewServer = true), 1500);
  }

  async addServer() {
    this.allowNewServer = false;
    await this.sleep(() => {
      this.serverCreated = true;
      this.allowNewServer = !this.allowNewServer;
    }, 1500);
  }

  async sleep(fn: (args: void) => void, ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return fn();
  }

  onUpdateServername(data) {
    this.serverName = data.target.value;
  }

  resetUsername() {
    this.userName = '';
  }
}
