import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RestaurantState } from './restaurant.reducer';

export const selectRestaurantState =
  createFeatureSelector<RestaurantState>('restaurant');

export const selectRestaurantData = createSelector(
  selectRestaurantState,
  state => state.data
);

export const selectRestaurantLoading = createSelector(
  selectRestaurantState,
  state => state.loading
);

export const selectRestaurantError = createSelector(
  selectRestaurantState,
  state => state.error
);

export const selectAllMenuItems = createSelector(
  selectRestaurantData,
  data => data?.menu || []
);

export const selectMenu = selectAllMenuItems;

export const selectAllTestimonials = createSelector(
  selectRestaurantData,
  data => data?.testimonials || []
);

export const selectRestaurantInfo = createSelector(
  selectRestaurantData,
  data => data?.restaurant
);
