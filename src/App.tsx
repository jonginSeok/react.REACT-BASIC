import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
//페이지 컴포넌트
//const MainPage = React.lazy(() => import("@pages/index/index"));
import MainPage from "@pages/index";
import BookmarkPage from "@pages/bookmark/index";

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} index></Route>
					<Route path="/bookmark" element={<BookmarkPage />}></Route>
					<Route path="/search/:id" element={<MainPage />}></Route>
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
