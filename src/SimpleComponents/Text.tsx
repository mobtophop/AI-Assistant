import styled from 'styled-components/native';
import React, {ReactNode} from 'react';
import {PaddingStyle} from '@src/types/BasicTypes/PaddingStyle';
import {MarginStyle} from '@src/types/BasicTypes/MarginStyle';
import {PositionStyle} from '@src/types/BasicTypes/PositionStyle';
import {BasicStyle} from '@src/types/BasicTypes/BasicStyle';
import {FlexStyle} from '@src/types/BasicTypes/FlexStyle';
import {BorderStyle} from '@src/types/BasicTypes/BorderStyle';
import {BasicTypes} from '@src/types/BasicTypes/BasicTypes';

interface Props extends BasicTypes {
  textAlign?: string;
  textDecoration?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  letterSpacing?: string;
  lineHeight?: number | string;
  onPress?: any;
  children?: ReactNode;
}

const StyledText = styled.Text<Props>`
  ${({fontSize}) => fontSize && `fontSize: ${fontSize}`};
  ${({fontFamily}) => {
    if (fontFamily) {
      return `font-family: ${fontFamily}`;
    }
  }};
  ${({letterSpacing}) => letterSpacing && `letterSpacing: ${letterSpacing}`};
  ${({fontWeight}) => fontWeight && `fontWeight: ${fontWeight}`};
  ${({textAlign}) => textAlign && `textAlign: ${textAlign}`};
  ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
  ${({color}) => `color: ${color ? color : 'black'}`};
  ${({backgroundColor}) =>
    backgroundColor && `backgroundColor: ${backgroundColor}`};
  ${({textDecoration}) =>
    `text-decoration: ${textDecoration ? textDecoration : 'none'}`};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
  ${BasicStyle}
  ${MarginStyle};
  ${PaddingStyle};
  ${FlexStyle};
  ${BorderStyle};
  ${PositionStyle};
`;

export const Text = ({children, ...rest}: Props) => {
  return <StyledText {...rest}>{children}</StyledText>;
};
