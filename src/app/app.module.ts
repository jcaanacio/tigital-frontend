import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { RestAuthService } from './services/data-providers/RestAuthService';
import { REST_AUTH_SERVICE_TOKEN } from './shared/injection-tokens/rest.auth.token';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RegisterProfileComponent,
  ],
<<<<<<< HEAD
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
=======
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: REST_AUTH_SERVICE_TOKEN,
      useClass: RestAuthService,
    },
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
