import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-72f21-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        { observe: 'response' }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => this.error.next(error.message)
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('print2', 'pretty2');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-72f21-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        }),
        catchError((errorRes: any) => {
          // send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-72f21-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            console.log('event.sent');
          }
          if (event.type === HttpEventType.Response) {
            console.log('event.body', event.body);
          }
        })
      );
  }
}
