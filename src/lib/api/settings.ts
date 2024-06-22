import { useStoryblokApi } from '@storyblok/astro'

// Get Storyblok Data
const sbApi = useStoryblokApi()
const { data } = await sbApi.get('cdn/stories/settings', {
  version: 'draft',
  resolve_links: 'url',
})
const phoneNumber = data?.story?.content?.company_phone
const phoneLink = phoneNumber.replace(/-/g, '')
const email = data?.story?.content?.company_email
const mainNavItems = data?.story?.content?.header
const footer = data?.story?.content?.footer

let mainNav: any = []

mainNavItems.map((data: any) => {
  data.menu_items.map((item: any) => {
    if (item.sub_items.length === 0) {
      mainNav.push({
        title: item.title,
        link: item.link.cached_url != 'home' ? item.link.cached_url : '/',
      })
    } else {
      let subItems: any = []
      item.sub_items.map((subItem: any) => {
        subItems.push({
          title: subItem.title,
          link: subItem.link.cached_url,
        })
      })
      mainNav.push({
        title: item.title,
        link: '#',
        sub: subItems
      })
    }
    
  })
})

const footerNavItems = footer.map((item: any) => {
  if (item.menu_items) {
    return {
      menu_items: item.menu_items
    }
  }
}).filter(Boolean)

let footerNav: any = []

footerNavItems.map((data: any) => {
  data.menu_items.map((item: any) => {
    if (item.sub_items.length === 0) {
      footerNav.push({
        title: item.title,
        link: item.link.cached_url != 'home' ? item.link.cached_url : '/',
      })
    } else {
      item.sub_items.map((subItem: any) => {
        footerNav.push({
          title: subItem.title,
          link: subItem.link.cached_url,
        })
      })
    }
  })
})

const socials = footer.map((item: any) => {
  if (item.socials) {
    return item.socials
  }
}).filter(Boolean)

let socialMedia: any = []

socials[0].map((item: any) => {
  socialMedia.push({
    title: item.platform,
    icon: "ion:logo-" + item.platform,
    label: `visit ${item.platform} profile`,
    link: item.link.url != '' ? item.link.url : '#'
  })
})

let hideSocial = footer.map((item: any) => {
  return item.hide_social
}).filter((el: any) => el != undefined)
hideSocial = hideSocial[0]

export {
  phoneNumber,
  phoneLink,
  email,
  mainNav,
  footerNav,
  socialMedia,
  hideSocial
}