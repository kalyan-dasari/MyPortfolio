import { motion } from 'motion/react';
import { Building2, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export function ExperiencePage() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Student Alumni',
      type: 'Full-time',
      duration: 'Jul 2026 - Present',
      location: 'Hyderabad, Telangana',
      active: true,
      summary:
        'Full stack web application development using Python, Flask, FastAPI, React.js, MySQL, and MongoDB, building Fast APIs and real-world platform features.',
      skills: ['Python', 'FastAPI', 'React.js', 'JavaScript', 'Flask', 'MySQL', 'MongoDB', 'Git/GitHub'],
    },
    {
      role: 'Software Development Intern',
      company: 'Student Alumni',
      type: 'Internship',
      duration: 'May 2026 - Jul 2026',
      location: 'Hyderabad, Telangana',
      active: false,
      summary:
        'Supported full stack development across frontend and backend, assisted with APIs, database operations, version control, and testing.',
      skills: ['Python', 'FastAPI', 'Web Development', 'Git/GitHub'],
    },
    {
      role: 'Student Placement Coordinator',
      company: 'Malla Reddy College of Engineering (MRCE)',
      type: 'On-campus',
      duration: 'May 2025 - May 2026',
      location: 'Hyderabad, Telangana',
      active: false,
      summary:
        'Coordinated placement activities, organized campus drives, and supported students through the recruitment process.',
      skills: ['Communication', 'Event Coordination', 'Leadership'],
    },
    {
      role: 'Intern (AI/ML)',
      company: 'Infosys Springboard',
      type: 'Internship',
      duration: 'Nov 2025 - Jan 2026',
      location: 'Remote',
      active: false,
      summary:
        'Worked on AI/ML pipelines, case studies, and data processing with Python while gaining exposure to SDLC, testing, and cloud fundamentals.',
      skills: ['Python', 'Machine Learning', 'Streamlit', 'Data Processing', 'Cloud'],
    },
    {
      role: 'Web Developer',
      company: 'YAR TECH SERVICES',
      type: 'Internship',
      duration: 'Dec 2024 - Feb 2025',
      location: 'Remote',
      active: false,
      summary:
        'Built and maintained responsive, user-friendly websites with a focus on front-end development.',
      skills: ['Website Building', 'Front-End Development', 'HTML/CSS'],
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            My professional journey and industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
                exp.active ? 'ring-2 ring-blue-500' : 'hover:-translate-y-1'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {exp.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{exp.role}</h3>
                    <p className="text-sm text-gray-600 font-medium flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-500" />
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span
                  className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    exp.active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {exp.active ? 'Current' : exp.type}
                </span>
              </div>

              {/* Meta */}
              <div className="mt-4 space-y-1.5 text-sm text-gray-500">
                <p className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {exp.duration}
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  {exp.location}
                </p>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                {exp.summary}
              </p>

              {/* Skills */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                {exp.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {exp.skills.length > 5 && (
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-400 text-xs rounded-full font-medium">
                    +{exp.skills.length - 5}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg flex flex-col justify-between text-white"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Career Highlights</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '4', label: 'Companies' },
                  { value: '3', label: 'Internships' },
                  { value: '5', label: 'Roles Held' },
                  { value: '2+', label: 'Years Active' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/15 backdrop-blur rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-white/80 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-white/90 flex items-center gap-1 mt-4">
              Full-stack developer with hands-on industry experience
              <ArrowUpRight className="w-4 h-4" />
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
