import cssVariablesPolyfill from "css-vars-ponyfill";

// CSS Variable support in legacy browsers
cssVariablesPolyfill();

export {default as ThemeProvider} from "../lib/ThemeProvider.svelte";
export * from '../lib/theme';
