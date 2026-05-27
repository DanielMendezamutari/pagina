import { AppContentLayoutNav, ContentWidth, FooterType, HorizontalNavType, NavbarType } from '@layouts/enums'
import faviconLogo from '@images/front-pages/landing-page/favicon.png'

export const layoutConfig = {
  app: {
    title: 'ribersoft-pos',
    logo: h('img', { src: faviconLogo, style: 'height: 40px; width: auto' }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: 1279,

    // isRTL: false,
    i18n: {
      enable: true,
    },
    iconRenderer: h('div'),
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true,
  },
  footer: {
    type: FooterType.Static,
  },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: 'ri-circle-line' },
  },
  horizontalNav: {
    type: HorizontalNavType.Sticky,
    transition: 'none',
    popoverOffset: 0,
  },
  icons: {
    chevronDown: { icon: 'ri-arrow-down-line' },
    chevronRight: { icon: 'ri-arrow-right-line' },
    close: { icon: 'ri-close-line' },
    verticalNavPinned: { icon: 'ri-record-circle-line' },
    verticalNavUnPinned: { icon: 'ri-circle-line' },
    sectionTitlePlaceholder: { icon: 'ri-subtract-line' },
  },
}
