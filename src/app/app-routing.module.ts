import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageBuilderComponent } from './image-builder/image-builder.component'; // Import your new component

const routes: Routes = [
  { path: 'image-builder', component: ImageBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
