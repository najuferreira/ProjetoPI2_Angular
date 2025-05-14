import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from "./main/banner/banner.component";
import { SobreTerapiaComponent } from './main/sobre-terapia/sobre-terapia.component';
import { SobreMimComponent } from './main/sobre-mim/sobre-mim.component';
import { FaixaCtaComponent } from "./main/faixa-cta/faixa-cta.component";
import { DepoimentosComponent } from './main/depoimentos/depoimentos.component';
import { TerapiaOnlineComponent } from "./main/terapia-online/terapia-online.component";
import { DuvidasComponent } from './main/duvidas/duvidas.component';
import { FooterComponent } from "./main/footer/footer.component";

@Component({
  selector: 'app-home',
  // importei o header para dentro do home 
  imports: [HeaderComponent, BannerComponent, SobreTerapiaComponent, SobreMimComponent, FaixaCtaComponent, DepoimentosComponent, TerapiaOnlineComponent, DuvidasComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

// só entende como função, so o let e o const 