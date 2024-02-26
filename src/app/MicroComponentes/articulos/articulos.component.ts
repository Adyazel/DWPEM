import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {

  Articulos = {
    art1: {
      id:1,
      nombre:'GitHub Copilot: Best Practices for Prompt Crafting',
      fecha:'septiembre 21, 2002',
      decripcion:'Este artículo podría abordar cómo los desarrolladores pueden aprovechar al máximo GitHub Copilot, una herramienta de asistencia de codificación AI, ofreciendo consejos y estrategias para formular solicitudes efectivas que mejoren la calidad y relevancia de las sugerencias de código generadas por la AI.'
    },
    art2: {
      id:2,
      nombre:'Git: The Definitive Guide',
      fecha:'enero 15, 2020',
      decripcion:'Un artículo que ofrece una visión exhaustiva sobre Git, el sistema de control de versiones distribuido ampliamente utilizado por desarrolladores en todo el mundo. Podría cubrir desde los conceptos básicos hasta técnicas avanzadas, incluyendo mejores prácticas para la gestión de ramas, fusiones y resolución de conflictos, así como consejos para optimizar el flujo de trabajo en proyectos de desarrollo de software.'
    },
    art3: {
      id:3,
      nombre:'Docker Essentials: A Practical Introduction',
      fecha:'mayo 11,2022',
      decripcion:'Este artículo posiblemente se centra en Docker, una plataforma de contenedores que permite a los desarrolladores empaquetar aplicaciones en contenedores, facilitando así su despliegue y escalabilidad. Puede incluir una introducción a los conceptos fundamentales de los contenedores, cómo crear y gestionar imágenes de Docker, y cómo utilizar Docker Compose para orquestar múltiples contenedores en entornos de desarrollo y producción.'
    },
    art4: {
      id:4,
      nombre:'Introduction to Kubernetes for Developers',
      fecha:'febrero 2, 2020',
      decripcion:'Un artículo dirigido a desarrolladores que buscan familiarizarse con Kubernetes, un sistema de orquestación de contenedores de código abierto que automatiza la implementación, escalado y gestión de aplicaciones contenerizadas. Podría abarcar los principios básicos de Kubernetes, cómo configurar y desplegar aplicaciones en un clúster de Kubernetes, y cómo utilizar las características de Kubernetes para lograr una alta disponibilidad y escalabilidad de las aplicaciones.'
    },
    art5: {
      id:5,
      nombre:'IEEE 829 Test Documentation for Quality Assurance',
      fecha:'septiembre 4, 2019',
      decripcion:'Este artículo se enfocaría en la norma IEEE 829, que proporciona un marco para la documentación de las actividades de pruebas en proyectos de software, asegurando que los procesos de prueba sean sistemáticos, rastreables y efectivos. Podría describir los diferentes documentos que forman parte de la norma, como la especificación del plan de pruebas, la especificación de diseño de pruebas, la especificación de casos de prueba, y los informes de incidentes, destacando su importancia en el aseguramiento de la calidad del software'
    },

    // Puedes añadir más objetos según sea necesario
  };




 Articulo1 = {
  id:1,
  nombre:'dylan',
  fecha:'septiembre 21, 2002',
  decripcion:'wiueiwuef'
 }
}
