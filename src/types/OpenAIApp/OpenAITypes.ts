export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
export interface SpeechesInState {
  role: 'user' | 'assistant';
  content: Response;
}
