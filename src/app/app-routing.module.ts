import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ListPersonageComponent } from './list-itens/list-personage/list-personage.component';
import { ListPlanetsComponent } from './list-itens/list-planets/list-planets.component';
import { ListSpaceshipsComponent } from './list-itens/list-spaceships/list-spaceships.component';
import { ListVehiclesComponent } from './list-itens/list-vehicles/list-vehicles.component';
import { ListMoviesComponent } from './list-itens/list-movies/list-movies.component';
import { ListSpeciesComponent } from './list-itens/list-species/list-species.component';
import { DetailsPersonageComponent } from './list-itens/list-personage/details-personage/details-personage.component';
import { DetailsPlanetComponent } from './list-itens/list-planets/details-planet/details-planet.component';
import { DetailsSpaceshipComponent } from './list-itens/list-spaceships/details-spaceship/details-spaceship.component';
import { DetailsSpecieComponent } from './list-itens/list-species/details-specie/details-specie.component';
import { DetailsVehicleComponent } from './list-itens/list-vehicles/details-vehicle/details-vehicle.component';
import { DetailsMovieComponent } from './list-itens/list-movies/details-movie/details-movie.component';

const routes: Routes = [
  { path: 'personagens', component: ListPersonageComponent },
  { path: 'planetas', component: ListPlanetsComponent },
  { path: 'espaçonaves', component: ListSpaceshipsComponent },
  { path: 'veículos', component: ListVehiclesComponent },
  { path: 'filmes', component: ListMoviesComponent },
  { path: 'espécies', component: ListSpeciesComponent },
  { path: 'detalhes/personagem/:id', component: DetailsPersonageComponent },
  { path: 'detalhes/planeta/:id', component: DetailsPlanetComponent },
  { path: 'detalhes/espaconave/:id', component: DetailsSpaceshipComponent },
  { path: 'detalhes/especie/:id', component: DetailsSpecieComponent },
  { path: 'detalhes/veiculo/:id', component: DetailsVehicleComponent },
  { path: 'detalhes/filme/:id', component: DetailsMovieComponent },
  { path: '', redirectTo: 'personagens', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
