export const styleWrapper =
  (reactNativeStyle: string | number | undefined, cssStyle: string) => () =>
    reactNativeStyle ? `${cssStyle}: ${reactNativeStyle}` : undefined;
