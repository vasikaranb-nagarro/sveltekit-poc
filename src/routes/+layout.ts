import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  if (browser) {
    const res = await System.import("simple-comp");
    console.log(res);
  }
}) satisfies LayoutLoad;
