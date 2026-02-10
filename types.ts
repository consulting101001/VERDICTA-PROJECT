
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface DetailItem {
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  stats?: { label: string; value: string }[];
}
