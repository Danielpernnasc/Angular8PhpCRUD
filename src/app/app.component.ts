import { Component} from '@angular/core';
// import { CrudService } from './services';
// import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public produtos: any = [];
  // @ViewChild('TabelaProdutos', {static: true}) Table;
  // public dataTable: any;
  // constructor(private crudService: CrudService, private router: Router) { }
  title = 'ng8CRUDPHP';
  // ngOnInit() {
  //   this.loadProducts()

  // }
  // loadProducts() {
  //   this.crudService.getProducts().subscribe(
  //     productData => {
  //       this.produtos = productData;
       
  //     }
  // );
  // }
  // getNavigation(link, id){
  //   if(id === ''){
  //     this.router.navigate([link]);
  //   }else {
  //     this.router.navigate([link + '/' + id]);
  //   }
  // }
}
