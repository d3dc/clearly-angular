import { Action } from '@ngrx/store';
import { User } from './user.model';

export interface State {
  user?: User;
  token?: string;
  isValid: boolean;
  expires?: Date;
};

export const initialState: State = {
  isValid: false
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: return state;
  }
}

