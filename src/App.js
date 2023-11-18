import './App.css';
import Difference from './components/Difference';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import QuestionBank from './components/QuestionBank';
import TestSeries from './components/TestSeries';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Difference />
      <QuestionBank />
      <TestSeries />
      <Footer />
    </div>
  );
}

export default App;
