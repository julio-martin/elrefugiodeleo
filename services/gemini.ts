
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getPetMatchAdvice = async (userLifestyle: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Como experto en comportamiento animal del "Refugio de Leo", ayuda a una persona a decidir qué tipo de mascota adoptar según su estilo de vida. 
      Usuario dice: "${userLifestyle}"
      Responde de forma profesional, cálida y empática. Sugiere si le convendría más un perro o un gato, y qué temperamento buscar. Mantén la respuesta breve (máximo 150 palabras).`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo sentimos, nuestro asistente de IA está descansando ahora mismo. Por favor, contacta con nosotros directamente por redes sociales para asesoramiento personalizado.";
  }
};
