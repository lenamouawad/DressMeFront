import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './pages/ajout-article/ajout-article.component';
import { ArticlesFavorisComponent } from './pages/articles-favoris/articles-favoris.component';
import { MaTenueComponent } from './pages/ma-tenue/ma-tenue.component';
import { MonDressingComponent } from './pages/mon-dressing/mon-dressing.component';
import { MonProfilComponent } from './pages/mon-profil/mon-profil.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageVoyageComponent } from './pages/page-voyage/page-voyage.component';

const routes: Routes = [
  {path:"", component: PageAcceuilComponent},
  {path:"monDressing", component: MonDressingComponent},
  {path:"favoris", component: ArticlesFavorisComponent},
  {path:"maTenue", component: MaTenueComponent},
  {path:"voyage", component: PageVoyageComponent},
  {path:"profil", component: MonProfilComponent},
  {path:"parametres", component: PageAcceuilComponent},
  {path:"authentification", component: PageAcceuilComponent},
  {path:"contact", component: PageAcceuilComponent},
  {path:"ajoutArticle", component: AjoutArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
