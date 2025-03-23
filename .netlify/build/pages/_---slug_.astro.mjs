import { E as Ee } from '../chunks/Footer_Z0x7l_nH.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as renderComponent } from '../chunks/astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Button_CuWxHUZa.mjs';
import { $ as $$StoryblokComponent } from '../chunks/StoryblokComponent_DtLUG-V5.mjs';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form method="POST" data-netlify="true" netlify-honeypot="bot-field" id="form" class="needs-validation" data-astro-reload novalidate data-astro-cid-w2o6m4tk> <input type="checkbox" class="hidden" style="display:none" name="bot-field" data-astro-cid-w2o6m4tk> <div class="mb-5" data-astro-cid-w2o6m4tk> <input type="text" placeholder="First Name" required class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100" name="first-name" data-astro-cid-w2o6m4tk> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease provide your first name.\n</div> </div> <div class="mb-5" data-astro-cid-w2o6m4tk> <input type="text" placeholder="Last Name" required class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100" name="last-name" data-astro-cid-w2o6m4tk> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease provide your last name.\n</div> </div> <div class="mb-5" data-astro-cid-w2o6m4tk> <label for="email_address" class="sr-only" data-astro-cid-w2o6m4tk>Email Address</label><input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100" data-astro-cid-w2o6m4tk> <div class="empty-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease provide your email address.\n</div> <div class="invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease provide a valid email address.\n</div> </div> <div class="mb-5" data-astro-cid-w2o6m4tk> <label for="phone_number" class="sr-only" data-astro-cid-w2o6m4tk>Phone Number</label><input id="phone_number" type="text" placeholder="Phone Number" name="phone" required class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100" data-astro-cid-w2o6m4tk> <div class="empty-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease provide your phone number.\n</div> <div class="invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease provide a valid phone number.\n</div> </div> <div class="mb-3" data-astro-cid-w2o6m4tk> <textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none h-36 focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100" data-astro-cid-w2o6m4tk></textarea> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-w2o6m4tk>\nPlease enter your message.\n</div> </div> <div class="flex justify-center mx-auto" data-astro-cid-w2o6m4tk> <button type="submit" class="text-golden-400 font-cg font-light text-lg md:text-2xl uppercase md:w-3/4 bg-white border border-golden-400 rounded-lg px-4 py-2 text-center" data-astro-cid-w2o6m4tk>Contact Us</button> </div> </form>  <script>\n  const handleSubmit = (event) => {\n  event.preventDefault();\n\n  const myForm = event.target;\n  const formData = new FormData(myForm);\n\n  myForm.classList.add("was-validated");\n  if (!form.checkValidity()) {\n    form.querySelectorAll(":invalid")[0].focus();\n    return;\n  }\n  \n  fetch("/", {\n    method: "POST",\n    headers: { "Content-Type": "application/x-www-form-urlencoded" },\n    body: new URLSearchParams(formData).toString(),\n  })\n    .then(() => alert("Thank you for your submission"))\n    .catch((error) => alert(error));\n};\n\ndocument\n  .querySelector("form")\n  .addEventListener("submit", handleSubmit);\n\n<\/script>'])), maybeRenderHead());
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/components/utils/ContactForm.astro", void 0);

const $$Astro = createAstro("https://corisdevelopmentgroup.com");
async function getStaticPaths() {
  const storyblokApi = Ee();
  const { data } = await storyblokApi.get("cdn/stories", {
    level: 1,
    excluding_slugs: "home,config",
    version: "published",
    resolve_links: "url"
  });
  const stories = Object.values(data.stories);
  const paths = stories.map((story) => {
    return {
      params: { slug: story.slug }
    };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const sbApi = Ee();
  const { slug } = Astro2.params;
  const { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "published"
  });
  const page = data.story;
  let title = page.name + " | Coris Development Group";
  if (page.content.metatags !== "") {
    const metaTitle = page.content.metatags.title;
    title = metaTitle !== "" ? metaTitle : page.name;
    page.content.metatags.title = title + " | Coris Development Group";
  }
  const meta = {
    title,
    description: page.content.metatags?.description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metaTags": meta }, { "default": ($$result2) => renderTemplate`${page.content.body?.map((blok) => {
    if (blok.component === "heroBlok") {
      return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
    }
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok })}`;
  })}${// May need boolen or component to handle show form in Storyblok
  page.slug === "contact-us" && renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-2xl pb-16"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div>`}` })}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/[...slug].astro", void 0);
const $$file = "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
