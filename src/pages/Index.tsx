import React from 'react';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import { TrendingUp, Users, MessageSquare, LayoutDashboard, FileText, FileCode, ShoppingCart, Globe, Instagram, Linkedin, Award, Briefcase, BarChart, ChartLine, ChartPie, Smartphone, Star, Pen, TrafficCone } from 'lucide-react';
const Index = () => {
  // FAQ data
  const faqItems = [{
    question: "Qual o preço?",
    answer: "Cada projeto é único e personalizado conforme suas necessidades específicas. O mais caro é perder clientes por falta de estratégia adequada. Entre em contato para uma avaliação personalizada."
  }, {
    question: "Quando terei resultado?",
    answer: "Vai depender do nosso trabalho conjunto. Garantimos método, execução e acompanhamento constante para maximizar os resultados no menor tempo possível, mas com foco em resultados sustentáveis."
  }, {
    question: "Qual o prazo mínimo de contrato?",
    answer: "6 meses é o tempo ideal para consolidar resultados consistentes. Estratégias de marketing eficientes exigem planejamento, implementação e otimização contínua para atingir seu potencial máximo."
  }, {
    question: "Atendem minha região?",
    answer: "Atuamos em todo Brasil, Portugal e EUA. Nossa metodologia funciona independente da localização, com atendimento remoto eficiente e personalizado para cada cliente."
  }];
  return <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section with Background Image */}
      <section className="min-h-screen flex items-center pt-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
          <img
  src="/lovable-uploads/5de1c721-df41-4869-9df0-e81198a2fc96.png"
  alt="Background"
  className="absolute top-0 left-0 w-full min-h-screen opacity-5 object-cover object-[top_18%]"
