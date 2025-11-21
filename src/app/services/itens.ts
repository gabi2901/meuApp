import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private itensSelecionados: string[] = [];

  constructor() {}

  atualizarItem(item: string, marcado: boolean) {
    if (marcado) {
      // Adiciona se não existir
      if (!this.itensSelecionados.includes(item)) {
        this.itensSelecionados.push(item);
      }
    } else {
      // Remove item
      this.itensSelecionados = this.itensSelecionados.filter(i => i !== item);
    }
  }

  getItens() {
    return this.itensSelecionados;
  }
}
