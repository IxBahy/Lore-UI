import OpenAI from "openai";
const api_key: string = import.meta.env.VITE_OPEN_AI_KEY;
const openai = new OpenAI({
	apiKey: api_key,
	dangerouslyAllowBrowser: true,
});

export const askBot = async (message: Message): Promise<Message> => {
	const chatCompletion = await openai.chat.completions.create({
		messages: [message],
		model: "gpt-3.5-turbo",
	});
	return {
		role: "system",
		content: chatCompletion.choices[0]?.message?.content || "",
	};
};
