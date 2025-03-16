import { useStoryblokApi } from "@storyblok/astro";
import type { IndexType } from "typescript";

// Get Storyblok Data
const sbApi = useStoryblokApi();
const { data } = await sbApi.get("cdn/stories/settings", {
	version: "draft",
	resolve_links: "url",
});
const phoneNumber = data?.story?.content?.company_phone;
const phoneLink = phoneNumber.replace(/-/g, "");
const email = data?.story?.content?.company_email;
const mainNavItems = data?.story?.content?.header;
const footer = data?.story?.content?.footer;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const mainNav: any = [];

mainNavItems.map((data: { [key: string]: [] }) => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data.menu_items?.map((item: any) => {
		if (item.sub_items?.length === 0) {
			mainNav.push({
				title: item.title,
				link:
					item.link.cached_url !== "home" ? `/${item.link.cached_url}` : "/",
			});
		} else {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const subItems: any = [];
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			item.sub_items.map((subItem: any) => {
				subItems.push({
					title: subItem.title,
					link: `/${subItem.link.cached_url}`,
				});
			});
			mainNav.push({
				title: item.title,
				link: "#",
				sub: subItems,
			});
		}
	});
});
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const footerNavItems = footer
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	.map((item: any) => {
		if (item.menu_items) {
			return {
				menu_items: item.menu_items,
			};
		}
	})
	.filter(Boolean);
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const footerNav: any = [];
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
footerNavItems.map((data: any) => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data.menu_items.map((item: any) => {
		if (item.sub_items.length === 0) {
			footerNav.push({
				title: item.title,
				link:
					item.link.cached_url !== "home" ? `/${item.link.cached_url}` : "/",
			});
		} else {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			item.sub_items.map((subItem: any) => {
				footerNav.push({
					title: subItem.title,
					link: `/${subItem.link.cached_url}`,
				});
			});
		}
	});
});

const socials = footer
	.map((item: { [key: string]: [] }) => {
		if (item.socials) {
			return item.socials;
		}
	})
	.filter(Boolean);

const socialMedia: object[] = [];

socials[0].map((item: { [key: string]: { [key: string]: string } }) => {
	socialMedia.push({
		title: item.platform,
		icon: `ion:logo-${item.platform}`,
		label: `visit ${item.platform} profile`,
		link: item.link.url !== "" ? item.link.url : "#",
	});
});

let hideSocial = footer
	.map((item: { [key: string]: unknown }) => {
		return item.hide_social;
	})
	.filter((el: unknown) => el !== undefined);
hideSocial = hideSocial[0];

export {
	phoneNumber,
	phoneLink,
	email,
	mainNav,
	footerNav,
	socialMedia,
	hideSocial,
};
