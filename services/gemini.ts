import { GoogleGenAI } from "@google/genai";

/**
 * getLegalAdviceStream
 * 
 * Facilitates a streaming conversation with the Verdicta Digital Concierge.
 * Designed with a fallback mechanism to support static hosting (e.g., GitHub Pages)
 * where environment variables like API keys are not available at runtime.
 */
export const getLegalAdviceStream = async (message: string) => {
  // Attempt to safely access the API Key
  let apiKey: string | undefined;
  try {
    apiKey = process.env.API_KEY;
  } catch (e) {
    apiKey = undefined;
  }

  // Fallback: If no API key is detected, return a high-fidelity mock stream
  // to ensure the static site remains functional and impressive for visitors.
  if (!apiKey || apiKey === "undefined") {
    return (async function* () {
      const responseText = `Welcome to the Verdicta Digital Concierge. 
      
Regarding your inquiry on "${message}", our firm specializes in institutional excellence and strategic legal advocacy. Our lead consultants provide the jurisdictional precision necessary to navigate complex mandates with absolute confidence.

To ensure the highest level of professional privilege and confidentiality, specific legal mandates are best discussed through a formal private consultation. 

Please utilize the "Consultation" protocols in our contact section for direct, privileged access to our senior council. 

(Note: This is a static demonstration response provided by the Verdicta system).`;

      const words = responseText.split(' ');
      for (const word of words) {
        // Simulate network latency and the cinematic typing experience
        await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 40));
        yield { text: word + ' ' };
      }
    })();
  }

  // Standard Gemini Implementation for environments with valid API keys
  const ai = new GoogleGenAI({ apiKey });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the AI legal assistant for Verdicta Legal Consultants. 
      Your tone is professional, sophisticated, and helpful. 
      While you provide general legal information and guidance, you MUST always include a disclaimer that you are an AI and your advice does not constitute a formal attorney-client relationship. 
      Encourage the user to book a consultation with Verdicta's human experts for specific legal matters.`,
      temperature: 0.7,
    },
  });

  return chat.sendMessageStream({ message });
};