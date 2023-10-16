import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RecipesService } from 'src/services/recipe.service';
import { ShoppingListService } from 'src/services/shopping-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor';

@NgModule({
  providers: [
    ShoppingListService,
    RecipesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
