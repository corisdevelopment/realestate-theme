import { $ as $$VerticalBigNav, a as $$Footer } from '../chunks/Footer_Z0x7l_nH.mjs';
import { c as createComponent, e as renderHead, b as renderComponent, f as renderSlot, r as renderTemplate } from '../chunks/astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-swhfej32> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Site Settings</title>${renderHead()}</head> <body data-astro-cid-swhfej32> ${renderComponent($$result, "VerticalBigNav", $$VerticalBigNav, { "data-astro-cid-swhfej32": true })} <div class="content_offset" data-astro-cid-swhfej32> ${renderSlot($$result, $$slots["default"])} </div> <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-swhfej32": true })} </body></html>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/settings.astro", void 0);

const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/settings.astro";
const $$url = "/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
