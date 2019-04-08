import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ //const- cannot be changed
{path:'', component:HomeComponent},// check home.component.ts for component name
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},//whenever contact is seen in path- go load ContactComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
