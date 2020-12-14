import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslateModule.forRoot(), AppRoutingModule, PortfolioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
