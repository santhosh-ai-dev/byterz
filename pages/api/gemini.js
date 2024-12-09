// pages/api/gemini.js
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Make sure this is correctly set in your .env file
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: message,
            }],
          }],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        return res.status(200).json({ reply: data.candidates[0]?.content?.parts[0]?.text || "No reply from Gemini." });
      } else {
        console.error("Error from Gemini API:", data);
        return res.status(500).json({ error: "Failed to generate response from Gemini", details: data });
      }
    } catch (error) {
      console.error("Error with Gemini API:", error);
      return res.status(500).json({ error: "An error occurred while processing the request." });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
