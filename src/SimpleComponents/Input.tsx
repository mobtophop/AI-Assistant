import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import React, {ReactNode} from 'react';
import {PaddingStyle} from '@src/types/BasicTypes/PaddingStyle';
import {CombinedType} from '@src/types/BasicTypes/CombinedType';
import {PositionStyle} from '@src/types/BasicTypes/PositionStyle';
import {BasicStyle} from '@src/types/BasicTypes/BasicStyle';
import {MarginStyle} from '@src/types/BasicTypes/MarginStyle';
import {FlexStyle} from '@src/types/BasicTypes/FlexStyle';
import {BorderStyle} from '@src/types/BasicTypes/BorderStyle';

interface Props extends CombinedType {
  name?: string;
  placeholderTextColor?: string;
  placeholder?: string;
  onChangeText?: any;
  onBlur?: any;
  errorData?: any;
  validate?: any;
  color?: string;
  fontSize?: number;
  fontWeight?: string | number;
  letterSpacing?: string;
  value?: string;
  secureTextEntry?: boolean;
  children?: ReactNode;
}

const TextInputWithProps = styled(TextInput)<Props>`
  ${({name}) => name && `name: ${name}`};
  ${({validate}) => validate && `validate: ${validate}`};
  ${({errorData}) => errorData && `errorData: ${errorData}`};
  ${({secureTextEntry}) =>
    secureTextEntry && `secureTextEntry: ${secureTextEntry}`};
  ${({placeholder}) => placeholder && `placeholder: ${placeholder}`};
  ${({placeholderTextColor}) =>
    placeholderTextColor && `placeholderTextColor: ${placeholderTextColor}`};
  ${({fontSize}) => fontSize && `fontSize: ${fontSize}`};
  ${({color}) => color && `color: ${color}`};
  ${({value}) => value && `value: ${value}`};
  ${BasicStyle}
  ${MarginStyle};
  ${PaddingStyle};
  ${FlexStyle};
  ${BorderStyle};
  ${PositionStyle};
`;

export const Input: React.FC<Props> = ({onChangeText, children, ...rest}) => (
  <TextInputWithProps {...rest} onChangeText={onChangeText}>
    {children}
  </TextInputWithProps>
);
