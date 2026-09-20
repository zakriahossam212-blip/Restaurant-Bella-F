import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { RestaurantActions } from './restaurant.actions';

@Injectable()
export class RestaurantEffects {
  private actions$ = inject(Actions);
  private apiService = inject(ApiService);

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantActions.loadData),
      mergeMap(() =>
        this.apiService.getData().pipe(
          map(data => RestaurantActions.loadDataSuccess({ data })),
          catchError(error =>
            of(RestaurantActions.loadDataFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
