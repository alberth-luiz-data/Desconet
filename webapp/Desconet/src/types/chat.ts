export interface Message {
  id: number;
  text: string;
  isOutgoing: boolean;
  timestamp: string;
}

export interface RequestData {
  name: string;
  message: string;
  timestamp: string;
  sessionID: string;
}