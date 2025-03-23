import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C4ycpPXV.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/kitchen-sink.astro.mjs');
const _page2 = () => import('./pages/listings/_listing_.astro.mjs');
const _page3 = () => import('./pages/listings.astro.mjs');
const _page4 = () => import('./pages/portfolio/_portfolio_.astro.mjs');
const _page5 = () => import('./pages/services/_service_.astro.mjs');
const _page6 = () => import('./pages/settings.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const _page8 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/kitchen-sink.astro", _page1],
    ["src/pages/listings/[listing].astro", _page2],
    ["src/pages/listings/index.astro", _page3],
    ["src/pages/portfolio/[portfolio].astro", _page4],
    ["src/pages/services/[service].astro", _page5],
    ["src/pages/settings.astro", _page6],
    ["src/pages/index.astro", _page7],
    ["src/pages/[...slug].astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "eac5c6eb-fb26-4ec1-a2d6-0fc3bbbf8263"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
