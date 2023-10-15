// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KEY } from 'env';
import { catchError, throwError } from 'rxjs';

export interface authResponseData {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<authResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY.apiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<authResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY.apiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log('errorRes', errorRes);

    let errorMessage = 'An unknown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email exists already';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'this email/password does not exists';
        break;

      default:
        break;
    }
    return throwError(errorMessage);
  }
}
