import React, {FC} from 'react';
import ButtonIcon from '@assets/button.svg';
import {Button} from '@simple/Button.tsx';
import {Block} from '@simple/Block.tsx';
import {LongPressGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';

interface Props {
    toggleStart: LongPressGesture;
    recognitionIsActive: boolean;
}

export const ControlsPanel: FC<Props> = (
    {
        toggleStart,
        recognitionIsActive,
    }
) => {
    return (
        <Block
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Button onPress={toggleStart}>
                <ButtonIcon myColor={recognitionIsActive ? "green" :"red"} height={100} width={100}/>
            </Button>
        </Block>
    );
};
