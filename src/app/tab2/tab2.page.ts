import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {}

  doarAlimentos() {
    this.abrirUrl (
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+De+Alimento');
  }
  
  doarRoupas() {
    this.abrirUrl (
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+De+Roupas');
  }

  doarSangue() {
    this.abrirUrl ( 
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+De+Sangue');
  }

  abrirUrl(url: string) {
    window.open(url,'_blank')
    ?.focus();
  }
}
