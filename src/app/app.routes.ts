import { Routes } from '@angular/router';
import { PlayGroundOutComponent } from './Components/play-ground-out/play-ground-out.component';
import { ChangePageComponent } from './Components/change-page/change-page.component';
import { TheRoutes } from './Enums/TheRoutes';

export const routes: Routes = [
    {path:TheRoutes.BASE, component: PlayGroundOutComponent},
    {path:TheRoutes.SQURIES,component:ChangePageComponent},
];
