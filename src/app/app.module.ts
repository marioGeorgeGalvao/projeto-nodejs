import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ListPlanetsComponent } from './list-itens/list-planets/list-planets.component';
import { ListSpaceshipsComponent } from './list-itens/list-spaceships/list-spaceships.component';
import { ListVehiclesComponent } from './list-itens/list-vehicles/list-vehicles.component';
import { ListMoviesComponent } from './list-itens/list-movies/list-movies.component';
import { ListSpeciesComponent } from './list-itens/list-species/list-species.component';
import { ListPersonageComponent } from './list-itens/list-personage/list-personage.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PersonageService } from './list-itens/list-personage/personage.service';
import { ListMoviesService } from './list-itens/list-movies/movies.service';
import { PlanetsService } from './list-itens/list-planets/planets.service';
import { SpaceShipsService } from './list-itens/list-spaceships/spaceships.service';
import { SpeciesService } from './list-itens/list-species/species.service';
import { VehiclesService } from './list-itens/list-vehicles/vehicles.service';
import { DetailsPersonageComponent } from './list-itens/list-personage/details-personage/details-personage.component';
import { DetailsPersonageService } from './list-itens/list-personage/details-personage/details-personage.service';
import { DetailsPlanetComponent } from './list-itens/list-planets/details-planet/details-planet.component';
import { DetailsPlanetService } from './list-itens/list-planets/details-planet/details-planet.service';
import { DetailsSpaceshipComponent } from './list-itens/list-spaceships/details-spaceship/details-spaceship.component';
import { DetailsSpaceshipService } from './list-itens/list-spaceships/details-spaceship/details-spaceship.service';
import { DetailsSpecieComponent } from './list-itens/list-species/details-specie/details-specie.component';
import { DetailsSpecieService } from './list-itens/list-species/details-specie/details-specie.service';
import { DetailsVehicleComponent } from './list-itens/list-vehicles/details-vehicle/details-vehicle.component';
import { DetailsVehicleService } from './list-itens/list-vehicles/details-vehicle/details-vehicle.service';
import { DetailsMovieComponent } from './list-itens/list-movies/details-movie/details-movie.component';
import { DetailsMovieService } from './list-itens/list-movies/details-movie/details-movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListPlanetsComponent,
    ListPersonageComponent,
    ListSpaceshipsComponent,
    ListVehiclesComponent,
    ListPersonageComponent,
    ListMoviesComponent,
    ListSpeciesComponent,
    DetailsPersonageComponent,
    DetailsPlanetComponent,
    DetailsSpaceshipComponent,
    DetailsSpecieComponent,
    DetailsVehicleComponent,
    DetailsMovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient, 
    ListMoviesService,
    PlanetsService,
    SpaceShipsService,
    SpeciesService,
    VehiclesService,
    PersonageService,
    DetailsPersonageService,
    DetailsPlanetService,
    DetailsSpaceshipService,
    DetailsSpecieService,
    DetailsVehicleService,
    DetailsMovieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
