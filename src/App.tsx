import { useState } from 'react';
import { Menu, X, Github, Cloud, Code, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Invoice Search",
    description: "国税庁のインボイスAPIを使用したインボイス検索",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1366",
    url: "https://github.com/poxcondev/Invoice-Search"
  },
  {
    title: "Slack Post Manager",
    description: "Slackの投稿取得およびOCR表示用クライアント",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2426&h=1366",
    url: "https://github.com/poxcondev/Slack-Post-Manager"
  },
  {
    title: "AOAI Chatbot",
    description: "Azure OpenAIのチャットボット",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2426&h=1366",
    url: "https://github.com/poxcondev/AOAI-Chatbot"
  },
  {
    title: "MiPre",
    description: "Minecraft環境一括セットアップツール",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2426&h=1366",
    url: "https://github.com/poxcondev/MiPre"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              POXCON
            </motion.h1>

            <div className="hidden md:flex space-x-8">
              {['HOME', 'About Me', 'Services', 'Project', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:text-blue-500 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                {['HOME', 'About Me', 'Services', 'Project', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block py-2 hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            POXCON
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Azure IT Consultant, Engineer
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about-me" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              FrontEnd（Typescript, HTML, CSS, React, Angular, Vueなど）からBackEnd（Python, FastAPIなど）まで幅広い技術で、
              ユーザーフレンドリーなアプリケーションを開発しています。
              <br /><br />
              また、Azureの各種サービス（OpenAI, Document Intelligence, SQL Server, Storage Account, Entra IDなど）を駆使し、
              環境構築やアーキテクチャ設計、AIやIoTを活用したコンサルティングも行っています。
              <br /><br />
              技術とビジネスの両面から価値を提供し、サポートすることを目指しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Cloud className="w-12 h-12" />, title: 'Azure Architecture', description: '最適なAzureアーキテクチャの設計と実装をサポートします。' },
              { icon: <Code className="w-12 h-12" />, title: 'FrontEnd, BackEnd Development', description: 'ReactやFast APIなどの最新技術を使用しFrontEndやBackEndの設計・実装を行っています。' },
              { icon: <Brain className="w-12 h-12" />, title: 'Cognitive Services', description: 'Azure OpenAIやDocument Intelligenceなどの Cognitive Serviceに関するコンサルティングを実施しています。' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(projects.length - 1, currentSlide + 1))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              disabled={currentSlide === projects.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Contact
            </h2>
            <a
              href="https://github.com/poxcondev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-6xl text-white hover:text-blue-500 transition-colors"
            >
              <Github />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 POXCON All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;