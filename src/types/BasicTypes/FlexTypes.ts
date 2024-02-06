type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type flexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type alignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';
type alignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
export type alignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type display = 'none' | 'flex';
export interface FlexTypes {
  flex?: number | string;
  display?: display;
  flexBasis?: number | string;
  flexDirection?: flexDirection;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: flexWrap;
  gap?: string | number;
  rowGap?: number;
  alignContent?: alignContent;
  alignItems?: alignItems;
  alignSelf?: alignSelf;
  columnGap?: number;
  justifyContent?: justifyContent;
  justifySelf?: string;
  aspectRatio?: number | string;
}
