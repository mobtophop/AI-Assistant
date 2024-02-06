import {css} from 'styled-components/native';
import {FlexTypes} from './FlexTypes';
import {styleWrapper} from './helpers';

export const FlexStyle = (props: FlexTypes) => css`
  ${styleWrapper(props.flex, 'flex')};
  ${styleWrapper(props.display, 'display')};
  ${styleWrapper(props.flexBasis, 'flex-basis')};
  ${styleWrapper(props.flexDirection, 'flex-direction')};
  ${styleWrapper(props.flexGrow, 'flex-grow')};
  ${styleWrapper(props.flexShrink, 'flex-shrink')};
  ${styleWrapper(props.flexWrap, 'flex-wrap')};
  ${styleWrapper(props.gap, 'gap')};
  ${styleWrapper(props.rowGap, 'row-gap')};
  ${styleWrapper(props.alignContent, 'align-content')};
  ${styleWrapper(props.alignItems, ' align-items')};
  ${styleWrapper(props.alignSelf, ' align-self')};
  ${styleWrapper(props.columnGap, 'column-gap')};
  ${styleWrapper(props.justifyContent, 'justify-content')};
  ${styleWrapper(props.justifySelf, 'justify-self')};
  ${styleWrapper(props.aspectRatio, 'aspect-ratio')};
`;
