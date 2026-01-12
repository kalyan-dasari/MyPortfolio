import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type ProfileMode = 'professional' | 'personal';

export function HomePage() {
  const [mode, setMode] = useState<ProfileMode>('professional');

  const profiles = {
    professional: {
      name: 'Alex Johnson',
      role: 'Full-Stack Developer',
      bio: 'A final-year student passionate about building digital products and solving problems. Experienced in modern web technologies and dedicated to creating impactful solutions.',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxOTQ1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    personal: {
      name: 'Alex Johnson',
      role: 'Explorer',
      bio: 'Curious mind who loves trying new domains, capturing moments, and learning continuously. Always seeking new experiences and perspectives to grow.',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgxOTQ1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  };

  const currentProfile = profiles[mode];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16">
          {/* Professional: Image Left, Text Right */}
          {/* Personal: Text Left, Image Right */}
          {mode === 'professional' ? (
            <>
              {/* Image */}
              <motion.div
                key={`${mode}-image`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>
                  <ImageWithFallback
                    src={currentProfile.image}
                    alt={currentProfile.name}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white"
                  />
                </div>
              </motion.div>

              {/* Text Block */}
              <motion.div
                key={`${mode}-content`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {currentProfile.name}
                  </h1>
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <p className="text-2xl sm:text-3xl text-gray-700 font-medium">
                      {currentProfile.role}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProfile.bio}
                  </p>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {/* Text Block */}
              <motion.div
                key={`${mode}-content`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {currentProfile.name}
                  </h1>
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <p className="text-2xl sm:text-3xl text-gray-700 font-medium">
                      {currentProfile.role}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentProfile.bio}
                  </p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                key={`${mode}-image`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>
                  <ImageWithFallback
                    src={currentProfile.image}
                    alt={currentProfile.name}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Toggle Section */}
        <div className="bg-gray-50 px-8 py-8 flex justify-center border-t border-gray-100">
          <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-lg ring-1 ring-gray-200">
            <button
              onClick={() => setMode('personal')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                mode === 'personal'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setMode('professional')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                mode === 'professional'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Professional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}