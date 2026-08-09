import { motion } from 'motion/react';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function ExperiencePage() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Student Alumni',
      type: 'Full-time',
      duration: 'Jul 2026 - Present',
      location: 'Hyderabad, Telangana · On-site',
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
      location: 'Hyderabad, Telangana · On-site',
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
      location: 'Hyderabad, Telangana',
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
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            My professional journey and industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            {[
              { label: 'Companies', value: '4' },
              { label: 'Internships', value: '3' },
              { label: 'Roles Held', value: '5' },
              { label: 'Years Active', value: '2+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + 0.05 * index }}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Accordion type="single" collapsible defaultValue="Software Engineer">
              {experiences.map((exp) => (
                <AccordionItem key={`${exp.role}-${exp.company}`} value={exp.role} className="border-gray-100 px-4 sm:px-6">
                  <AccordionTrigger className="hover:no-underline py-5 [&>svg]:text-gray-400">
                    <div className="flex-1 space-y-2 text-left pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base sm:text-lg font-bold text-gray-900">{exp.role}</span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            exp.active
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {exp.active ? 'Current' : exp.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 font-medium flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 4 && (
                          <span className="px-2.5 py-0.5 bg-gray-100 text-gray-400 text-xs rounded-full font-medium">
                            +{exp.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-xl bg-gray-50 p-4 sm:p-5 space-y-3">
                      <div className="flex items-center gap-2 text-gray-900 font-semibold">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        Key Responsibilities
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item) => (
                          <li key={item} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                            <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
