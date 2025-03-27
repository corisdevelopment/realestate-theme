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
 * - getLiveStory only works when the version in storyAPI.get(_, options)
 *   is "draft". This means that for the master branch in production liveStory 
 *   should be disabled by env variable STORYBLOK_IS_PREVIEW. When on the
 *   stagging branch liveStory should be enabled be getting the "draft"
 *   version of the story. The version should always default to "production"
 *   when no value is available.
 * - // console.log(" ~ ENV VARIABLE: ", process.env.NETLIFY);
 */

export async function GetStory(Astro: Readonly<AstroGlobal>, storySlug: string, storyOptions?: ISbStoriesParams) {
  let story = null;
  const liveStory = await getLiveStory(Astro);

  let defaultV: any = null;
  if (process.env.STORYBLOK_IS_PREVIEW === 'yes') {
    defaultV = "draft";
  } else {
    defaultV = "published";
  }

  const options: ISbStoriesParams = {
    version: defaultV,
    resolve_links: 'url',
    ...storyOptions,
  }
  if (liveStory) {
    story = liveStory;
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
  
  let defaultV: any = null;
  if (process.env.STORYBLOK_IS_PREVIEW === 'yes') {
    defaultV = "draft";
  } else {
    defaultV = "published";
  }

  const options: TSOptions = {
    version: defaultV,
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