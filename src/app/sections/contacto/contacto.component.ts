import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  success = false;

  onSubmit(form: any) {
    this.success = true;
    form.reset();
  }
}
