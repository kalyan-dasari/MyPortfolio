import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function OtherPage() {
  const externalProjects = [
    {
      title: 'OpenReaders',
      tagline: 'A platform for open reading and story sharing',
      description:
        'OpenReaders is a community-driven platform where readers and writers come together to share stories, discuss literature, and discover new content.',
      image: 'https://images.unsplash.com/photo-1758876203761-623fcf794de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwcGxhdGZvcm18ZW58MXx8fHwxNzY4MTE0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      url: 'https://example.com',
      featured: true,
    },
    {
      title: 'DevTools Hub',
      tagline: 'Essential tools for modern developers',
      description:
        'A curated collection of developer tools and resources to boost productivity and streamline your development workflow.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      url: 'https://example.com',
      featured: false,
    },
    {
      title: 'CodeSnippets Library',
      tagline: 'Reusable code snippets for rapid development',
      description:
        'A comprehensive library of code snippets across multiple programming languages and frameworks to accelerate your projects.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      url: 'https://example.com',
      featured: false,
    },
    {
      title: 'Design Inspiration',
      tagline: 'Curated collection of web design inspiration',
      description:
        'Browse through a handpicked collection of stunning web designs, UI patterns, and creative layouts to inspire your next project.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      url: 'https://example.com',
      featured: false,
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Other Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            External projects and collaborative works
          </p>
        </div>

        {/* Featured Project */}
        {externalProjects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 mb-12"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 italic">{project.tagline}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="font-semibold">Visit Website</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {externalProjects
            .filter((p) => !p.featured)
            .map((project, index) => (
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 italic">{project.tagline}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Button */}
                  <div className="pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity w-full justify-center"
                    >
                      <span className="text-sm font-medium">Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
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
