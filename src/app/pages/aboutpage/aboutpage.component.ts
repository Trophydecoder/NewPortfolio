import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { AboutSectionComponent } from '../../aboutpagecomponents/about-section/about-section.component';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports:[NavBarComponent , AboutSectionComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss'
})
export class AboutpageComponent {

}
