import type { Handle } from "@sveltejs/kit";
//import { importShim } from 'es-module-shims';

export const handle = (({ event, resolve }) => {
  event.locals.window = {};
  return resolve(event);
}) satisfies Handle;
