import {css} from 'styled-components/native';
import {PaddingTypes} from './PaddingTypes';

export const PaddingStyle = (props: PaddingTypes) => css`
  padding-top: ${typeof props.paddingTop === 'number'
    ? props.paddingTop || props.paddingVertical
    : props.paddingTop || props.paddingVertical || 0}px;
  padding-bottom: ${typeof props.paddingBottom === 'number'
    ? props.paddingBottom || props.paddingVertical
    : props.paddingBottom || props.paddingVertical || 0}px;
  padding-left: ${typeof props.paddingLeft === 'number'
    ? props.paddingLeft || props.paddingHorizontal
    : props.paddingLeft || props.paddingHorizontal || 0}px;
  padding-right: ${typeof props.paddingRight === 'number'
    ? props.paddingRight || props.paddingHorizontal
    : props.paddingRight || props.paddingHorizontal || 0}px;
`;
