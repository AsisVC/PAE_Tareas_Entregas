import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    GeneralInfoComponent,
    EducationComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
