import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';
import aboutImage from '@/assets/look.jpeg'; 

export function AboutPage() {
  const sections = [
    {
      icon: Target,
      title: 'Who I Am',
      content:
        "I'm a final-year student, a passionate developer, and a lifelong learner who believes in the power of technology to transform lives. My journey in tech has been driven by curiosity and a desire to create meaningful solutions.  I love exploring different domains—tech and non-tech—because it allows me to discover new interests and understand the world from multiple angles.",
    },
    {
      icon: Heart,
      title: 'My Interests',
      content:
        'Beyond coding, I enjoy experimenting with new technologies and creative writing, especially novels. I’m a fan of sci-fi movies, and I also love photography—capturing moments that tell stories and experimenting with minimal photo and video edits.',
    },
    {
      icon: Lightbulb,
      title: 'My Goals',
      content:
        'My goal is to continuously grow as a developer while using technology to make a positive impact. I want to work on projects that solve real-world problems and gain practical experience within a strong company ecosystem and work culture.  In the long term, I aspire to build a business or startup that creates opportunities for others, especially talented individuals from rural backgrounds.',
    },
    {
      icon: Code,
      title: 'Tech & Hobbies',
      content:
        "I'm proficient in modern web development—including frontend, backend, databases, and Python along with a few frameworks. When I'm not coding, you'll find me exploring new tech, watching movies, or diving into photography and videography.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <ImageWithFallback
              src={aboutImage}
              alt="Profile"
              className="relative w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-white"
            />
          </motion.div>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
