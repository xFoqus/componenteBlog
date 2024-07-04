import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { FormInputBlogComponent } from './components/form-input-blog/form-input-blog.component';
import { Inoticia } from './interfaces/inoticia.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ListaNoticiasComponent,FormInputBlogComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrayNoticias: Inoticia[] = [
    {title:'Titulo 1',imageurl:'https://placehold.co/150x150',body: 'Cuerpo de noticia 1',date: new Date()},{
      title:'Titulo 2',imageurl:'https://placehold.co/150x150',body: 'Cuerpo de noticia 2',date: new Date()}
    ];

  onNoticiaPublicada(event:Inoticia):void{
    this.arrayNoticias.push(event);
  }
}
