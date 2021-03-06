import { AuthContextProvider } from "contexts/AuthContext"
import { AdminRoom, Home, NewRoom, Room } from "pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rooms/new" element={<NewRoom />} />
					<Route path="/rooms/:id" element={<Room />} />
					<Route path="/admin/rooms/:id" element={<AdminRoom />} />
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	)
}

export default App

