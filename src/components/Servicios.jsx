import { useContext } from 'react';
import { LayoutContext } from '../contexts/layout'
import { IconShield, IconMeasure, IconResearch, IconDevelop, IconBugThin, IconUxThin, IconDevThin } from './Icons';

const translations = {
  es: {
      title: '¿Qué es lo que hacemos?',
      subtitle: 'Optimizamos web performance enfocados en Core Web Vitals',
      text: 'Hay cientos de estrategias y factores al momento de optimizar, <strong>nos centramos y proprizamos en aquellas mejoras que sabemos que van mejorar tu negocio.</strong>',
      btn: 'Consultar por este servicio',
      title2: '¿Qué es lo que hacemos?',
      subtitle2: 'Solucines orientadas a mejorar la experiencia del usuario',
      text2: 'Garantizar una buena experiencia que de confianza e invite a los usuarios a regresar requiere una solución integral, por eso <strong className="text-black font-semibold">también podemos ayudarte identificar y resolver todas fugas</strong>.',
      msj: 'Hola, quisiera consultar sobre los servicios de optimización de performance.',
      steps: {
        step: {
          name: 'Medición',
          description: 'Con varias herramientas de monitoreo de usuarios reales (RUM) y medicón sintética obtenemos una visión integral del rendimiento de tu sitio, señales de frustración de usuarios y las áreas a mejorar.',
        },
        step2: {
          name: 'Diagnóstico',
          description: 'Realizamos un análisis de todos los iconvenientes de rendimiento, identificamos oportunidades y desarrollamos una estrategia de optimización.',
        },
        step3: {
          name: 'Optimización',
          description: 'Creamos una guia detallada y asesoramos a tu equipo de desarrollo para implementar todas las mejoras necesarias, o si así lo requiere, también podemos ofrecerte el servicio de desarrollo.',
        },
        step4: {
          name: 'Prevención',
          description: 'Te ayudamos a implementar sistemas de monitoreo permanente con Google Analytics u otras herramientas dedicadas.',
        },
      },
      solutions: {
        solution: {
          name: 'UX Research',
          description: 'SImplementamos mapas de calor, grabaciones de sesiones de usuario, A/B testings y encuestas para identificar oportunidades de mejora.',
          msj: 'Hola, quisiera consultar sobre el servicio de UX research.',
        },
        solution2: {
          name: 'Desarrollo Web',
          description: 'Podemos ayudarte a mejorar su sitio, a desarrollar uno nuevo o crear nuevos componentes para mejorar tu servicio.',
          msj: 'Hola, quisiera consultar sobre el servicio de desarrollo web.',
        },
        solution3: {
          name: 'Quality Assurance',
          description: 'Te ayudamos a identificar fallas en tu sitio que pueden estar afectando al tráfico, a la experiencia o incluso a las conversiones.',
          msj: 'Hola, quisiera consultar sobre el servicio de quality assurance.',
        },
      },
  },
  en: {
      title: 'What We Do',
      subtitle: 'We Optimize Web Performance with a Focus on Core Web Vitals',
      text: 'There are hundreds of strategies and factors when optimizing. <strong>We focus and prioritize improvements that we know will enhance your business.</strong>',
      btn: 'Ask for this service',
      title2: 'What do we do?',
      subtitle2: 'Solutions aimed at improving user experience',
      text2: 'Ensuring a good experience that builds trust and invites users to return requires a comprehensive solution. That’s why <strong className="text-black font-semibold">we can also help you identify and fix all leaks</strong>.',
      msj: 'Hello, I would like to inquire about the web performance optimization service.',
      steps: {
        step: {
          name: 'Measurement',
          description: 'With various real-user monitoring (RUM) tools and synthetic measurement, we gain a comprehensive view of your site’s performance, user frustration signals, and areas for improvement.',
        },
        step2: {
          name: 'Diagnosis',
          description: 'We analyze all performance issues, identify opportunities, and develop an optimization strategy.',
        },
        step3: {
          name: 'Optimization',
          description: 'We create a detailed guide and advise your development team on implementing all necessary improvements, or if needed, we can also offer development services.',
        },
        step4: {
          name: 'Prevention',
          description: 'We help you set up permanent monitoring systems with Google Analytics or other dedicated tools.',
        },
      },
      solutions: {
        solution: {
          name: 'UX Research',
          description: 'We implement heat maps, user session recordings, A/B testing, and surveys to identify improvement opportunities.',
          msj: 'Hello, I would like to inquire about the UX research service.',
        },
        solution2: {
          name: 'Web Development',
          description: 'We can help you improve your website, develop a new one, or create new components to enhance your service.',
          msj: 'Hello, I would like to inquire about the web development service.',
        },
        solution3: {
          name: 'Quality Assurance',
          description: 'We help you identify issues on your site that may be affecting traffic, user experience, or even conversions.',
          msj: 'Hello, I would like to inquire about the quality assurance service.',
        },
    },
  },
  
};

