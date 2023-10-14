// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASHWihuqFRbUbKoL_GJ83sg34Pp-ZLsAU',
      { email, password, returnSecureToken: true }
    );
  }
}
