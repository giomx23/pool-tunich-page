import { Component } from '@angular/core';
import { MaterialesComponent } from "./sections/materiales/materiales.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { NosotrosComponent } from "./sections/nosotros/nosotros.component";
import { ProductosComponent } from "./sections/productos/productos.component";
import { GaleriaComponent } from "./sections/galeria/galeria.component";
import { ContactoComponent } from "./sections/contacto/contacto.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [MaterialesComponent, NavbarComponent, HeroComponent, NosotrosComponent, ProductosComponent, GaleriaComponent, ContactoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
