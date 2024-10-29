import React, { useEffect, useState } from 'react';
import { DeviceCard } from './components/DeviceCard';
import { devices } from './data/devices';
import { RefreshCw } from 'lucide-react';

function App() {
  const [currentDevice, setCurrentDevice] = useState(devices[0]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getRandomDevice = () => {
    const randomIndex = Math.floor(Math.random() * devices.length);
    return devices[randomIndex];
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentDevice(getRandomDevice());
      setIsRefreshing(false);
    }, 500);
  };

  useEffect(() => {
    setCurrentDevice(getRandomDevice());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-purple-600"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            Generate New Device
          </button>
        </div>
        
        <DeviceCard device={currentDevice} />
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          Retro-Futuristic Media Device Generator © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default App;