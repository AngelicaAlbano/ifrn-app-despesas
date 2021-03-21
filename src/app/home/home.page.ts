import { DespesaService } from './../model/despesa.service';
import { TipoDespesa } from './../model/tipodespesa';
import { Despesa } from './../model/despesa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Faz a ligação com os elementos de entrada do formulário. 
  despesa: Despesa;
  tipos: string[];
  adicionado: boolean;
  dataHoje = new Date();

  constructor(private ds: DespesaService) {
    let data = new Date();
    this.despesa = new Despesa('', undefined, TipoDespesa.OUTRA, data.toISOString(), '');
    this.tipos = Object.values(TipoDespesa);
    this.adicionado = false;
  }

  adicionar(){
    const novaDespesa = new Despesa(
      this.despesa.motivo,
      this.despesa.valor,
      this.despesa.tipo,
      this.despesa.data,
      this.despesa.origem);

      if(this.despesa.motivo != '' && this.despesa.valor != undefined && this.despesa.origem != '') {
        this.adicionado = this.ds.adicionar(novaDespesa);    
      }
    
  
  }

  limpar() {
    this.adicionado = false;
    this.despesa.motivo = '';
    this.despesa.valor= undefined;
    this.despesa.tipo = TipoDespesa.OUTRA;
    this.despesa.data = this.dataHoje.toISOString();
    this.despesa.origem= '';
    //ou location.reload()

  }

  ngOnInit(){
    this.adicionado = false;
    
  }
}
