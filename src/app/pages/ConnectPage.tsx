import { motion } from 'motion/react';
import { ArrowUpRight, Github, Globe, MapPin, MessageCircle, Youtube } from 'lucide-react';

const connectionOptions = [
  {
    title: 'GitHub',
    description: 'Explore my code, experiments, and open-source projects.',
    href: 'https://github.com/kalyan-dasari',
    icon: Github,
    label: 'Visit GitHub',
    className: 'from-gray-800 to-gray-950',
  },
  {
    title: 'YouTube',
    description: 'Follow along for web design inspiration and developer content.',
    href: 'https://www.youtube.com/@LifewithKalyan',
    icon: Youtube,
    label: 'Visit YouTube',
    className: 'from-red-500 to-rose-600',
  },
  {
    title: 'Portfolio',
    description: 'See what I am building and learn more about my work.',
    href: 'https://www.kalyandasari.in',
    icon: Globe,
    label: 'Visit website',
    className: 'from-blue-500 to-purple-600',
  },
];

export function ConnectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 mb-5">
            <MessageCircle className="w-4 h-4" />
            Let&apos;s connect
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Connect Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Have an idea, an opportunity, or just want to talk tech? Find me
            online and let&apos;s start a conversation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-12 shadow-2xl mb-10"
        >
          <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-blue-100 font-medium mb-2">Currently based in</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Hyderabad, India</h2>
              <p className="mt-3 text-white/80 max-w-xl">
                Open to meaningful collaborations, full-stack development opportunities,
                and conversations about building useful products.
              </p>
            </div>
            <MapPin className="w-16 h-16 text-white/80 shrink-0" aria-hidden="true" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {connectionOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.className} flex items-center justify-center text-white mb-5`}>
                <option.icon className="w-6 h-6" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-gray-900">{option.title}</h2>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed">{option.description}</p>
              <span className="inline-block mt-5 text-sm font-semibold text-blue-600 group-hover:text-purple-600 transition-colors">
                {option.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
