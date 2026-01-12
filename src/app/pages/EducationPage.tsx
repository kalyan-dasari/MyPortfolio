import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GraduationCap } from 'lucide-react';

export function EducationPage() {
  const educationData = [
    {
      institution: 'Malla Reddy College of Engineering',
      degree: 'B.Tech CSE (AIML)',
      duration: '2022 - 2026',
      cgpa: '8.5 CGPA',
      image: 'https://images.unsplash.com/photo-1724436781032-c1645c5783ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4MTQyNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      institution: 'Intermediate College',
      degree: 'Intermediate (MPC)',
      duration: '2020 - 2022',
      cgpa: '9.2 CGPA',
      image: 'https://images.unsplash.com/photo-1724436781032-c1645c5783ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4MTQyNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      institution: 'Secondary School',
      degree: 'High School',
      duration: '2019 - 2020',
      cgpa: '9.5 CGPA',
      image: 'https://images.unsplash.com/photo-1724436781032-c1645c5783ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4MTQyNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <GraduationCap className="w-16 h-16 text-blue-600" />
                  </div>
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
                    <h4 className="font-bold text-gray-900 mb-2">{edu.institution}</h4>
                    <p className="text-gray-700 mb-1">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
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
