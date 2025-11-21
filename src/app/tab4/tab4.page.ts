import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';  // ✔ CORRETO!
import { RouterModule } from '@angular/router';
import { ItensService } from '../services/itens';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,     // ✔ AGORA FUNCIONA
    RouterModule
  ]
})
export class Tab4Page {

  alimentos = [
    'Arroz',
    'Feijão',
    'Macarrão',
    'Leite',
    'Açúcar',
    'Café'
  ];

  higiene = [
    'Sabonete',
    'Escova de dentes',
    'Shampoo',
    'Papel higiênico',
    'Desodorante'
  ];

  itensSelecionados: string[] = [];

  constructor(private itensService: ItensService) {}

  alterarItem(item: string, marcado: boolean) {
    this.itensService.atualizarItem(item, marcado);
    this.itensSelecionados = this.itensService.getItens();
  }
}
