import {css} from 'styled-components/native';
import {MarginTypes} from './MarginTypes';

export const MarginStyle = (props: MarginTypes) => css`
  margin-top: ${typeof props.marginTop === 'number'
    ? props.marginTop || props.marginVertical
    : props.marginTop || props.marginVertical || 0}px;
  margin-bottom: ${typeof props.marginBottom === 'number'
    ? props.marginBottom || props.marginVertical
    : props.marginBottom || props.marginVertical || 0}px;
  margin-left: ${typeof props.marginLeft === 'number'
    ? props.marginLeft || props.marginHorizontal
    : props.marginLeft || props.marginHorizontal || 0}px;
  margin-right: ${typeof props.marginRight === 'number'
    ? props.marginRight || props.marginHorizontal
    : props.marginRight || props.marginHorizontal || 0}px;
`;
