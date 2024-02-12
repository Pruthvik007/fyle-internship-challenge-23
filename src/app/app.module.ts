import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserRepositoriesComponent } from './components/user-repositories/user-repositories.component';
import { UserRepositoriesSkeletonComponent } from './components/skeletons/user-repositories-skeleton/user-repositories-skeleton.component';
import { UserDetailsSkeletonComponent } from './components/skeletons/user-details-skeleton/user-details-skeleton.component';

@NgModule({
  declarations: [AppComponent, PaginationComponent, UserDetailsComponent, UserFormComponent, UserRepositoriesComponent, UserRepositoriesSkeletonComponent, UserDetailsSkeletonComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
