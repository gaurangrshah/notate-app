import { tailwind } from '@theme-ui/presets';

export const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    heroHeight: `60vh`,
    headerHeight: `64px`,
    box: `100%`,
    default: `90vw`,
    max: `100vw`,
  },
  borderStyles: {
    // solid: `solid`,
  },
  colors: {
    ...tailwind.colors,
    active: `blue.3`
  },
  styles: {
    //localized styles to site.
  },
};

export default theme;
