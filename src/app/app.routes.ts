import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }