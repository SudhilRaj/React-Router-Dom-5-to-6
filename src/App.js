// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Comments from './components/Comments';
import CommentDetails from './components/CommentDetails';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CommenstProvider } from './context/CommentsContext';

function App() {
  return (
    <div className="App">
		<CommenstProvider>
			<BrowserRouter>
				<Header />
				{/*  - Switch changed to routes
				     - Component should added in element attribute as JSX
					 - No exact prop required
					 - Nested routes are relative - So need to add * at the end of such routes
					 - Passing params is same as in V5
				*/}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/comments" element={<Comments />} />
					<Route path="/comments/:id/*" element={<CommentDetails />} />
					<Route path="/about" element={<About />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</CommenstProvider>
    </div>
  );
}

export default App;
