import { useContext } from 'react';
import { LayoutContext } from '../contexts/layout'
import { IconUsers, IconMoreMoney, IconSaveMoney, IconSearch  } from "./Icons"
import screen from '../assets/img/rum.avif';

const translations = {
  es: {
      title: '¿Por qué optimizar?',
      subtitle: 'Mejorá tu negocio',
      text: 'Mejorar el rendimiento web y la experiencia del usuario es crucial para cualquier negocio que opera en línea.',
      features: {
        feature: {
          title: 'Incremento en Ventas y Conversiones:',
          text: 'Sitios más rápidos ofrecen una experiencia de usuario más fluida, lo que reduce la tasa de abandono. Mejorar el rendimiento web puede resultar una mejor tasa de retorno sobre la inversión (ROI).',
        },
        feature2: {
          title: 'Mejora en el SEO y Visibilidad:',
          text: 'Los motores de búsqueda como Google utilizan la velocidad del sitio como un factor de clasificación. Un sitio más rápido no solo mejora la experiencia del usuario, sino que también es más probable que aparezca en las primeras posiciones de los resultados de búsqueda.',
        },
        feature3: {
          title: 'Reducción de Costos Operativos:',
          text: 'Un sitio optimizado consume menos recursos, puede reducir los costos de infraestructura y mantenimiento.',
        },
        feature4: {
          title: 'Mayor Retención y Lealtad del Cliente:',
          text: 'Si un sitio carga rápidamente, es más probable que los usuarios regresen, lo que mejora la retención de clientes y su lealtad.',
        },
      },
  },
  en: {
      title: 'Improve Your Business',
      subtitle: 'Why Optimize?',
      text: 'Improving web performance and user experience is crucial for any business operating online.',
      features: {
        feature: {
          title: 'Increase Sales and Conversions:',
          text: 'Faster sites provide a smoother user experience, which reduces abandonment rates and can lead to better return on investment (ROI).',
        },
        feature2: {
          title: 'Improvement in SEO and Visibility:',
          text: 'Search engines like Google use site speed as a ranking factor. A faster site not only enhances user experience but is also more likely to rank higher in search results.',
        },
        feature3: {
          title: 'Reduction in Operating Costs:',
          text: 'An optimized site consumes fewer resources, which can lower infrastructure and maintenance costs.',
        },
        feature4: {
          title: 'Greater Customer Retention and Loyalty:',
          text: 'A site that loads quickly is more likely to have returning users, improving customer retention and loyalty.',
        },
      },
  },
};

export default function PorQue() {

  const { language } = useContext(LayoutContext);
  const currentTranslations = translations[language];

    const features = [
    {
        name: currentTranslations.features.feature.title,
        description: currentTranslations.features.feature.text,
        icon: IconMoreMoney,
    },
    {
        name: currentTranslations.features.feature2.title,
        description: currentTranslations.features.feature2.text,
        icon: IconSearch,
    },
    {
        name: currentTranslations.features.feature3.title,
        description: currentTranslations.features.feature3.text,
        icon: IconSaveMoney,
    },
    {
        name: currentTranslations.features.feature4.title,
        description: currentTranslations.features.feature4.text,
        icon: IconUsers,
    },
    ]
    return(
    <>
    <a id="porqueoptimizar"></a>
    <div className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-amber-400">{currentTranslations.subtitle}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{currentTranslations.title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {currentTranslations.text}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-2 h-5 w-5 text-indigo-600"><feature.icon aria-hidden="true" /></div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="SpeedCurve screenshot"
            src={screen}
            width={900}
            height={669}
            className="hidden sm:block max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    </>
    )
}