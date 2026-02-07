import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
// import { ExternalLink, Github } from 'lucide-react';
import Billreminder from '@/assets/Bill_reminder.png'; 
import College_portal from '@/assets/College_portal.png'; 
import ExpiCal from '@/assets/ExpiCal.png'; 
import Leave_Management from '@/assets/Leave_management.png'; 
import Spaceship from '@/assets/Spaceship.png'; // 
import social_media_card from '@/assets/social_media_card.png'; 
import URL_checker from '@/assets/URL_checker.png'; 
import Video_to_text from '@/assets/Video_to_text.png'; 

export function ProjectsPage() {
  const projects = [
    {
      title: 'Bill Reminder',
      description:
        'A local-first personal finance tool for tracking bill payments and reminders. Built with Flask and SQLite, featuring a clean dashboard UI.',
      image: Billreminder,
      tags: ['Flask', 'SQLite', 'Bootstrap'],
      // github: 'https://github.com/kalyan-dasari/My-Bill-Reminder',
      // demo: 'https://my-bill-reminder.onrender.com/',
    },
    {
      title: 'College Event Portal',
      description:
        'A centralized portal for managing college events and registrations. Students can view events and register; data can integrate with Sheets or databases.',
      image: College_portal,
      tags: ['Frontend', 'Event Management'],
      // github: 'https://github.com/kalyan-dasari/college-portal',
      // demo: 'https://kalyan-dasari.github.io/college-portal/homepage.html',
    },
    {
      title: 'Expenditure Calculator (ExpiCal)',
      description:
        'Tracks monthly expenses including offline spending, with graphs and averages. Helps users understand and manage their monthly budget.',
      image: ExpiCal,
      tags:  ['Flask', 'Charts', 'Finance'],
      // github: 'https://github.com/kalyan-dasari/Expenditure-Calculator',
      // demo: 'https://kalyan-dasari.github.io/Expenditure-Calculator/',
    },
    {
      title: 'Leave Management System',
      description:
        'A student leave submission system with email notifications and approval workflow for incharges. Supports online leave tracking.',
      image: Leave_Management,
      tags: ['Web App', 'Email Alerts', 'Frontend'],
      // github: 'https://github.com/kalyan-dasari/leave-management',
      // demo: 'https://leave-management-kclb.onrender.com/',
    },
    {
      title: 'Social Media Card',
      description:
        'A simple UI component displaying user profile, followers, and following stats. Built as a frontend UI experiment.',
      image: social_media_card,
      tags: ['Frontend', 'HTML/CSS'],
      // github: 'https://github.com/kalyan-dasari/Social-media-card',
      // demo: 'https://kalyan-dasari.github.io/Social-media-card/',
    },
    {
      title: 'Spaceship Shooter Game',
      description:
        'A 2D browser game where players control a spaceship, shoot asteroids, and navigate using keyboard controls.',
      image: Spaceship,
      tags: ['JavaScript', 'Game Dev', 'HTML/CSS'],
      // github: 'https://github.com/kalyan-dasari/spaceship-game',
      // demo: 'https://kalyan-dasari.github.io/spaceship-game/',
    },
    
    {
      title: 'Suspicious URL Checker',
      description:
        'Checks if a given URL is fake or suspicious by analyzing domains and patterns. Simple and fast client-side detection.',
      image: URL_checker,
      tags: ['JavaScript', 'Security', 'HTML/CSS'],
      // github: 'https://github.com/kalyan-dasari/URL-Checker',
      // demo: 'https://kalyan-dasari.github.io/URL-Checker/',
    },
    {
      title: 'Video to Text (Telugu)',
      description:
        'Converts video speech to Telugu text with a dual-window interface. Useful for extracting dialogue or content from videos.',
      image: Video_to_text,
      tags: ['Speech-to-Text', 'JavaScript', 'Frontend'],
      // github: 'https://github.com/kalyan-dasari/video-To-text',
      // demo: 'https://kalyan-dasari.github.io/video-To-text/',
    },
    {
      title: 'Chat Application',
      description:
        'Real-time messaging app with group chats, file sharing, and end-to-end encryption for secure communication.',
      image: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4MTc1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Socket.io', 'React', 'Node.js'],
      // github: 'https://github.com',
      // demo: 'https://example.com',
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
                {/* <div className="flex gap-3 pt-2">
                  <a
                    // href={project.github}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    // href={project.demo}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View</span>
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
