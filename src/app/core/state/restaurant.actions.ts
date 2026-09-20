import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AppData } from '../models/restaurant.model';

export const RestaurantActions = createActionGroup({
  source: 'Restaurant API',
  events: {
    'Load Data': emptyProps(),
    'Load Data Success': props<{ data: AppData }>(),
    'Load Data Failure': props<{ error: string }>(),
  },
});
