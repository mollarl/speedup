import { IconShield, IconMeasure, IconResearch, IconDevelop, IconBugThin, IconUxThin, IconDevThin } from './Icons';

const steps = [
  {
    name: 'Medición',
    description:
      'Con varias herramientas de monitoreo de usuarios reales (RUM) y medicón sintética obtenemos una visión integral del rendimiento de tu sitio, señales de frustración de usuarios y las áreas a mejorar.',
    icon: IconMeasure,
  },
  {
    name: 'Diagnóstico',
    description:
      'Realizamos un análisis de todos los iconvenientes de rendimiento, identificamos oportunidades y desarrollamos una estrategia de optimización.',
    icon: IconResearch,
  },
  {
    name: 'Optimización',
    description:
      'Creamos una guia detallada y asesoramos a tu equipo de desarrollo para implementar todas las mejoras necesarias, o si así lo requiere, también podemos ofrecerte el servicio de desarrollo.',
    icon: IconDevelop,
  },
  {
    name: 'Prevención',
    description:
      'Te ayudamos a implementar sistemas de monitoreo permanente con Google Analytics u otras herramientas dedicadas.',
    icon: IconShield,
  },
]

const solutions = [
  {
    name: 'UX Research',
    description:
      'Implementamos mapas de calor, grabaciones de sesiones de usuario, A/B testings y encuestas para identificar oportunidades de mejora.',
    icon: IconUxThin,
  },
  {
    name: 'Desarrollo Web',
    description:
      'Podemos ayudarte a mejorar su sitio, a desarrollar uno nuevo o crear nuevos componentes para mejorar tu servicio.',
    icon: IconDevThin,
  },
  {
    name: 'Quality Assurance',
    description:
      'Te ayudamos a identificar fallas en tu sitio que pueden estar afectando al tráfico, a la experiencia o incluso a las conversiones.',
    icon: IconBugThin,
  },
]

export default function Servicios() {
  return (
  <>
    <a id="servicios"></a>
    <div className="py-8 sm:py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-400">Optimizamos web performance enfocados en Core Web Vitals</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Que es lo que hacemos?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hay cientos de estrategias y factores al momento de optimizar, <strong className="text-black font-semibold"> nos centramos y proprizamos en aquellas mejoras que sabemos que van mejorar tu negocio</strong>.
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
            <button className='text-sm uppercase rounded-md py-3 w-2/4 border-0 bg-amber-400 px-4 text-gray-800'>Contratar servicio</button>
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
              <h2 className="text-base font-semibold leading-7 text-amber-400">Solucines orientadas a mejorar la experiencia del usuario</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Otras Soluciones
              </p>
              <p className="mt-6 mb-16 sm:mb-20 text-lg leading-8 text-gray-600">
                Garantizar una buena experiencia que de confianza e invite a los usuarios a regresar requiere una solución integral, por eso <strong className="text-black font-semibold">también podemos ayudarte identificar y resolver todas fugas</strong>.
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
                <button className='text-sm uppercase rounded-md py-3 border-0 bg-amber-400 px-4 text-gray-800'>Contratar servicio</button>
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