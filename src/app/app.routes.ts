import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

export const routes: Routes = [

    { path: '',title:"home Page", component: HomeComponent},
    { path: 'Aboutme',title:"About", component:AboutpageComponent},
];
