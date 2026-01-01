
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_PROMPT = `
You are the AI Assistant for ${PERSONAL_INFO.name}, an IT student at ${PERSONAL_INFO.university}.
Your goal is to answer recruiters' or visitors' questions about ${PERSONAL_INFO.name}'s background, projects, and skills.

Context about the student:
- University: ${PERSONAL_INFO.university}
- Major: ${PERSONAL_INFO.major}
- Graduation: ${PERSONAL_INFO.graduation}
- Bio: ${PERSONAL_INFO.bio}
- Projects: ${PROJECTS.map(p => `${p.title}: ${p.description} (Tech: ${p.tech.join(', ')})`).join('; ')}
- Skills: ${SKILLS.map(s => s.name).join(', ')}

Rules:
1. Be professional, friendly, and concise.
2. If someone asks something not mentioned in the context, politely say you don't have that specific information but can talk about their IT skills.
3. Highlight RMIT Vietnam when relevant.
`;

export const getChatResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unavailable. Please contact the student directly via email.";
  }
};