/>
                </div>
        <div className="container mx-auto py-20 relative z-10 px-[50px]">
          <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full mb-10 lg:mb-0 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold leading-snug mb-6">
  <span className="text-white">Seu negócio na direção certa! </span>
  <span className="text-primary">Estratégia.</span>
  <span className="text-secondary mx-2">Execução.</span>
  <span className="text-white">Resultado.</span>
            </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-xl">
                Somos a assessoria estratégica em marketing e vendas que já ajudou mais de 200 empresas no Brasil e no exterior.
              </p>
              <a href="https://wa.me/5511999907739?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita." target="_blank" rel="noopener noreferrer" className="btn-primary text-lg w-full sm:w-auto inline-block">
                Quero uma Consultoria Gratuita
              </a>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós - with smaller image */}
      <section id="sobre" className="section-padding bg-dark-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/40c43d07-6b95-46e3-b7bf-30e8430ccd8b.png" alt="Equipe de especialistas" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-primary">Método Flecha</span> - Nossa Abordagem Única
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Analisamos, Miramos, Lançamos e Acertamos em cheio o público-alvo. Nossa metodologia proprietária garante que cada campanha e estratégia seja direcionada com precisão para atingir os resultados que seu negócio precisa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Google Partner</h4>
                    <p className="text-sm text-gray-300">Certificados e especializados em Google Ads</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Meta Partner</h4>
                    <p className="text-sm text-gray-300">Parceiros oficiais para campanhas Meta Ads</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Décadas de Experiência</h4>
                    <p className="text-sm text-gray-300">Expertise acumulada em marketing digital</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Atuação Internacional</h4>
                    <p className="text-sm text-gray-300">Brasil, Portugal e EUA</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-lg font-medium">
                  <span className="text-secondary">Milhões</span> gerenciados em anúncios e 
                  <span className="text-secondary"> centenas</span> de empresas impactadas com resultados reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section-padding gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Soluções completas e estratégicas para impulsionar seu negócio
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={TrendingUp} title="Tráfego Pago" description="Campanhas estratégicas no Google, Meta, TikTok e LinkedIn Ads para maximizar seu ROI." />
            <ServiceCard icon={MessageSquare} title="Gestão de Redes Sociais" description="Criação de conteúdo, interação com seguidores e estratégias para aumentar engajamento." />
            <ServiceCard icon={LayoutDashboard} title="Landing Pages" description="Desenvolvimento de páginas de conversão otimizadas para seus objetivos de negócio." />
            <ServiceCard icon={ShoppingCart} title="Criação de eCommerce" description="Lojas virtuais profissionais com parceria Tray e NuvemShop." />
            <ServiceCard icon={Pen} title="Branding" description="Desenvolvimento de logotipo e identidade visual completa para sua marca." />
            <ServiceCard icon={Users} title="Treinamentos e Consultorias" description="Capacitação para equipes de vendas e marketing com foco em resultados." />
            <ServiceCard icon={Smartphone} title="CRM com WhatsApp + IA" description="Sistema próprio para gestão de relacionamento com clientes integrado ao WhatsApp." />
            <ServiceCard icon={ChartPie} title="Automações e Funis" description="Processos comerciais automatizados para aumentar conversões e vendas." />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="section-padding bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios para seu Negócio</h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Por que escolher nossa assessoria estratégica
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-light p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <Star className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Estratégia e Execução Personalizada</h3>
              <p className="text-gray-300">
                Desenvolvemos planos sob medida para seu negócio e executamos cada ação com precisão, respeitando suas metas e orçamento.
              </p>
            </div>

            <div className="bg-dark-light p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <Award className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tranquilidade e Confiança</h3>
              <p className="text-gray-300">
                Conte com especialistas experientes que conhecem profundamente o mercado e as ferramentas necessárias para destacar sua marca.
              </p>
            </div>

            <div className="bg-dark-light p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <Briefcase className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Assessoria Completa e Contínua</h3>
              <p className="text-gray-300">
                Combinamos marketing e vendas em uma abordagem integrada, acompanhando cada etapa do funil com estratégias eficientes.
              </p>
            </div>

            <div className="bg-dark-light p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <ChartLine className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Resultados Reais</h3>
              <p className="text-gray-300">
                Trabalhamos com métricas claras e relatórios transparentes para que você acompanhe o progresso e o retorno sobre seu investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="section-padding bg-dark-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Histórias de sucesso que comprovam nossa excelência
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard name="Viviane Cardoso" testimonial="Transformaram nosso marketing digital! Estamos crescendo mês a mês com estratégias assertivas e suporte contínuo." />
            <TestimonialCard name="Guilherme Almeida" testimonial="Equipe dedicada e soluções eficazes. Fizeram a diferença para nosso negócio com abordagens inovadoras!" />
            <TestimonialCard name="Leonardo Ribeiro" testimonial="Agência incrível, sempre atentos aos detalhes e com resultados visíveis! O investimento mais bem aplicado da minha empresa." />
            <TestimonialCard name="Gustavo Lima" testimonial="Suporte impecável e estratégias que realmente funcionam! O time todo está sempre disponível para ajudar." />
            <TestimonialCard name="Fernando Lima" testimonial="Soluções certeiras e estratégias eficazes. O melhor investimento que fizemos para nosso crescimento no digital!" />
            <div className="flex items-center justify-center bg-dark-light rounded-lg p-6 border border-gray-800">
              <div className="text-center">
                <div className="mb-4 text-5xl font-bold text-secondary">+200</div>
                <p className="text-gray-300">Empresas satisfeitas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Comparativa */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Somos Diferentes</h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Assessoria Estratégica vs. Agência Tradicional
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-dark rounded-lg p-8 border-2 border-primary">
              <div className="flex items-center mb-6">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Eu Faço Seu Marketing</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Assessoria estratégica completa em marketing e vendas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Atuação consultiva personalizada às suas necessidades</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Execução de ponta a ponta com foco em resultados</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integração entre marketing e vendas para maximizar conversões</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Acompanhamento de métricas com análises profundas</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-light rounded-lg p-8 border-2 border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-gray-600 rounded-full p-2 mr-4">
                  <TrafficCone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Agência Tradicional</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400">Foco apenas em entrega de posts e relatórios básicos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400">Pacotes padronizados sem personalização real</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400">Execução fragmentada sem visão estratégica</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400">Desconexão entre ações de marketing e resultados de vendas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-400">Relatórios superficiais sem insights estratégicos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Using accordion */}
      <section className="section-padding bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/30 via-dark to-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para acertar no alvo e crescer de verdade?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Solicite agora sua consultoria gratuita com quem entende de verdade de marketing e vendas.
            </p>
            <a href="https://wa.me/5511999907739?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita." target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 animate-pulse-slow">
              Quero minha consultoria gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Footer - With improved layout */}
      <footer className="bg-dark-light pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center mb-6">
                <img src="/lovable-uploads/ae37cbee-2306-4d0f-881d-12198ce3a9cc.png" alt="Eu Faço Seu Marketing" className="h-10" />
              </div>
              <p className="text-gray-400 mb-6">
                Assessoria estratégica em marketing e vendas, transformando negócios através de estratégias personalizadas e resultados mensuráveis.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/eufacoseu.marketing/" target="_blank" rel="noopener noreferrer" className="bg-dark p-2 rounded-full hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/eu-faco-seu-marketing/" target="_blank" rel="noopener noreferrer" className="bg-dark p-2 rounded-full hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-primary transition-colors">Sobre Nós</a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-primary transition-colors">Serviços</a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-400 hover:text-primary transition-colors">Benefícios</a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-primary transition-colors">Depoimentos</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">📱</span>
                  <a href="https://wa.me/5511999907739" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    +55 11 99990-7739
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✉️</span>
                  <a href="mailto:contato@eufacoseumarketing.com.br" className="hover:text-primary transition-colors">
                    contato@eufacoseumarketing.com.br
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">🏢</span>
                  <span>CNPJ: 47.539.631/0001-47</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Localização</h3>
              <div className="h-48 rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4193608953455!2d-46.5843872!3d-23.6609321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43bac65fdf39%3A0x8831c262ed126008!2sAv.%20Senador%20Vergueiro%2C%202123%20-%20Planalto%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009750-001!5e0!3m2!1spt-BR!2sbr!4v1651214382056!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Eu Faço Seu Marketing"></iframe>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Av. Senador Vergueiro, 2123, cj 1910 - Rudge Ramos, São Bernardo do Campo - SP, 09750-001
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Eu Faço Seu Marketing. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;