import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FirstTestComponent } from './components/first-test/first-test.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionListElementComponent } from './components/question-list-element/question-list-element.component';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { QuestionService} from './services/question.service';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import {HttpModule} from '@angular/http';
import { routes } from './app.router';
import { ProfilePreviewComponent } from './components/profile-preview/profile-preview.component';
import { AnswerComponent } from './components/answer/answer.component';
import {UserService} from "./services/user.service";
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {NotAuthGuard} from "./guards/not-auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FirstTestComponent,
    LogInComponent,
    SignUpComponent,
    QuestionListComponent,
    QuestionListElementComponent,
    QuestionPageComponent,
    QuestionFormComponent,
    ProfilePreviewComponent,
    AnswerComponent,
    AnswerFormComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [QuestionService, UserService, AuthService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
