import { Component } from '@angular/core';
import { ArticulosComponent } from '../MicroComponentes/articulos/articulos.component';
import { SkillsComponent } from '../MicroComponentes/skills/skills.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [ArticulosComponent, SkillsComponent, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {
  title = 'Dobermann software';
  titleMin = 'Dobermann Soft';
}
