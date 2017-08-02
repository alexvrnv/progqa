import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './guards/auth.guard'

import { QuestionListComponent } from './components/question-list/question-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import {QuestionPageComponent} from "./components/question-page/question-page.component";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {QuestionFormComponent} from "./components/question-form/question-form.component";
import {NotAuthGuard} from "./guards/not-auth.guard";

export const router: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent, canActivate: [NotAuthGuard] },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'log-in', component: LogInComponent, canActivate: [NotAuthGuard] },
  { path: 'question/:id', component: QuestionPageComponent },
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'createQuestion', component: QuestionFormComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
