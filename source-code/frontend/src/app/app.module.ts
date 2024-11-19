import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ToolbarModule } from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { BlogComponent } from './modules/blog/blog.component';
import { PortifolioComponent } from './modules/home/portifolio.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PortifolioComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