export default function Servicios() {

  const { setDefaultMessage, modal, setModal, language } = useContext(LayoutContext);  
  const currentTranslations = translations[language];

  const steps = [
  {
    name: currentTranslations.steps.step.name,
    description: currentTranslations.steps.step.description,
    icon: IconMeasure,
  },
  {
    name: currentTranslations.steps.step2.name,
    description: currentTranslations.steps.step2.description,
    icon: IconResearch,
  },
  {
    name: currentTranslations.steps.step3.name,
    description: currentTranslations.steps.step3.description,
    icon: IconDevelop,
  },
  {
    name: currentTranslations.steps.step4.name,
    description: currentTranslations.steps.step4.description,
    icon: IconShield,
  },
]

const solutions = [
  {
    name: currentTranslations.solutions.solution.name,
    description: currentTranslations.solutions.solution.description,
    msj: currentTranslations.solutions.solution.msj,
    icon: IconUxThin,
  },
  {
    name: currentTranslations.solutions.solution2.name,
    description: currentTranslations.solutions.solution2.description,
    msj: currentTranslations.solutions.solution2.msj,
    icon: IconDevThin,
  },
  {
    name: currentTranslations.solutions.solution3.name,
    description: currentTranslations.solutions.solution3.description,
    msj: currentTranslations.solutions.solution3.msj,
    icon: IconBugThin,
  },
]

  const handleContact = (service)=> {
    setDefaultMessage(service);
    if(modal) setModal(false);
    history.replaceState(null, null, '/#contact');
    document.getElementById('contact')?.scrollIntoView()
  }

  return (
  <>
    <a id="servicios"></a>
    <div className="py-8 sm:py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-400">{currentTranslations.subtitle}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {currentTranslations.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{__html: currentTranslations.text}}>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {steps.map((step) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                    <step.icon aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
          <div className='mt-6 flex justify-center'>
            <button className='text-sm uppercase rounded-md py-3 w-2/4 border-0 bg-amber-400 hover:bg-amber-400/80 px-4 text-gray-800'  onClick={() => handleContact(currentTranslations.msj)}>{currentTranslations.btn}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <a id="soluciones"></a>
        <div className="bg-white py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-amber-400">{currentTranslations.subtitle2}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {currentTranslations.title}
              </p>
              <p className="mt-6 mb-16 sm:mb-20 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{__html: currentTranslations.text2}}>
              </p>
            </div>
            <ul className='sm:grid sm:grid-cols-3 sm:gap-8'>
            {solutions.map((solution) => (
              <li key={solution.name}>
                <div className="flex justify-center __bigIconModifier my-8">
                  <solution.icon aria-hidden="true" />
                </div>
                <p className="text-xl font-semibold leading-7 text-gray-900">
                  {solution.name}
                </p>
                <p className="my-6 text-base font-normal leading-7 text-gray-600">
                  {solution.description}
                </p>
                <button className='text-sm uppercase rounded-md py-3 border-0 bg-amber-400 hover:bg-amber-400/80 px-4 text-gray-800' onClick={() => handleContact(solution.msj)}>{currentTranslations.btn}</button>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}