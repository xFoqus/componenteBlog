import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { FormInputBlogComponent } from './components/form-input-blog/form-input-blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ListaNoticiasComponent,FormInputBlogComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componenteBlog';
}
