import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"experience", component:ExperienceComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'portfolio', component:PortfolioComponent
  },
  {
    path:'contact', component:ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
