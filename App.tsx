
import React from 'react';

const App: React.FC = () => {
  // The URL of the original, full-size image provided by the user.
  const imageUrl = 'https://storage.googleapis.com/pr-prd-shiny-app-prod-10/user-img/c1cfc830-4e4c-42b7-8eb1-f852a4886b7c.jpg';

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl border border-gray-200">
        <header className="bg-gray-50 p-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Master of Computer Application Degree
          </h1>
        </header>
        <div className="p-6">
          <div className="w-full h-auto rounded-lg overflow-hidden border-2 border-gray-300 shadow-inner">
            <img
              src={imageUrl}
              alt="MCA Degree Certificate for JAVED ALAM"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <footer className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
          <p>Document Viewer</p>
        </footer>
      </div>
    </main>
  );
};

export default App;
