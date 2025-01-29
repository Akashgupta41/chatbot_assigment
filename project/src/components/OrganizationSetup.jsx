import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyWebpages = [
  { url: '/home', status: 'scraped' },
  { url: '/about', status: 'scraped' },
  { url: '/products', status: 'pending' },
  { url: '/contact', status: 'detected' }
];

function OrganizationSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    description: ''
  });
  const [showScrapingStatus, setShowScrapingStatus] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowScrapingStatus(true);
  };

  const handleContinue = () => {
    navigate('/integration');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Setup Your Organization
        </h2>

        {!showScrapingStatus ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website URL
              </label>
              <input
                type="url"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Description
              </label>
              <textarea
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Website Scraping Status</h3>
              <div className="space-y-4">
                {dummyWebpages.map((page, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPage(page)}
                    className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <span>{page.url}</span>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      page.status === 'scraped' ? 'bg-green-100 text-green-800' :
                      page.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {page.status}
                    </span>
                  </div>
                ))}
              </div>

              {selectedPage && (
                <div className="mt-6 p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Data chunks from {selectedPage.url}</h4>
                  <p className="text-gray-600">Sample scraped content would appear here...</p>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={handleContinue}
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue to Integration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrganizationSetup