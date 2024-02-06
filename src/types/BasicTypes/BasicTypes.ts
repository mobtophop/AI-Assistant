import {MarginTypes} from './MarginTypes';
import {PaddingTypes} from './PaddingTypes';
import {PositionTypes} from './PositionTypes';
import {ShadowTypes} from './ShadowTypes';
import {FlexTypes} from './FlexTypes';
import {BorderTypes} from './BorderTypes';
type objectFit = 'cover' | 'contain' | 'fill' | 'scale-down';
type backfaceVisibility = 'visible' | 'hidden';
type overflow = 'visible' | 'hidden' | 'scroll';
type resizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
export interface BasicTypes
  extends MarginTypes,
    FlexTypes,
    BorderTypes,
    PaddingTypes,
    PositionTypes,
    ShadowTypes {
  height?: string | number;
  width?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  backgroundColor?: string;
  opacity?: number;
  objectFit?: objectFit;
  backfaceVisibility?: backfaceVisibility;
  overflow?: overflow;
  resizeMode?: resizeMode;
}
