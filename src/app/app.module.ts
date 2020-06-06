import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { CoreModule } from 'src/core/core.module';
import { ChildComponent } from './child/child.component';
import { ChildListComponent } from './child/child-list/child-list.component';
import { ChildItemComponent } from './child/child-item/child-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildListComponent,
    ChildItemComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
