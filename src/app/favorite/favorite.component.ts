import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input()isFavorite;
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("In Disable star function");
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  } 

}

export interface FavoriteChangedEventArgs {
  newValue : boolean
}
