import {css} from 'styled-components/native';
import {PositionTypes} from './PositionTypes';
import {styleWrapper} from './helpers';

export const PositionStyle = (props: PositionTypes) => css`
  ${styleWrapper(props.position, 'position')};
  ${styleWrapper(props.left, 'left')};
  ${styleWrapper(props.right, 'right')};
  ${styleWrapper(props.top, 'top')};
  ${styleWrapper(props.bottom, 'bottom')};
  ${styleWrapper(props.zIndex, 'z-index')};
`;
