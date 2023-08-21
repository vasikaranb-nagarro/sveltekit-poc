import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  if (browser) {
    importShim("simple-comp").then(
      (mod) => {
        console.log(mod);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}) satisfies LayoutLoad;
