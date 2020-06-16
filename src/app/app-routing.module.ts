import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './crud/view';
import { CreateComponent } from './crud/create';
import { UpdateComponent } from './crud/update';
import { ReadComponent } from './crud/read';


const routes: Routes = [
{path: '', component: ViewComponent},
{path: 'create', component: CreateComponent},
{path: 'update/:id', component: UpdateComponent},
{path: 'view/:id', component: ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
