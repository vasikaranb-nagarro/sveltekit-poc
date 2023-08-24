import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  if (browser) {
    await System.import("simple-comp");
  }
}) satisfies LayoutLoad;
