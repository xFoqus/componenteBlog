import { Component, Input } from '@angular/core';
import { Inoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-lista-noticias',
  standalone: true,
  imports: [],
  templateUrl: './lista-noticias.component.html',
  styleUrl: './lista-noticias.component.css'
})
export class ListaNoticiasComponent {
  @Input() noticias: Inoticia[] = [];
  constructor(){

  }


  ngOnInit(){
    this.cargarNoticias()
  }

  cargarNoticias(): string{
    let html = "";

    this.noticias.forEach((noticia: Inoticia)=>{
      html += `  
      <div class="noticia">
    <div class="imagen">
      <img src="${noticia.imageurl}" alt="Imagen de la noticia" />
    </div>
    <div class="contenido">
      <h2>${noticia.title}</h2>
      <p>${noticia.body}</p>
      <p class="fecha">${noticia.date}</p>
    </div>
  </div>`
    });

    return html;
  }

}
