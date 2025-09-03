import { App, staticFiles } from 'fresh';
import { type State } from './utils.ts';
import { clerkMiddleware } from '@jsrob/fresh-clerk/server';

export const app = new App<State>();
app.use(staticFiles());

app.use(clerkMiddleware());

app.fsRoutes();
