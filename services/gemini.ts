
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is strictly sourced from the environment variable
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getLegalAdviceStream = async (message: string) => {
  const model = 'gemini-3-flash-preview';
  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: `You are the AI legal assistant for Verdicta Legal Consultants. 
      Your tone is professional, sophisticated, and helpful. 
      While you provide general legal information and guidance, you MUST always include a disclaimer that you are an AI and your advice does not constitute a formal attorney-client relationship. 
      Encourage the user to book a consultation with Verdicta's human experts for specific legal matters. 
      Use a sophisticated bronze/gold palette in your descriptions if asked about the firm.`,
      temperature: 0.7,
    },
  });

  return chat.sendMessageStream({ message });
};
