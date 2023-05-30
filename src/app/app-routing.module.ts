import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ImageBuilderComponent } from './image-builder/image-builder.component'; // Import your new component
import { LoadingComponent } from './loading/loading.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'loading', component: LoadingComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'image-builder', component: ImageBuilderComponent },
  { path: '', component: LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
