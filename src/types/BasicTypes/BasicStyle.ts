import {css} from 'styled-components/native';
import {BasicTypes} from './BasicTypes';
import {styleWrapper} from './helpers';

export const BasicStyle = (props: BasicTypes) => css`
  ${styleWrapper(props.height, 'height')};
  ${styleWrapper(props.width, 'width')};
  ${styleWrapper(props.minHeight, 'min-height')};
  ${styleWrapper(props.maxHeight, 'max-height')};
  ${styleWrapper(props.minWidth, 'min-width')};
  ${styleWrapper(props.maxWidth, 'max-width')};
  ${styleWrapper(props.backgroundColor, 'background-color')};
  ${styleWrapper(props.opacity, 'opacity')};
  ${styleWrapper(props.objectFit, 'object-fit')};
  ${styleWrapper(props.backfaceVisibility, 'backface-visibility')};
  ${styleWrapper(props.overflow, 'overflow')};
  ${styleWrapper(props.resizeMode, 'resize-mode')};
  ${styleWrapper(props.borderColor, 'border-color')};
`;
