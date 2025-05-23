import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss'] 
})
export class MainAdminComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navegarPara(pagina: string) {
    this.router.navigate([pagina], { relativeTo: this.route });
  }
}
