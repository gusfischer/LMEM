import React from 'react';
import { type Device } from '../data/devices';
import { Disc, Radio, Zap, ExternalLink, Instagram } from 'lucide-react';

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const getEncodedPrompt = () => encodeURIComponent(device.prompt);

  return (
    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.02]">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-100 rounded-full">
          <Disc className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {device.name}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-800">AI Image Prompt</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {device.prompt}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-800">Influenced By</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {device.influences.map((influence) => (
                <span
                  key={influence}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {influence}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Try this prompt on:</h2>
            <div className="flex gap-3">
              <a
                href={`https://www.bing.com/images/create?q=${getEncodedPrompt()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#00a4ef] text-white rounded-lg hover:bg-[#0078d4] transition-colors"
              >
                Bing Image Creator
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`https://ideogram.ai/t/search?q=${getEncodedPrompt()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#ff4545] text-white rounded-lg hover:bg-[#e03c3c] transition-colors"
              >
                Ideogram
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`https://leonardo.ai`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#000000] text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Leonardo.AI
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center p-8 bg-black rounded-xl">
            <img
              src="/labmem-logo.png"
              alt="LABMEM Logo"
              className="w-48 h-auto"
            />
            <div className="flex items-center gap-2 mt-4 text-white">
              <Instagram className="w-4 h-4" />
              <p className="text-sm">This is a @lab.mem project, follow us on instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}