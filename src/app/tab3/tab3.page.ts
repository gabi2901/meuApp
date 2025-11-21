import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItensService } from '../services/itens';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private itensService: ItensService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  abrirUrl(url: string) {
    window.open(url, '_blank')?.focus();
  }

  enviar() {
    let nome = this.form.get('nome')?.value;
    let endereco = this.form.get('endereco')?.value;


    const itens = this.itensService.getItens();

    
    const listaItens = itens.length
      ? itens.map(i => `• ${i}`).join('%0A')
      : '';

  
    const mensagem =
      `Olá, me chamo ${nome}, moro em ${endereco} e vim através do seu app.%0A%0A` +
      `Itens que preciso:%0A${listaItens}`;

    const url = `https://api.whatsapp.com/send?phone=5587981217492&text=${mensagem}`;

    this.abrirUrl(url);
  }
}
