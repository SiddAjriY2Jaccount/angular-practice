import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'WSYSWIG', content: 'CM Punk is back'}];

  onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(bpData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bpData.name,
      content: bpData.content
    });
  }

}
