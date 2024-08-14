import lcp from '../assets/img/lcp.png';
import cls from '../assets/img/cls.png';
import inp from '../assets/img/inp.png';

const vitals = [
  { id: 1, name: 'Mide el tiempo de carga del elemento principal. El LCP debe ocurrir en un plazo menor a 2.5 segundos.', value: 'LCP', img:lcp },
  { id: 2, name: 'Mide la estabilidad visual. Para una buena experiencia, las páginas deben mantener un CLS de 0.1. o menos.', value: 'CLS', img:cls },
  { id: 3, name: 'Mide la velocidad de respuesta interactiva. Las páginas deben tener un INP de 200 milisegundos o menos.', value: 'INP', img:inp },
]

export default function WebVitals() {
  return (
  <>
    <div className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-amber-400">Core Web Vitals</h2>
        <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Qué son los Web Vitals?</p>
          
          <p className="my-6 text-base leading-8 text-gray-600">
          Los <strong className="text-black font-semibold text-xl">Core Web Vitals</strong> son el subconjunto de Métricas web que se aplican a todas las páginas web, se mostrarán en todas las herramientas de Google. Cada una de las Métricas web esenciales representa una faceta distintiva de la experiencia del usuario, se puede medir en el campo y refleja la experiencia real de un resultado crítico centrado en el usuario.
        </p>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {vitals.map((vital) => (
            <div key={vital.id} className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-sm leading-7 text-gray-600">{vital.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-sky-800 sm:text-5xl">
                {vital.value}
                <img src={vital.img} width={250} height={91} className='my-2 mx-auto' />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </>
  )
}