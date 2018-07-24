import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
     * @public
     * @returns {string}
     * @memberof MenuComponent
  */
  public filterByName(): any {
    return [
      {
        'name': 'Personagens',
        'resource_url': './assets/img/1-img.png', 
        'number': 1, 
        'router': 'personagens',
      },
      {
        'name': 'Planetas',
        'resource_url': './assets/img/2-img.png', 
        'number': 2, 
        'router': 'planetas',
      },
      {
        'name': 'Espaçonaves',
        'resource_url': './assets/img/3-img.png', 
        'number': 3, 
        'router': 'espaçonaves',
      },
      {
        'name': 'Veículos',
        'resource_url': './assets/img/4-img.png', 
        'number': 4, 
        'router': 'veículos',

      },
      {
        'name': 'Filmes',
        'resource_url': './assets/img/5-img.png', 
        'number': 5, 
        'router': 'filmes',
      },
      {
        'name': 'Espécies',
        'resource_url': './assets/img/6-img.png', 
        'number': 6, 
        'router': 'espécies',
      }
    ];
  }
}