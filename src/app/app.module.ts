import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { DebugPageComponent } from './debug-page/debug-page.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "debug",
    component: DebugPageComponent,
  },
  {
    path: "auth",
    component: AuthPageComponent,
  },
  {
    path: "demo",
    component: DemoPageComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MainPageComponent,
    AuthPageComponent,
    NotFoundPageComponent,
    DebugPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
