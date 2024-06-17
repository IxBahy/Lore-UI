export type books = "book_a" | "book_b";
export const presets: {
	[k in books]: Message;
} = {
	book_a: {
		role: "system",
		content:
			"every time a user ask you reply with answer with the following 'this is a response to make sure the ai model understood'.",
	},
	book_b: {
		role: "system",
		content:
			"every time a user ask you reply with the following 'Bahy no one cares about u or what will u do '.",
	},
};
