import {useCallback, useMemo, useState} from 'react';
import OpenAI from 'openai/index';
import Config from 'react-native-config';
// @ts-ignore
import {CompletionCreateParams} from 'openai/resources';

export const UseOpenAI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const openAIKey = Config.OPENAI_API_KEY;
    const openai = useMemo(
        () =>
            new OpenAI({
                apiKey: openAIKey,
                // @ts-ignore
                fetch: async (url, init) => {
                    try {
                        // @ts-ignore
                        const modifiedUrl = url.replace(/\/$/, '');

                        return await fetch(modifiedUrl, init);
                    } catch (error) {
                        console.log('openai fetch error', error);
                    }
                },
                maxRetries: 0,
            }),
        [],
    );

    const getAIresponseData: (content: string) => Promise<string> = useCallback(
        async (content: string) => {
            setIsLoading(true);
            console.log('Content in getCompletion', content);
            try {
                const params: CompletionCreateParams = {
                    messages: [{role: 'user', content: content}],
                    model: 'gpt-3.5-turbo',
                };
                console.log('params', params);
                const response = await openai.chat.completions.create(params);
                console.log('response from API', response.choices[0]);
                return response.choices[0].message.content || 'API returned null';
            } catch (error) {
                console.error('Error sending message:', error);
                return 'Error sending message';
            }finally {
                setIsLoading(false);
            }
        },
        [],
    );

    return {getAIresponseData, dataIsLoading:isLoading};
};
