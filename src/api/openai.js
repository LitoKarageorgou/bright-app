import axios from "axios";

export const fetchAIResponse = async (userInput) => {
  const systemPrompt = `
You are a friendly assistant for Greek children aged 9–10 learning about Hercules.
Keep answers very short, simple, and interesting. Use fun, clear language.
Only answer questions related to Hercules from Greek mythology.
`;

  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userInput }
  ];

  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
        max_tokens: 200
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        }
      }
    );

    return res.data.choices[0].message.content;
  } catch (err) {
  console.error("OpenAI API Error:", err.response?.data || err.message);
  return "Oops! Something went wrong. Try again?";
}

};
