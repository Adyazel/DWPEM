import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = {
    skill1: {
      id: 1,
      nombre: 'Angular 17',
      descripcion: 'framework para la creacion de proyectos web'
    },
    skill2: {
      id: 2,
      nombre: 'Javascript',
      descripcion: 'lenguaje orientado a objetos debilmente tipado'
    },
    skill3: {
      id: 3,
      nombre: 'HTML/CSS/JS',
      descripcion: 'lenguajes basicos de una pagina web'
    },
    skill4: {
      id: 4,
      nombre: 'Mysql/Sql',
      descripcion: 'lenguaje para administrar bases de datos'
    },
    skill5: {
      id: 5,
      nombre: 'photoshop',
      descripcion: 'aplicacion para la edición de imagenes'
    }

    // Puedes añadir más objetos según sea necesario
  };

}
