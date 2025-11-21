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
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+De+Roupa');
  }

  doarSangue() {
    this.abrirUrl ( 
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+De+Sangue');
  }
  doarProdutosHigiene() {
    this.abrirUrl ( 
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao');
  }
  doarBrinquedos() {
    this.abrirUrl ( 
    'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao');
  }

  abrirUrl(url: string) {
    window.open(url,'_blank')
    ?.focus();
  }
}
