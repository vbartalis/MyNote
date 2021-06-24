import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppLayoutComponent, AppComponent, SidebarComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
