import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatbotIntegration() {
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(false);
  const [integrationType, setIntegrationType] = useState('');

  const dummyCode = `<script src="https://beyondchats.com/widget.js"></script>
<script>
  BeyondChats.init({
    apiKey: 'your-api-key',
    botId: 'your-bot-id'
  });
</script>`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Chatbot Integration
        </h2>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <button
              onClick={() => window.open('/test-preview', '_blank')}
              className="w-full mb-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Test Chatbot
            </button>

            <button
              onClick={() => setShowInstructions(true)}
              className="w-full mb-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Integrate on your website
            </button>

            {showInstructions && (
              <div className="mt-6">
                <div className="space-x-4 mb-4">
                  <button
                    onClick={() => setIntegrationType('code')}
                    className={`py-2 px-4 rounded-md ${
                      integrationType === 'code' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    Copy Code
                  </button>
                  <button
                    onClick={() => setIntegrationType('email')}
                    className={`py-2 px-4 rounded-md ${
                      integrationType === 'email' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    Email Instructions
                  </button>
                </div>

                {integrationType === 'code' && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600 mb-2">Add this code to your website's &lt;head&gt; tag:</p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                      {dummyCode}
                    </pre>
                    <button
                      onClick={() => navigator.clipboard.writeText(dummyCode)}
                      className="mt-2 py-1 px-3 text-sm border rounded-md hover:bg-gray-100"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                )}

                {integrationType === 'email' && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600">
                      Instructions have been sent to your developer's email address.
                    </p>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => navigate('/test-integration')}
              className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Test Integration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotIntegration