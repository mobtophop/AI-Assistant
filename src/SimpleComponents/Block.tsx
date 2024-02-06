import styled from 'styled-components/native';
import {View} from 'react-native';
import React, {ReactNode} from 'react';
import {MarginStyle} from '@src/types/BasicTypes/MarginStyle';
import {PaddingStyle} from '@src/types/BasicTypes/PaddingStyle';
import {FlexStyle} from '@src/types/BasicTypes/FlexStyle';
import {BorderStyle} from '@src/types/BasicTypes/BorderStyle';
import {PositionStyle} from '@src/types/BasicTypes/PositionStyle';
import {CombinedType} from '@src/types/BasicTypes/CombinedType';
import {BasicStyle} from '@src/types/BasicTypes/BasicStyle';

interface Props extends CombinedType {
  children?: ReactNode;
}

const StyledView = styled(View)<Props>`
  ${BasicStyle};
  ${MarginStyle};
  ${PaddingStyle};
  ${FlexStyle};
  ${BorderStyle};
  ${PositionStyle};
`;

export const Block = (props: Props) => (
  <StyledView {...props}>{props.children}</StyledView>
);
