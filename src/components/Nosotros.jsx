import lm from '../assets/img/lm.png';
import { IconMail, IconLinkedIn } from '../components/Icons';
export default function Nosotros() {
  return (
  <>
    <a id="nosotros"></a>
    <div className="py-8 sm:py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre nosotros</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos un grupo de desarrolladores apacionados por la programación, la web performance y la experiencia del usuario.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Desde la patagonia argentina trabajamos para <strong className="text-black font-semibold">mejorar la experiencia de las personas cuando navegan</strong>, aportamos para hacer <strong className="text-black font-semibold">una web más rápida, estable y accesible</strong> y a la vez <strong className="text-black font-semibold">ayudamamos a empresas de todo tipo y de todo el mundo a brindar productos digitales de máxima calidad</strong> y alcanzar y superar sus objetivos comerciales.
          </p>
        </div>
        <h3 className="mt-8 sm:mt-16 mb-4 sm:mb-8 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Publicaciones</h3>
        <div className="lg:text-left flex gap-2 sm:gap-6 sm:items-center bg-white rounded-md drop-shadow-md sm:px-6 py-4">
          <div className='min-w-36 flex flex-col items-center sm:pr-6 sm:mr-6 border-r'>
            <img src={lm} className='rounded-full border-4 border-white drop-shadow-lg object-cover h-20 w-20' loading='lazy' alt='Luciano Mollar' />
            <p className="mt-2 text-sm text-gray-600">Luciano Mollar</p>
            <div className="flex justify-start mt-2">
              <a className='mr-1 __smallIconModifier opacity-50 hover:opacity-100' href='https://www.linkedin.com/in/luciano-mollar/' target="_blank"><IconLinkedIn/></a>
              <span className='mr-1 __smallIconModifier opacity-50 hover:opacity-100 cursor-pointer' onClick={() => window.location.href = `mailto:mollar.luciano@gmail.com`}><IconMail/></span>
            </div>
          </div>
          <ul className='sm:grid sm:grid-cols-3 sm:gap-4 items-center'>
            <li className='mb-4'>
              <h4 className="text-lg text-black font-semibold">Conductor</h4>
              <a className="text-sm text-sky-600 hover:text-sky-400" href="https://www.conductor.com/academy/page-speed-resources/#9-agrofy-76-reduction-in-the-abandonment-rate" target="_blank">76% reduction in the abandonment rate</a></li>
            <li className='mb-4'>
              <h4 className="text-lg text-black font-semibold">Google web.dev</h4>
              <a className="text-sm text-sky-600 hover:text-sky-400" href="https://web.dev/case-studies/agrofy" target="_blank">A 70% improvement in LCP correlated to a 76% reduction in load abandonment</a>
            </li>
            <li className='mb-0'>
              <h4 className="text-lg text-black font-semibold">Medium</h4>
              <a className="text-sm text-sky-600 hover:text-sky-400" href="https://mollar-luciano.medium.com/how-agrofy-optimised-core-web-vitals-and-improved-business-metrics-2f73311bca" target="_blank">Optimised Core Web Vitals and Improved Business Metrics</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}