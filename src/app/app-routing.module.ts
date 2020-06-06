import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedingComponent } from './feeding/feeding.component';
import { SleepComponent } from './sleep/sleep.component';
import { MeasurablesComponent } from './measurables/measurables.component';
import { ShotRecordsComponent } from './shot-records/shot-records.component';
import { EventsComponent } from './events/events.component';
import { AccountHomeComponent } from './account/home/account-home.component';
import { AuthGuard } from './helpers/auth.guard';
import { ChildComponent } from './child/child.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./account/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', component: AccountHomeComponent, canActivate: [AuthGuard] },
  { path: 'glow-users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'glow-account', loadChildren: accountModule, canActivate: [AuthGuard] },
  { path: 'glow-feeding', component: FeedingComponent,  canActivate: [AuthGuard] },
  { path: 'glow-sleep', component: SleepComponent,  canActivate: [AuthGuard] },
  { path: 'glow-measurables', component: MeasurablesComponent,  canActivate: [AuthGuard] },
  { path: 'glow-shot-records', component: ShotRecordsComponent,  canActivate: [AuthGuard] },
  { path: 'glow-events', component: EventsComponent,  canActivate: [AuthGuard] },
  { path: 'glow-child', component: ChildComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }