import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import trinity from '@/assets/trinity.avif';
import mrce from '@/assets/mrcee.jpg';
import modelscool from '@/assets/modelschool.jpg';


export function EducationPage() {
  const educationData = [
    {
      institution: 'Malla Reddy College of Engineering',
      degree: 'B.Tech CSE (AIML)',
      duration: '2022 - 2026',
      cgpa: '8.1 CGPA',
      image: mrce,
    },
    {
      institution: 'Intermediate College',
      degree: 'Intermediate (MPC)',
      duration: '2020 - 2022',
      cgpa: '9.84 CGPA',
      image: trinity,
    },
    {
      institution: 'Secondary School',
      degree: 'High School',
      duration: '2019 - 2020',
      cgpa: '10 CGPA',
      image: modelscool,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Education</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">My academic journey and achievements</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageWithFallback
                    src={edu.image}
                    alt={edu.institution}
                    className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {edu.institution}
                </h3>
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 font-semibold">{edu.degree}</p>
                  <p className="text-gray-600">{edu.duration}</p>
                  <div className="pt-2">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization for larger screens */}
        <div className="hidden lg:block mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={`timeline-${edu.institution}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10"></div>
                  </div>
                  <div className="w-5/12 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <ImageWithFallback
                        src={edu.image}
                        alt={edu.institution}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{edu.institution}</h4>
                        <p className="text-gray-700 text-sm">{edu.degree}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs font-semibold">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
