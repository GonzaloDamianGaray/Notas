import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaasComponent } from '../notaas/notaas.component';



export const routes: Routes = [
    {path: 'notas', component: NotaasComponent},    
    {path : '**', redirectTo: 'notas'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }