import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {Message} from '@myTypes/OpenAIApp/OpenAITypes';
import {Text} from '@simple/Text';

interface Props {
  messages: Message[];
}

export const MessagesList: FC<Props> = ({messages}) => {
  const renderMessage: ListRenderItem<Message> = useCallback(({item}) => {
    return (
      <Text width={'400px'} color={item.role === 'user' ? 'blue' : 'green'}>
        {item.content}
      </Text>
    );
  }, []);
  return (
    <FlatList
      data={messages}
      renderItem={renderMessage}
      scrollEnabled={false}
    />
  );
};
