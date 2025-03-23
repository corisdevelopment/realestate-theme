import '../chunks/Footer_Z0x7l_nH.mjs';
import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Button_CuWxHUZa.mjs';
import 'clsx';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$GalleryDiamond = createComponent(($$result, $$props, $$slots) => {
  const testImg = "/unsplash_f9qZuKoZYoY.png";
  return renderTemplate`${maybeRenderHead()}<section class="gallery-diamond" data-astro-cid-fetmz4jc> <div class="gallery-wrapper p-8" data-astro-cid-fetmz4jc> <div class="gallery grid grid-cols-6 gap-2" data-astro-cid-fetmz4jc> <!-- Row 1 --> <div class="col-start-3 col-span-2 row-start-1 row-span-2" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <!-- Row 2 --> <div class="col-start-2 col-span-2 row-span-2 row-start-2" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <div class="col-start-4 col-span-2 row-span-2 row-start-2" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <!-- Row 3 --> <div class="col-start-1 col-span-2 row-span-2 row-start-3" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <div class="col-start-3 col-span-2 row-span-2 row-start-3" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <!-- <img src={testImg} alt="" class="rounded-lg"> --> <div class="logo bg-golden-500" data-astro-cid-fetmz4jc>Logo</div> </div> </div> <div class="col-start-5 col-span-2 row-span-2 row-start-3" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <!-- Row 4 --> <div class="col-start-2 col-span-2 row-span-2 row-start-4" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <div class="col-start-4 col-span-2 row-span-2 row-start-4" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> <!-- Row 5 --> <div class="col-start-3 col-span-2 row-span-2 row-start-5" data-astro-cid-fetmz4jc> <div class="rotate overflow-hidden" data-astro-cid-fetmz4jc> <img${addAttribute(testImg, "src")} alt="" class="rounded-lg" data-astro-cid-fetmz4jc> </div> </div> </div> </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/components/utils/GalleryDiamond.astro", void 0);

const $$KitchenSink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-content container mx-auto my-8"> <div class="lg:w-1/2"> ${renderComponent($$result2, "Button", $$Button, { "gradientAnimated": true, "class": "flex text-light-gold font-cg font-light text-2xl uppercase", "innerClassNames": "border border-golden-600", "background": "#111", "text": "Working" })} ${renderComponent($$result2, "Button", $$Button, { "gradient": true, "text": "Gradient", "class": "flex hover:shadow-golden-600 font-cg font-light text-2xl uppercase" })} ${renderComponent($$result2, "Button", $$Button, { "outline": true, "text": "Outline", "class": "flex text-golden-400 font-cg font-light text-2xl uppercase" })} ${renderComponent($$result2, "Button", $$Button, {})} </div> <hr class="border-golden-400 my-8"> <!-- <PropertyCard /> --> </main>  <section> ${renderComponent($$result2, "GalleryDiamond", $$GalleryDiamond, {})} </section> ` })}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/kitchen-sink.astro", void 0);

const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/kitchen-sink.astro";
const $$url = "/kitchen-sink";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KitchenSink,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
