declare module 'tailwindcss/lib/util/flattenColorPalette' {
    const flattenColorPalette: (palette: Record<string, string | Record<string, string>>) => Record<string, string>;
    export default flattenColorPalette;
  }
  