import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [animationTime, setAnimationTime] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = document.querySelectorAll('[data-section]');
      const newVisible = new Set<string>();

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.add(section.getAttribute('data-section') || '');
        }
      });

      setVisibleSections(newVisible);
    };

    const handleAnimation = () => {
      setAnimationTime(Date.now());
    };

    window.addEventListener('scroll', handleScroll);
    const animationInterval = setInterval(handleAnimation, 16); // 60fps
    handleScroll();
    handleAnimation();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  const schedule = [
    { time: '08h30 – 09h00', activity: 'Recepção e credenciamento', period: 'morning' },
    { time: '09h00 – 09h15', activity: 'Saudação e oração inicial', period: 'morning' },
    { time: '09h15 – 09h45', activity: 'Louvor', period: 'morning' },
    { time: '09h45 – 11h00', activity: 'Palestra 1', period: 'morning' },
    { time: '11h00 – 11h15', activity: 'Avisos e transição', period: 'morning' },
    { time: '11h30 – 13h30', activity: 'Almoço no salão', period: 'lunch' },
    { time: '13h30 – 14h00', activity: 'Louvor', period: 'afternoon' },
    { time: '14h00 – 16h00', activity: 'Mesa redonda e perguntas', period: 'afternoon' },
    { time: '16h00 – 16h30', activity: 'Café no salão', period: 'break' },
    { time: '16h30 – 17h00', activity: 'Louvor', period: 'evening' },
    { time: '17h00 – 18h15', activity: 'Palestra final', period: 'evening' },
    { time: '18h15 – 18h30', activity: 'Encerramento e agradecimentos', period: 'evening' }
  ];

  const faqs = [
    {
      question: "Preciso me inscrever com antecedência?",
      answer: "Sim! As inscrições garantem seu lugar e nos ajudam a organizar melhor o evento. As vagas são limitadas."
    },
    {
      question: "O almoço e café estão inclusos?",
      answer: "Sim! O valor da inscrição inclui almoço completo no salão da igreja e coffee break à tarde."
    },
    {
      question: "Qual o perfil dos palestrantes?",
      answer: "Contamos com pastores e teólogos comprometidos com o ensino bíblico sólido e relevante para os dias atuais."
    },
    {
      question: "Posso participar apenas de parte do evento?",
      answer: "Recomendamos a participação integral para melhor aproveitamento, mas você é bem-vindo em qualquer momento."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-cyan-950 to-blue-950">
      {/* Animated Sky Background with 3D Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* 3D Floating Elements - Placeholder images */}
        {/* Cloud 1 - Top Left */}
        <img
          src="/images/backgrounds/bg (1).webp"
          alt="Nuvem decorativa"
          className="absolute md:top-32 top-0 md:left-16 left-0 md:w-80 w-40 object-contain opacity-60 drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.15 + Math.sin(animationTime * 0.001) * 8}px) translateX(${Math.sin(scrollY * 0.001) * 30 + Math.cos(animationTime * 0.0008) * 5}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.1})`,
            filter: 'brightness(1.2) contrast(0.9)',
            mixBlendMode: 'screen'
          }}
        />

        {/* Sun - Top Center */}
        <div
          className="absolute top-20 left-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-slate-200 to-gray-400 opacity-70 blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 + Math.cos(scrollY * 0.001) * 0.15})`,
            boxShadow: '0 0 80px 40px rgba(199, 199, 199, 0.4)'
          }}
        />

        {/* Cloud 2 - Top Right */}
        <img
          src="/images/backgrounds/bg (2).webp"
          alt=""
          className="absolute top-40 right-0 md:right-24  md:w-80 w-40 object-contain opacity-70 drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.2 + Math.sin(animationTime * 0.0012) * -6}px) translateX(${Math.cos(scrollY * 0.0012) * -25 + Math.cos(animationTime * 0.0009) * -4}px) scale(${1 + Math.cos(scrollY * 0.0015) * 0.08})`,
            filter: 'brightness(1.3) contrast(0.85)',
            mixBlendMode: 'screen'
          }}
        />

        {/* Decorative Element - Middle Left */}
        

        {/* Cloud 3 - Middle */}
        <img
          src="/images/backgrounds/bg (3).webp"
          alt=""
          className="absolute top-[600px] right-0 w-80 object-contain opacity-60 drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.25 + Math.sin(animationTime * 0.0008) * 10}px) translateX(${Math.sin(scrollY * 0.001) * 35 + Math.cos(animationTime * 0.0011) * 6}px)`,
            filter: 'brightness(1.25)',
            mixBlendMode: 'screen'
          }}
        />

        {/* Decorative Element - Lower Right */}
        <div
          className="absolute top-[1000px] right-20 w-52 h-52 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-400/20 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.18}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.12})`
          }}
        />

        {/* Cloud 4 - Lower Left */}
        <img
          src="/images/backgrounds/bg (4).webp"
          alt=""
          className="absolute top-[1200px] left-1/4 w-48 h-32 object-contain opacity-65 drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.22 + Math.sin(animationTime * 0.0013) * -7}px) translateX(${Math.cos(scrollY * 0.0013) * 28 + Math.cos(animationTime * 0.001) * -5}px)`,
            filter: 'brightness(1.2)',
            mixBlendMode: 'screen'
          }}
        />
        <img
          src="/images/backgrounds/bg (5).webp"
          alt=""
          className="absolute bottom-0 left-0 w-1/2 object-contain opacity-65 drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.22 + Math.sin(animationTime * 0.0009) * 9}px) translateX(${Math.cos(scrollY * 0.0013) * 28 + Math.sin(animationTime * 0.0012) * 4}px)`,
            filter: 'brightness(1.2)',
            mixBlendMode: 'screen'
          }}
        />
        <img
          src="/images/backgrounds/bg (6).webp"
          alt=""
          className="absolute bottom-0 right-0 w-80 object-contain opacity-65 drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 0.22 + Math.sin(animationTime * 0.0014) * -5}px) translateX(${Math.cos(scrollY * 0.0013) * 28 + Math.cos(animationTime * 0.0007) * -6}px)`,
            filter: 'brightness(1.2)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          data-section="hero"
          className={`min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-full">
            <div className="mb-8 flex justify-center">
              <img 
                src="/images/backgrounds/ENTREDEUSES.png" 
                alt="ENTRE DEUSES - Logo da Conferência" 
                className="max-w-full h-auto drop-shadow-lg max-h-[600px]"
               
              />
            </div>

            {/* <div className="text-3xl md:text-5xl text-white/95 mb-10 font-light tracking-wide drop-shadow">
              Conferência 2025
            </div> */}

            <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto font-light leading-relaxed drop-shadow">
              Um encontro realizado pela Igreja Presbiteriana Independente Central de Areado,
              voltado para quem deseja crescer em fé, pensamento e vida cristã
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center flex-wrap">
              <div className="flex items-center gap-3 text-white/90 text-lg backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full">
                <Calendar className="text-white" size={24} />
                <span className="font-medium">20 de novembro de 2025</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 text-lg backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full">
                <MapPin className="text-white" size={24} />
                <span className="font-medium">IPI Areado</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 text-lg backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full">
                <Clock className="text-white" size={24} />
                <span className="font-medium">08h30 às 18h30</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 animate-bounce">
            <div className="text-white/70 text-sm mb-1">Role para descobrir</div>
            <div className="text-white text-2xl">↓</div>
          </div>
        </section>

        {/* About Section */}
        <section
          data-section="about"
          className={`min-h-screen flex items-center justify-center px-6 py-32 transition-all duration-1000 delay-200 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-5xl text-center">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 drop-shadow-lg">
              UM ESPAÇO DE ENCONTRO
            </h2>

            <div className="space-y-8 text-xl md:text-2xl text-white/95 leading-relaxed font-light">
              <p className="drop-shadow">
                Um espaço de reflexão profunda, adoração sincera e comunhão verdadeira -
                onde mente e coração se encontram diante da Palavra.
              </p>

              <p className="drop-shadow">
                Com uma programação que integra momentos de louvor, palestras e mesa redonda,
                buscamos promover diálogo bíblico, teologia sólida e prática de vida piedosa.
              </p>

              <p className="text-2xl md:text-3xl text-white font-normal mt-12 drop-shadow-lg">
                Mais do que um evento, é um convite para viver um cristianismo consciente, relevante e centrado em Cristo.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section
          data-section="schedule"
          className={`min-h-screen flex items-center justify-center px-6 py-32 transition-all duration-1000 delay-300 ${
            visibleSections.has('schedule') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl md:text-8xl font-black text-center text-white mb-20 drop-shadow-lg">
              CRONOGRAMA
            </h2>

            <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              <div className="divide-y divide-white/10">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-8 py-5 hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="text-white/90 font-medium text-lg min-w-[140px]">
                      {item.time}
                    </div>
                    <div className="flex-1 text-right">
                      <span className="text-white text-lg font-light">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section
          data-section="expect"
          className={`min-h-screen flex items-center justify-center px-6 py-32 transition-all duration-1000 delay-400 ${
            visibleSections.has('expect') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl w-full">
            <h2 className="text-6xl md:text-8xl font-black text-center text-white mb-20 drop-shadow-lg">
              O QUE ESPERAR
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-7xl font-black text-white/20 mb-4">1</div>
                <h3 className="text-2xl font-bold text-white mb-4">Louvor Autêntico</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Momentos de adoração sincera que preparam o coração para receber a Palavra com disposição e reverência.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-7xl font-black text-white/20 mb-4">2</div>
                <h3 className="text-2xl font-bold text-white mb-4">Ensino Bíblico</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Palestras profundas e relevantes que desafiam a mente e alimentam a alma com verdades transformadoras.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-7xl font-black text-white/20 mb-4">3</div>
                <h3 className="text-2xl font-bold text-white mb-4">Diálogo Aberto</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Mesa redonda interativa onde suas dúvidas e questões encontram espaço para reflexão coletiva e crescimento.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-7xl font-black text-white/20 mb-4">4</div>
                <h3 className="text-2xl font-bold text-white mb-4">Comunhão Genuína</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Conexões verdadeiras com irmãos que compartilham da mesma jornada de fé e busca por santidade.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-7xl font-black text-white/20 mb-4">5</div>
                <h3 className="text-2xl font-bold text-white mb-4">Refeições Inclusas</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Almoço completo e coffee break inclusos no valor, para que você aproveite sem preocupações.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="text-7xl font-black text-white/20 mb-4">6</div>
                <h3 className="text-2xl font-bold text-white mb-4">Foco em Cristo</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Tudo conduzido para exaltar Jesus e nos aproximar mais do coração do Pai através do Filho.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          data-section="faq"
          className={`min-h-screen flex items-center justify-center px-6 py-32 transition-all duration-1000 delay-500 ${
            visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl md:text-8xl font-black text-center text-white mb-20 drop-shadow-lg">
              PERGUNTAS FREQUENTES
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/80 leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          data-section="cta"
          className={`min-h-screen flex items-center justify-center px-6 py-32 transition-all duration-1000 delay-600 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl w-full text-center">
            <h2 className="text-6xl md:text-9xl font-black text-white mb-12 leading-tight drop-shadow-lg">
              FAÇA SUA<br/>INSCRIÇÃO
            </h2>

            <p className="text-2xl md:text-3xl text-white/90 mb-16 leading-relaxed font-light drop-shadow">
              Reserve seu lugar neste encontro transformador.<br/>
              Vagas limitadas para garantir qualidade e proximidade.
            </p>

            <div className="backdrop-blur-md bg-white/15 rounded-3xl p-10 border border-white/30 mb-16 inline-block shadow-2xl">
              <div className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow">A partir de R$ 50,00</div>
              <div className="text-xl text-white/80 font-light">Inclui almoço e café</div>
            </div>

            <button
              onClick={() => window.open('https://www.ingressofacil.online/eventos/mps-conference-entre-deuses', '_blank')}
              className="group relative inline-flex items-center gap-3 bg-white hover:bg-white/90 text-blue-600 font-bold text-2xl px-16 py-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span>QUERO PARTICIPAR</span>
            </button>

            <div className="mt-24 pt-12 border-t border-white/20">
              <p className="text-white/80 mb-4 text-lg font-light">Dúvidas ou mais informações?</p>
              <p className="text-white text-xl font-medium mb-2">Igreja Presbiteriana Independente Central de Areado</p>
              {/* <p className="text-white/90 text-lg font-light">contato@ipiareado.com.br</p> */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-10 text-center text-white/60 border-t border-white/10 font-light">
          <p>© 2025 Conferência Entre Deus - IPI Central de Areado</p>
        </footer>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
