import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Repository } from './types/Repository';
import { User } from './types/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  username = '';
  user: User | undefined = undefined;
  repositories: Repository[] | undefined = undefined;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  isLoading = {
    user: false,
    repos: false,
  };
  isError = {
    user: null,
    repos: null,
  };

  onSubmit = (username: string) => {
    this.username = username;
    this.currentPage = 1;
    this.getUserDetails();
    this.getUserRepositories();
  };

  getUserDetails = () => {
    this.isLoading.user = true;
    this.isError.user = null;
    this.apiService.getUser(this.username).subscribe({
      next: (user: User) => {
        this.user = user;
        this.updateTotalPages();
        this.isLoading.user = false;
      },
      error: (error: HttpErrorResponse) => {
        this.isError.user = error.error.message;
        this.isLoading.user = false;
      },
    });
  };

  getUserRepositories = () => {
    this.isLoading.repos = true;
    this.isError.repos = null;
    this.apiService
      .getRepos(this.username, this.currentPage, this.pageSize)
      .subscribe({
        next: (repos: Repository[]) => {
          this.repositories = repos;
          this.isLoading.repos = false;
        },
        error: (error: HttpErrorResponse) => {
          this.isError.repos = error.error.message;
          this.isLoading.repos = false;
        },
      });
  };

  setPage = (page: number) => {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getUserRepositories();
    }
  };

  updateTotalPages() {
    if (this.user) {
      this.totalPages = Math.ceil(this.user.public_repos / this.pageSize);
    }
  }

  updatePageSize(e: Event) {
    this.pageSize = parseInt((e.target as HTMLInputElement).value);
    this.updateTotalPages();
    this.setPage(1);
    this.getUserRepositories();
  }
}
