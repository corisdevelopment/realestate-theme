/* 
* TYPE DECLARATIONS
*/

type TMenuItem = {
	title: string;
	link: string;
	sub?: any;
}

type TMenuArray = TMenuItem[];

/* 
* FUNCTION: MainNavItems
* @params: items: array
* 
* Build and return array of navigation items based
* upon the input params.
*/
export function MainNavItems(items: []): TMenuArray {
	const mainNav: TMenuArray = [];

	// Map over the nav items
	items?.map((data: { [key: string]: [] }) => {
		data.menu_items?.map((item: any) => {
			if (item.sub_items?.length === 0) {
				mainNav.push({
					title: item.title,
					link:
						item.link.cached_url !== "home" ? `/${item.link.cached_url}` : "/",
				});
			} else {
				const subItems: any = [];
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
	return mainNav;
};

/*
 * FUNCTION: FooterNavItems
 * @params: items: array
 * 
 * Build and return array of links based upon
 * input params.
 */
export function FooterNavItems(footer: []): TMenuArray {
	// console.log("FOOTER NAV: ", footer);
	// Return items from footer(param)
	const footerNavItems = footer?.map((item: any) => {
		if (item.menu_items) {
			return {
				menu_items: item.menu_items,
			}
		}
	}).filter(Boolean);

	// Set return variable
	const footerNav: TMenuArray = [];
	// Loop over items and set nav array
	footerNavItems?.map((data: any) => {
		data.menu_items.map((item: any) => {
			if (item.sub_items.length === 0) {
				footerNav.push({
					title: item.title,
					link:
						item.link.cached_url !== "home" ? `/${item.link.cached_url}` : "/",
				});
			} else {
				item.sub_items.map((subItem: any) => {
					footerNav.push({
						title: subItem.title,
						link: `/${subItem.link.cached_url}`,
					});
				});
			}
		});
	});
	return footerNav;
}


/*
 * FUNCTION: SocialMediaItems
 * @params: items: array
 * 
 * Build and return array of links based upon
 * input params.
 */
type TSocialMedia = {
	title: string,
	icon: string,
	label: string,
	link: string,
}
export function SocialMediaItems(footer: any) {
	const socials = footer?.map((item: { [key: string]: [] }) => {
			if (item.socials) {
				return item.socials;
			}
		})
		.filter(Boolean).shift();
	const socialMedia: TSocialMedia[] = [];
	if (socials?.length > 0) {
		socials?.map((item: any) => {
			socialMedia?.push({
				title: item.platform,
				icon: `ion:logo-${item.platform}`,
				label: `visit ${item.platform} profile`,
				link: item.link.url !== "" ? item.link.url : "#",
			});
		});
		return socialMedia;
	} else {
		return 0;
	}
}
