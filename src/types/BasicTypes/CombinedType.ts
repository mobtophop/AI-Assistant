import {BasicTypes} from './BasicTypes';
import {BorderTypes} from './BorderTypes';
import {FlexTypes} from './FlexTypes';
import {MarginTypes} from './MarginTypes';
import {PaddingTypes} from './PaddingTypes';
import {PositionTypes} from './PositionTypes';

export interface CombinedType
  extends BasicTypes,
    BorderTypes,
    FlexTypes,
    MarginTypes,
    PaddingTypes,
    PositionTypes {}
