import React, {FC, ReactNode} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {DeleteItemPanel} from '../ArticlesList/DeleteItemPanel';

type Props = {
  handleDeleteItem: () => void;
  children?: ReactNode;
};
export const StyledSwipeableComp: FC<Props> = props => {
  const {handleDeleteItem} = props;
  const rightSwipe = () => {
    return <DeleteItemPanel handleDeleteItem={handleDeleteItem} />;
  };
  return (
    <Swipeable {...props} renderRightActions={rightSwipe}>
      {props.children}
    </Swipeable>
  );
};
