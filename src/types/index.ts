import { LazyExoticComponent } from 'react';

export interface Route {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  name: string;
  redirectTo?: string;
}