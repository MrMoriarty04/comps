import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: false,
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css'
})
export class Placeholder {
@Input() header=true;
@Input() lines=3;
}
