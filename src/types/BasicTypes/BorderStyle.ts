import {css} from 'styled-components/native';
import {BorderTypes} from './BorderTypes';
import {styleWrapper} from './helpers';

export const BorderStyle = (props: BorderTypes) => css`
  ${styleWrapper(props.borderBottomWidth, 'border-bottom-width')};
  ${styleWrapper(props.borderLeftWidth, 'border-left-width')};
  ${styleWrapper(props.borderRightWidth, 'border-right-width')};
  ${styleWrapper(props.borderTopWidth, 'border-top-width')};
  ${styleWrapper(props.borderWidth, 'border-width')};
  ${styleWrapper(props.borRad, 'border-radius')};
  ${styleWrapper(props.borderColor, 'border-color')};
  ${styleWrapper(props.borderStyle, 'border-style')};
  ${styleWrapper(props.borderLeftColor, 'border-left-color')};
  ${styleWrapper(props.borderBottomLeftRadius, 'border-bottom-left-radius')};
  ${styleWrapper(props.borderBottomRightRadius, 'border-bottom-right-radius')};
  ${styleWrapper(props.borderBottomColor, 'border-bottom-color')};
  ${styleWrapper(props.borderRightColor, 'border-right-color')};
  ${styleWrapper(props.borderTopColor, 'border-top-color')};
  ${styleWrapper(props.borderTopLeftRadius, 'border-top-left-radius')};
  ${styleWrapper(props.borderTopRightRadius, 'border-top-right-radius')};
`;
