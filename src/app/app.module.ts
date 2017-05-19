import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    {path: 'jobs', component: JobsComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: AppComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        JobsComponent,
        AboutComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
