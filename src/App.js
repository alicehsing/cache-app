// Not a lot to say here :) clean code with a well-thought-out file structure that would make it easy to extend and maintain this project. I would have liked to see a bit more done with the Markers in your app, but it's super cool to see you abstracting all your app state into a single CacheContext. I usually judge codebases with the question: what would it feel like if I inherited this project to maintain? And to me, the way you have it set up would be a delight. Nice work! 

import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
