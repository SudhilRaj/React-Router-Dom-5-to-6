// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Comments from './components/Comments';
import CommentDetails from './components/CommentDetails';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CommenstProvider } from './context/CommentsContext';

function App() {
  return (
    <div className="App">
		<CommenstProvider>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/products">
						<Products />
					</Route>
					<Route path="/products/:id">
						<ProductDetails />
					</Route>
					<Route exact path="/comments">
						<Comments />
					</Route>
					<Route path="/comments/:id">
						<CommentDetails />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
				{/* <Footer /> */}
			</BrowserRouter>
		</CommenstProvider>
    </div>
  );
}

export default App;
