import { PluginCreator } from "postcss";

interface Config {
  allowPropertys?: string[];
  validationCheck?: boolean;
  allowPropertyCheck?: boolean;
}

declare function postcssWhitelistSanitize(config: Config): PluginCreator<Config>

declare module "../index.js" {
  export const postcss = true;
  export default function postcssWhitelistSanitize(
    config: Config
  ): PluginCreator<Config>;
}

