import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import React, {ReactNode} from 'react';
import {PaddingStyle} from '@src/types/BasicTypes/PaddingStyle';
import {CombinedType} from '@src/types/BasicTypes/CombinedType';
import {BasicStyle} from '@src/types/BasicTypes/BasicStyle';
import {MarginStyle} from '@src/types/BasicTypes/MarginStyle';
import {FlexStyle} from '@src/types/BasicTypes/FlexStyle';
import {BorderStyle} from '@src/types/BasicTypes/BorderStyle';
import {PositionStyle} from '@src/types/BasicTypes/PositionStyle';

interface Props extends CombinedType {
  children?: ReactNode;
}

const StyledScrollView = styled(ScrollView)<Props>`
  ${BasicStyle};
  ${MarginStyle};
  ${PaddingStyle};
  ${FlexStyle};
  ${BorderStyle};
  ${PositionStyle};
`;

export const Scroll = (props: Props) => (
  <StyledScrollView {...props}>{props.children}</StyledScrollView>
);
