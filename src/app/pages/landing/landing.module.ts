import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

//Routing
import { ROUTES } from './landing.routes';

// Components
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './headermain.component';
import { HeaderViewComponent } from '../../components/header/headerview.component';
import { CarouselViewComponent } from '../../components/carousel/carouselview.component';
import { CarouselComponent } from './carousel.component';
import { ShowcaseViewComponent } from '../../components/showcase/showcaseview.component';
import { ShowcaseComponent } from './showcase.component';
import { TilesComponent } from './tilesmain.component';
import { ServicesViewComponent } from '../../components/services/servicesview.component';
import { ServicesComponent } from './services.component';
import { TilesViewComponent } from '../../components/tiles/tilesview.component';
import { FooterViewComponent } from '../../components/footer/footerview.component';
import { FooterComponent } from './footermain.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    HeaderViewComponent,
    CarouselViewComponent,
    CarouselComponent,
    ShowcaseComponent,
    ShowcaseViewComponent,
    TilesComponent,
    TilesViewComponent,
    ServicesViewComponent,
    ServicesComponent,
    FooterViewComponent,
    FooterComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    NgxCarouselModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: []
})
export class LandingModule {}
