import googleIconImg from "assets/images/google-icon.svg"
import illustrationImg from "assets/images/illustration.svg"
import logoImg from "assets/images/logo.svg"
import { Button } from "components"
import { useAuth } from "hooks/useAuth"
import { FormEvent, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { database } from "services/firebase"
import "styles/auth.scss"

export const Home = () => {
	const navigate = useNavigate()
	const { user, signInWithGoogle } = useAuth()
	const [roomCode, setRoomCode] = useState("")

	const handleRoomCreation = async () => {
		if (!user) await signInWithGoogle()

		navigate("/admin/rooms/new")
	}

	const handleJoinRoom = async (event: FormEvent) => {
		event.preventDefault()

		if (roomCode.trim() === "") {
			return
		}

		const roomRef = await database.ref(`rooms/${roomCode}`).get()

		if (!roomRef.exists()) {
			toast.error("Room does not exist.")
			return
		}

		if (!roomRef.val().endedAt) {
			toast.error("Room already closed")
			return
		}

		navigate(`/rooms/${roomCode}`)
	}

	return (
		<>
			<Toaster />
			<div id="page-auth">
				<aside>
					<img
						src={illustrationImg}
						alt="Ilustração simbolizando perguntas e respostas"
					/>
					<strong>Crie salas de Q&amp;A ao-vivo</strong>
					<p>Tire as dúvidas da sua audiência em tempo real</p>
				</aside>
				<main>
					<div className="main-content">
						<img src={logoImg} alt="LetMeAsk" />
						<button onClick={handleRoomCreation} className="create-room">
							<img src={googleIconImg} alt="Logo do Google" />
							Crie sua sala com o Google
						</button>

						<div className="separator" tabIndex={0}>
							ou entre em uma sala
						</div>

						<form onSubmit={handleJoinRoom}>
							<input
								type="text"
								placeholder="Digite o código da sala"
								onChange={event => setRoomCode(event.target.value)}
								value={roomCode}
							/>
							<Button type="submit">Entrar na sala</Button>
						</form>
					</div>
				</main>
			</div>
		</>
	)
}
