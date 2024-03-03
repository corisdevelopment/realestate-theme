/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Types for ENV Vars
interface ImportMetaEnv {
    readonly PUBLIC_TEST: string;
    readonly CMS_REPO_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
