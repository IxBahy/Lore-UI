import { JwtPayload, jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface Props {
	message: ChatMessage;
}
const MessageFactory = ({ message }: Props) => {
	const token = localStorage.getItem("access_token") ?? "";
	const navigate = useNavigate();
	if (!token) {
		navigate("/login");
	}
	const decoded = jwtDecode<
		JwtPayload & { user_id: number; username: string; type: string }
	>(token);
	const user_id = decoded.user_id;

	if (message.sender_id.id === user_id) {
		return <UserMessage message={message} />;
	} else {
		return <OthersMessage message={message} />;
	}
};

export default MessageFactory;

interface ImageProps {
	src: string;
	alt: string;
	className: string;
}

const UserMessage: React.FC<Props> = ({ message }) => {
	return (
		<main className="flex justify-end mt-4 w-full text-sm text-black text-start font-thin">
			<section className="flex flex-col  w-80 ">
				<div className="flex p-5 bg-teal-600 rounded-3xl">
					{message.content}
				</div>
				<div className="flex gap-1.5 self-end mt-3">
					<img
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/d31d546007063101d8926c48ef4798482d4776850102be1055833feb1ba4871f?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
						alt="Icon"
						className="shrink-0 w-5 aspect-square"
					/>
					<span className="text-xs text-muted-foreground me-2">
						{message.created_at}
					</span>
				</div>
			</section>
			<img
				src={message.sender_id.img_url}
				alt="profile picture"
				className="shrink-0 self-end mt-16 w-9 aspect-square fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat]"
			/>
		</main>
	);
};
const OthersMessage: React.FC<Props> = ({ message }) => {
	return (
		<main className="flex justify-start mt-4 w-full text-sm text-black text-start font-thin">
			<img
				src={message.sender_id.img_url}
				alt="Decorative element"
				className="shrink-0 self-end mt-16 w-9 aspect-square fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat]"
			/>
			<section className="flex flex-col w-80">
				<div className="flex items-center p-5 bg-gray-200 rounded-3xl">
					{message.content}
				</div>
				<div className="flex justify-start gap-1.5 self-end mt-3 w-full">
					<span className="flex items-center text-xs text-muted-foreground ms-4">
						{message.created_at}
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/d31d546007063101d8926c48ef4798482d4776850102be1055833feb1ba4871f?apiKey=ffbac9baaace46a9ab45d6e0b9f2c125&"
							alt="Icon"
							className="mx-2"
						/>
					</span>
				</div>
			</section>
		</main>
	);
};
