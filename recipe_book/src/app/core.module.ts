import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RecipesService } from 'src/services/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor';

@NgModule({
  providers: [
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
