import { lazy } from 'react';
import { Route } from '../types';

export const routes: Route[] = [
  {
    path: '/compound-interest',
    component: lazy(() => import('./../features/compound/CompoundInterest')),
    name: 'Compound Interest'
  },
  {
    path: '/savings',
    component: lazy(() => import('./../features/savings/Savings')),
    name: 'Savings Calculator'
  },
  {
    path: '/currency',
    component: lazy(() => import('./../features/currency/Currency')),
    name: 'Currency Converter'
  },
  {
    path: '/percentage',
    component: lazy(() => import('./../features/percentage/Percentage')),
    name: 'Percentage Calculator'
  },
  {
    path: '/loan',
    component: lazy(() => import('./../features/loan/Loan')),
    name: 'Loan Calculator'
  },
  {
    path: '/investment',
    component: lazy(() => import('./../features/investment/Investment')),
    name: 'Investment Calculator'
  },
  {
    path: '/time-value',
    component: lazy(() => import('./../features/timeValue/TimeValue')),
    name: 'Time Value Calculator'
  },
  {
    path: '/ratio',
    component: lazy(() => import('./../features/ratio/Ratio')),
    name: 'Ratio Calculator'
  },
  {
    path: '/yield',
    component: lazy(() => import('../features/yield/Yield')),
    name: 'Yield Calculator'
  }
];