import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { AboutmeComponent } from "../../components/aboutme/aboutme.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { IconsComponent } from "../../components/icons/icons.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutServicesComponent } from '../../aboutpagecomponents/about-services/about-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CarouselComponent, AboutmeComponent, ProjectsComponent, ContactComponent, IconsComponent, FooterComponent , AboutServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
