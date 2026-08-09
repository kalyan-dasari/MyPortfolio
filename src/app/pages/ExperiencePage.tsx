import { motion } from 'motion/react';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

export function ExperiencePage() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Student Alumni',
      type: 'Full-time',
      duration: 'Jul 2026 - Present',
      location: 'Hyderabad, Telangana, India · On-site',
      active: true,
      description: [
        'Working on full stack web application development using Python, Flask, FastAPI, JavaScript, React.js, and MySQL, MongoDB',
        'Developing and integrating Fast APIs for real-world platform features and workflows',
        'Contributing to backend systems, database operations, authentication modules, and application logic',
        'Collaborating with team members using Git/GitHub and development practices',
        'Participating in feature development, debugging, testing, and deployment activities',
        'Working on projects including a Student Alumni platform, automation systems, and real-time application features',
        'Gaining hands-on industry experience in scalable web applications and software development workflows',
      ],
      skills: ['Python', 'FastAPI', 'React.js', 'JavaScript', 'Flask', 'MySQL', 'MongoDB', 'Git/GitHub'],
    },
    {
      role: 'Software Development Intern',
      company: 'Student Alumni',
      type: 'Internship',
      duration: 'May 2026 - Jul 2026',
      location: 'Hyderabad, Telangana, India · On-site',
      active: false,
      description: [
        'Supported full stack web application development across frontend and backend components',
        'Assisted in building and testing APIs, database operations, and application features',
        'Gained hands-on experience with version control, debugging, and deployment workflows',
      ],
      skills: ['Python', 'FastAPI', 'Web Development', 'Git/GitHub'],
    },
    {
      role: 'Student Placement Coordinator',
      company: 'Malla Reddy College of Engineering (MRCE)',
      type: 'On-campus',
      duration: 'May 2025 - May 2026',
      location: 'Hyderabad, Telangana, India',
      active: false,
      description: [
        'Coordinated placement activities and served as a bridge between students and recruiters',
        'Organized campus drives, shared opportunities, and supported students through the recruitment process',
      ],
      skills: ['Communication', 'Event Coordination', 'Leadership'],
    },
    {
      role: 'Intern (AI/ML)',
      company: 'Infosys Springboard',
      type: 'Internship',
      duration: 'Nov 2025 - Jan 2026',
      location: 'Remote',
      active: false,
      description: [
        'Worked on the Springboard Internship 6.0 focusing on AI/ML and software engineering',
        'Worked on case studies and ML pipelines using Python and data processing workflows',
        'Gained exposure to SDLC, unit testing, database management, and cloud fundamentals',
      ],
      skills: ['Python', 'Machine Learning', 'Streamlit', 'Data Processing', 'Cloud'],
    },
    {
      role: 'Web Developer',
      company: 'YAR TECH SERVICES',
      type: 'Internship',
      duration: 'Dec 2024 - Feb 2025',
      location: 'Remote',
      active: false,
      description: [
        'Built and maintained websites with a focus on front-end development',
        'Collaborated on delivering clean, responsive, and user-friendly web pages',
      ],
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
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            My professional journey and industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.role}-${exp.company}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative flex md:w-full ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-8 h-8 bg-white border-4 border-blue-600 rounded-full shadow-lg flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-gray-700 font-medium flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-blue-500" />
                          {exp.company}
                        </p>
                      </div>
                      {exp.type && (
                        <span
                          className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.active
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {exp.active ? 'Current' : exp.type}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                      <p className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {exp.duration}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {exp.location}
                      </p>
                    </div>

                    {exp.description.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item) => (
                          <li key={item} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                            <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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
