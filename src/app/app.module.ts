import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRouterModule } from './app.router.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { BioComponent } from './bio/bio.component';
import { ContactModule } from './contact/contact.module';
import { MrxComponent } from './mrx/mrx/mrx.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    BioComponent,
    MrxComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
