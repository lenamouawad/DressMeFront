import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { MonDressingComponent } from './pages/mon-dressing/mon-dressing.component';
import { MaTenueComponent } from './pages/ma-tenue/ma-tenue.component';
import { PageVoyageComponent } from './pages/page-voyage/page-voyage.component';
import { MonProfilComponent } from './pages/mon-profil/mon-profil.component';
import { HautComponent } from './components/models/haut/haut.component';
import { BasComponent } from './components/models/bas/bas.component';
import { ChaussureComponent } from './components/models/chaussure/chaussure.component';
import { TenueComponent } from './components/models/tenue/tenue.component';
import { ArticlesFavorisComponent } from './pages/articles-favoris/articles-favoris.component';
import { AjouterArticleComponent } from './pages/page-article/ajouter-article.component';
import { ArticleComponent } from './components/models/article/article.component';
import { AjoutArticleComponent } from './pages/ajout-article/ajout-article.component';
import { TenueProposeeComponent } from './pages/tenue-proposee/tenue-proposee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageAcceuilComponent,
    MonDressingComponent,
    MaTenueComponent,
    PageVoyageComponent,
    MonProfilComponent,
    HautComponent,
    BasComponent,
    ChaussureComponent,
    TenueComponent,
    ArticlesFavorisComponent,
    AjouterArticleComponent,
    ArticleComponent,
    AjoutArticleComponent,
    TenueProposeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
