import { createReducer, on } from '@ngrx/store';
import { RestaurantActions } from './restaurant.actions';
import { AppData } from '../models/restaurant.model';

export interface RestaurantState {
  data: AppData | null;
  loading: boolean;
  error: string | null;
}

export const initialState: RestaurantState = {
  data: null,
  loading: false,
  error: null,
};

export const restaurantReducer = createReducer(
  initialState,
  on(RestaurantActions.loadData, state => ({ ...state, loading: true })),
  on(RestaurantActions.loadDataSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data,
  })),
  on(RestaurantActions.loadDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
