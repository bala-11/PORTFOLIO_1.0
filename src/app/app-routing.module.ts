import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:"", redirectTo:'/home', pathMatch:'full'},

  {path:'header', component:HeaderComponent},

  {path:'home', component:HomeComponent},

  {path:'experience', component:ExperienceComponent},

  {path:'projects', component:ProjectsComponent},

  {path:'skills', component:SkillsComponent},

  {path:'education', component:EducationComponent},

  {path:'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
