import { getLiveStory, useStoryblokApi, type ISbStoriesParams } from "@storyblok/astro";
import type { AstroGlobal } from "astro";

export type TSOptions = {
  version?: 'draft' | 'published';
  resolve_links?: 'link' | 'url' | 'story' | '0' | '1';
  resolve_relations?: string | string[];
  is_startpage?: boolean;
  content_type?: string;
  starts_with?: string;
}
/**
 * * FUNCTION: GetStory()
 * @param Astro | Astro global needed for getLiveStory
 * @param storySlug | slug to get stories from
 * @param storyOptions | object
 * - Expects type TSOptions which takes the same types as ISbStoriesParams 
 *   just not as many options. storyOptions should be able to overide and add
 *   as needed. Revise or overide storyOptions type if needed.
 * @returns story
 */

// console.log(" ~ ENV VARIABLE: ", process.env.NETLIFY);

export async function GetStory(Astro: Readonly<AstroGlobal>, storySlug: string, storyOptions?: ISbStoriesParams) {
  let story = null;
  const liveStory = await getLiveStory(Astro);
  // const dev = import.meta.env.DEV ? "draft" : "published";
  // const defaultVersion = isPreview === 'yes' ? 'draft' : dev;

  let defaultV = null;
  if (process.env.STORYBLOK_IS_PREVIEW === 'yes') {
    defaultV = "draft";
    // console.log("SB PREVIEW: ")
  } else {
    defaultV = "published";
  }

  const options: ISbStoriesParams = {
    version: defaultV,
    resolve_links: 'url',
    ...storyOptions,
  }
  // console.log("OPT: ", options.version, storySlug);
  if (liveStory) {
    story = liveStory;
    // options.version= 'draft';
  } else {
    const storyAPI = useStoryblokApi();
    const { data } = await storyAPI.get(`cdn/stories${storySlug}`, options );
    story = data?.story;
  }
  
  return story;
}

/**
 * * FUNCTION: GetStories()
 * @param Astro | Astro global needed for getLiveStory
 * @param storyOptions | object
 * - Expects type TSOptions which takes the same types as ISbStoriesParams 
 *   just not as many options. storyOptions should be able to overide and add
 *   as needed. Revise or overide storyOptions type if needed.
 * @returns stories
 */
export async function GetStories(Astro: Readonly<AstroGlobal>, storyOptions?: TSOptions) {
  let stories = null;
  const liveStory = await getLiveStory(Astro);
  const defaultVersion = import.meta.env.DEV ? "draft" : "published";

  const options: ISbStoriesParams = {
    version: defaultVersion,
    resolve_links: 'url',
    ...storyOptions,
  }
  if (liveStory) {
    stories = liveStory;
  } else {
    const storyAPI = useStoryblokApi();
    const { data } = await storyAPI.get(`cdn/stories`, options );
    stories = data?.stories;
  }
  
  return stories;
}