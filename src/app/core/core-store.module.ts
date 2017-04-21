import { NgModule, InjectionToken } from '@angular/core';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { Action, combineReducers, StoreModule, INITIAL_REDUCER } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

// TODO: Replace with @ngrx/store v4 solution
export interface StoreProvider<T> {
    [key: string]: (state: T, action: Action) => T;
}

export const STORE_PROVIDER = new InjectionToken<StoreProvider<any>>('core.storeProvider');

function rootReducerFactory(providers: StoreProvider<any>[]) {
  const reducers = {};

  for (const provider of providers) {
    for (const key in provider) {
      if (typeof provider[key] === 'function') {
        reducers[key] = provider[key];
      }
    }
  }

  console.log('providing reducers', reducers);

  if (environment.production) {
    return combineReducers(reducers);
  } else {
    return storeFreeze(combineReducers(reducers));
  }
}

export const REDUCERS = {
  router: routerReducer
};

@NgModule({
  imports: [
    StoreModule.provideStore({}),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  exports: [StoreModule],
  providers: [
    {
      provide: INITIAL_REDUCER,
      deps: [ STORE_PROVIDER ],
      useFactory: rootReducerFactory
    },
    {
      provide: STORE_PROVIDER,
      useValue: REDUCERS,
      multi: true
    }
  ]
})
export class CoreStoreModule {}
