import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PrimeCheckComponent } from "./prime-check/prime-check.component";

@NgModule({
  declarations: [AppComponent,PrimeCheckComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
