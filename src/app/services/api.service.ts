import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { Repository } from '../types/Repository';
import { map } from 'rxjs/operators';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<User> {
    return this.httpClient
      .get(`https://api.github.com/users/${githubUsername}`)
      .pipe(
        map((response: any) => {
          return response as User;
        })
      );
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params

  getRepos(
    githubUsername: string,
    page: number = 1,
    per_page: number = 10
  ): Observable<Repository[]> {
    return this.httpClient
      .get(
        `https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`
      )
      .pipe(
        map((response: any) => {
          return response as Repository[];
        })
      );
  }
}
