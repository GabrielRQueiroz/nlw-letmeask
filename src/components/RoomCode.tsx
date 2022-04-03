import copyImg from "assets/images/copy.svg"
import toast, { Toaster } from "react-hot-toast"
import "styles/room-code.scss"

type RoomCodeProps = {
	code: string
}

export const RoomCode = ({ code }: RoomCodeProps) => {
	const copyRoomCodeToClipboard = () => {
		toast.success("Room ID successfully copied.")
		navigator.clipboard.writeText(code)
	}

	return (
		<>
			<Toaster />
			<button className="room-code" onClick={copyRoomCodeToClipboard}>
				<div>
					<img src={copyImg} alt="Copy room code" />
				</div>
				<span>Sala #{code}</span>
			</button>
		</>
	)
}
