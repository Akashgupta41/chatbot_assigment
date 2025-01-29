import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import OrganizationSetup from './components/OrganizationSetup';
import ChatbotIntegration from './components/ChatbotIntegration';
import TestIntegration from './components/TestIntegration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/organization" element={<OrganizationSetup />} />
          <Route path="/integration" element={<ChatbotIntegration />} />
          <Route path="/test-integration" element={<TestIntegration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;