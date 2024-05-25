
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommunitySuggestionsPage from './pages/CommunitySuggestionsPage';

const App = () => {
  return (
    <Router basename="/nu-disclosure-website">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community-suggestions" element={<CommunitySuggestionsPage />}/>
      </Routes>
    </Router>
  )
}

export default App
