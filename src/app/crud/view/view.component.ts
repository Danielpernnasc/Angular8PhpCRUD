import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public produtos: any = [];
  @ViewChild('TabelaProdutos', {static: true}) Table;
  public dataTable: any;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.loadProducts()

  }
  loadProducts() {
    if ($.fn.DataTable.isDataTable(this.Table.nativeElement)) {
      $(this.Table.nativeElement).dataTable().fnDestroy();
    }
    this.crudService.getProducts().subscribe(
        productData => {
          this.produtos = productData;

          this.dataTable = $(this.Table.nativeElement);
          setTimeout(()=>{
            this.dataTable.DataTables();
          }, 2000);
          }, (err)=>{
              }, ()=>{

              }
              );
              }   
  getNavigation(link, id){
    if(id === ''){
      this.router.navigate([link]);
    }else {
      this.router.navigate([link + '/' + id]);
    }
  }
  deleteProduct(pID) {
    this.crudService.deleteProduct(pID).subscribe(data => {
    this.loadProducts();
    })
  }
}
