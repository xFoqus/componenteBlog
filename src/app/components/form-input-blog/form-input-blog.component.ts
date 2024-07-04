import { Component } from '@angular/core';
import { Inoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-input-blog.component.html',
  styleUrl: './form-input-blog.component.css'
})
export class FormInputBlogComponent {
  newNoticia: Inoticia = {title:"",imageurl:"",body:"",date: new Date()};
}
