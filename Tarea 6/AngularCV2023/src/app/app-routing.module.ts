import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: '', component: GeneralInfoComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'certifications', component: CertificationsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
