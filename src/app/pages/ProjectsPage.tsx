import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product management, shopping cart, and secure checkout. Built with React and Node.js.',
      image: 'https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjgxMzEwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Manager App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and intuitive UI.',
      image: 'https://images.unsplash.com/photo-1651055693398-0d66969cf759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlciUyMGFwcHxlbnwxfHx8fDE3NjgyMTE4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['TypeScript', 'React', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blogging platform with markdown support, comment system, and user authentication. SEO optimized and fast.',
      image: 'https://images.unsplash.com/photo-1758876203761-623fcf794de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwcGxhdGZvcm18ZW58MXx8fHwxNzY4MTE0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather tracking dashboard with location-based forecasts, interactive maps, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'API Integration', 'Charts'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Generator',
      description:
        'An automated portfolio generator that creates beautiful portfolio websites from user data with customizable themes.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Templates', 'Export'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Chat Application',
      description:
        'Real-time messaging app with group chats, file sharing, and end-to-end encryption for secure communication.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Socket.io', 'React', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Explore my portfolio of creative and technical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
