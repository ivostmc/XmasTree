import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { XmasTreeInputFormComponent } from './xmas-tree-input-form/xmas-tree-input-form.component';
import { XmasTreeOutputComponent } from './xmas-tree-output/xmas-tree-output.component';
import { CustomMinDirective } from './custom-min-validator.directive';
import { CustomMaxDirective } from './custom-max-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    XmasTreeInputFormComponent,
    XmasTreeOutputComponent,
    CustomMinDirective,
    CustomMaxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
