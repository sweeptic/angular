// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KEY } from 'env';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }
}
