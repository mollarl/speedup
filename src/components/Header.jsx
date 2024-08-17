import React, { useState, useEffect, useContext } from 'react';
import { LayoutContext } from '../contexts/layout';
import audit from '../MOKS/audit.json';
import { IconIdea } from '../components/Icons';

const stats = [
  { name: 'Incremento en conversiones bajando a menos de 3 segundos la carga.', value: '50%' },
  { name: 'Aumento en la retención de usuarios al mejorar la velocidad del sitio en un 20%.', value: '3x' },
  { name: 'Más probable que un cliente recomiende tu sitio si carga en menos de 2.5 segundos.', value: '70%' },
  { name: 'Reducción en la tasa de rebote al optimizar el LCP a 2 segundos.', value: '30%' },
]

const facts = [
    { fact: 'Bajar el tiempo de carga inicial aumenta las conversiones y ventas al mejorar la experiencia del usuario.'},
    { fact: 'Reducir el tiempo de respuesta disminuye la tasa de rebote, manteniendo a los usuarios en tu sitio por más tiempo.'},
    { fact: 'Mejorar la estabilidad visual optimiza la clasificación en motores de búsqueda como Google.'},
    { fact: 'Optimizar el uso del servidor disminuye los costos de infraestructura.'},
    { fact: 'Aumentar la velocidad de carga incrementa la satisfacción del cliente, impulsando la lealtad y retención.'},
    { fact: 'Reducir los tiempos de carga reduce la necesidad de soporte técnico por problemas de carga.'},
    { fact: 'Optimizar el tiempo de carga en dispositivos móviles acelera la accesibilidad.'},
    { fact: 'Reducir el tiempo de carga inicial incrementa el tráfico orgánico al hacer tu sitio más rápido y visible.'},
    { fact: 'Facilitar la navegación y mejorar el tiempo de respuesta aumenta la tasa de conversión.'},
    { fact: 'Reducir el tiempo de carga inicial aumenta las posibilidades de compartir en redes sociales, generando más tráfico.'},
]

export default function Header() {
    const PSI_API_KEY = import.meta.env.VITE_PSI;
    const PSI_API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    const [lighthouseResult, setLighthouseResult] = useState(null);
    const [metrics, setMetrics] = useState(null);
    const [diagnostics, setDiagnostics] = useState(null);
    const [error, setError] = useState(null);
    const [loaderText, setLoaderText] = useState();
    const { 
    modal, setModal,
    loading, setLoading
     } = useContext(LayoutContext);

    const handelSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const url = formData.get('url');
        if (!url) return;
        fetchData(url);
    };
    const handleReCalc = (event) => {
        event.preventDefault()
        setMetrics(null);
        setLighthouseResult(null);
    };

    const fetchData = async (url) => {
      setModal(true);
      setLoading(true);
      try {
      
        const api = PSI_API_URL;
        const params = {
          url: encodeURIComponent(url),
          strategy: 'mobile',
          locale: 'es',
          key: PSI_API_KEY
        };

        let query = `${api}?`;
        for (const key in params) {
          query += `${key}=${params[key]}&`;
        }

        const response = await fetch(query);
        const json = await response.json();

        const { id, loadingExperience, lighthouseResult } = json;

        setLighthouseResult(lighthouseResult);
        if(!modal){
            setModal(true);
        }
         /*
        setTimeout(function(){
            const { id, loadingExperience, lighthouseResult } = audit;
            setLighthouseResult(lighthouseResult);
            if(!modal){
                setModal(true);
            }
        }, 1000);*/
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    useEffect( () => {

        if(!lighthouseResult) return;
//console.log (lighthouseResult)
        
        let diag = [];
        const findItems = (obj) => {
            if (obj && typeof obj === 'object') {
            for (const key in obj) {
                if (typeof obj[key] === 'object') {
                findItems(obj[key]);
                }
                if (key === "scoreDisplayMode" && obj[key] === "metricSavings") {
                    diag.push(obj);
                }
            }
            }
        };
        findItems(lighthouseResult)
            
        const lighthouseMetrics = {
            'fcp': parseFloat(lighthouseResult.audits['first-contentful-paint'].numericValue / 1000).toFixed(2),
            'cls': lighthouseResult.audits['cumulative-layout-shift'].displayValue,
            'tbt': parseFloat(lighthouseResult.audits['total-blocking-time'].numericValue / 1000).toFixed(2),
            'lcp': parseFloat(lighthouseResult.audits['largest-contentful-paint'].numericValue / 1000).toFixed(2),
            'score': parseInt(lighthouseResult.categories.performance.score * 100),
            'screen': lighthouseResult.audits['final-screenshot'].details.data,
            'screenTns': lighthouseResult.audits['screenshot-thumbnails'].details.items,
            'finalUrl': lighthouseResult.finalUrl.replace(/^https?:\/\//, '').replace(/\/+$/, ''),
        };
        setMetrics(lighthouseMetrics);
        setDiagnostics(diag);
    }, [lighthouseResult]);

    useEffect(() => {
        let intervalId;

        if (modal && !metrics) {
            if (!loaderText) {
                setLoaderText(facts[Math.floor(Math.random() * 10)].fact);
            }

            intervalId = setInterval(() => {
                let number = Math.floor(Math.random() * 10);
                setLoaderText(facts[number].fact);
            }, 8000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [modal, metrics]);

    const statusLCP = (value) => {
        if ( value > 4 ) {
         return 'slow';
        }else if ( value > 2.5 ) {
         return 'avg';
        }else {
         return 'fast';
        }
    }
    const statusCLS = (value) => {
        if ( value > 0.25 ) {
         return 'slow';
        }else if ( value > 0.1) {
         return 'avg';
        }else {
         return 'fast';
        }
    }
    const statusTBT = (value) => {
        if ( value > 0.600 ) {
         return 'slow';
        }else if ( value > 0.200 ) {
         return 'avg';
        }else {
         return 'fast';
        }
    }
    const statusSCORE = (value) => {
        if ( value < 50 ) {
         return 'slow';
        }else if ( value < 90 ) {
         return 'avg';
        }else if ( value === 100 ){
            return 'superfast';
        }else{
         return 'fast';
        }
    }
    
  return (
  <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd226] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd226] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 lg:flex lg:items-center lg:space-x-8">
          <div className="lg:flex-1 lg:w-3/6">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Speed up your website, <span className="text-amber-400">improve experiences</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Mejorá la experiencia de los usuarios, el posicionamiento en buscadores y reduce el costo por transacción.{' '}
              <span className="text-white">
                Te ayudamos a incrementar la interacción con los clientes y a mejorar las ventas al hacer que tu sitio sea más rápido y estable.
              </span>
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex-none lg:w-3/6 sm:px-16">
            <form className="bg-white/20 p-6 pt-4 rounded-lg text-white" onSubmit={handelSubmit}>
            <label htmlFor="price" className="block text-base sm:text-xl font-medium leading-6 text-white mb-2">
                Qué tan rápido es tu sitio?
            </label>
            {metrics ? (
            <>
                <p>Tu web demora en cargar unos <span className={`color-${statusLCP(metrics.lcp)}`}>{metrics.lcp}s, </span>
                    {statusLCP(metrics.lcp) === 'slow' && ('es algo lento pero no te preocupes, hay mucho que podemos hacer para acelerarlo.')}
                    {statusLCP(metrics.lcp) === 'avg' && ('la experiencia no es muy rápida, pero hay muchas cosas que podemos hacer para acelerarlo.')}
                    {statusLCP(metrics.lcp) === 'fast' && (statusSCORE(metrics.score) === 'superfast' ? ' vuela!' : 'es una buena velocidad de carga. Podemos enfocarnos en las otras métricas y recomendaciones.')}  
                </p>

                <button className='text-sm uppercase rounded-md py-2 mt-4 border-0 bg-amber-400 px-4 text-gray-800 mr-4' onClick={(e) => {
                    setModal(true);
                }}>Mostrar detalles</button>
                <button className='text-sm uppercase rounded-md py-2 mt-4 border-0 px-4 text-amber-400' onClick={handleReCalc}>Volver a calcular</button>
            </>
            ) : (
                <div className={`relative mt-2 rounded-md shadow-sm ${loading && 'opacity-50'}`}>
                    <input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="https://www.ejemplo.com"
                    className="block w-full bg-white/80 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={loading ? 'disabled' : false}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <button className="h-full text-xs sm:text-sm rounded-r-md border-0 bg-amber-400 px-4 text-gray-800" disabled={loading ? 'disabled' : false}>ANALIZAR</button>
                    </div>
                </div>
            )}
            </form>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col">
                <dd className="text-2xl sm:text-4xl font-bold leading-9 tracking-tight text-amber-400">{stat.value}</dd>
                <dt className="text-sm sm:text-base leading-7 text-gray-300">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    {modal && (
        <div className="__Modal" onClick={(e) => {
            if (e.target === e.currentTarget) {
                setModal(false);
            }
            }}>
            <div className="__ModalContent h-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <span className='text-2xl sm:text-3xl absolute top-2 right-4 cursor-pointer' onClick={() => {setModal(false);}}>&times;</span>
                {metrics ? (
                <>
                <button className='hidden sm:block text-lg font-semibold uppercase rounded-md py-2 mt-4 border-0 bg-amber-400 px-4 text-gray-800 z-10 shadow-lg absolute bottom-8 right-8'
                onClick={() => window.location.href = `mailto:mollar.luciano@gmail.com`}
                >Optimizar esta web</button>
                <div className='overflow-auto h-full'>
                    <p className='text-sm sm:text-lg text-gray-400'>Prueba realizada sobre el sitio: <span className='text-amber-400'>{metrics.finalUrl}</span></p>
                    <h4 className='text-lg sm:text-xl my-4 sm:ml-2 sm:mb-8 text-center sm:text-left text-black font-semibold'>Tu web demora en cargar unos <span className={`color-${statusLCP(metrics.lcp)}`}>{metrics.lcp}s, </span>
                        {statusLCP(metrics.lcp) === 'slow' && ('es algo lento pero no te preocupes, hay mucho que podemos hacer para acelerarlo.')}
                        {statusLCP(metrics.lcp) === 'avg' && ('la experiencia no es muy rápida, pero hay muchas cosas que podemos hacer para acelerarlo.')}
                        {statusLCP(metrics.lcp) === 'fast' && (statusSCORE(metrics.score) === 'superfast' ? ' vuela!' : 'es una buena velocidad de carga. Podemos enfocarnos en mejorar otras cosas.')}  
                    </h4>
                    <div className='flex justify-between flex-col md:flex-row relative'>
                        <div className="w-full sm:mx-4">
                            <dl className="flex flex-col sm:flex-row items-center justify-between text-center">
                                <div className="mx-auto basis-1/4 border-b sm:border-b-0 sm:border-r">
                                    <dt className="text-base leading-7 text-gray-600">Puntaje general</dt>
                                    <dd className={`text-4xl font-semibold tracking-tight sm:text-6xl color-${statusSCORE(metrics.score)}`}>
                                        {metrics.score}
                                    </dd>
                                </div>
                                <div className="mx-auto basis-1/4 border-b sm:border-b-0 sm:border-r">
                                    <dt className="text-base leading-7 text-gray-600">Largest Contentful Paint</dt>
                                    <dd className={`text-2xl font-semibold tracking-tight sm:text-4xl color-${statusLCP(metrics.lcp)}`}>
                                        {metrics.lcp}s
                                    </dd>
                                </div>
                                <div className="mx-auto basis-1/4 border-b sm:border-b-0 sm:border-r">
                                    <dt className="text-base leading-7 text-gray-600">Cumulative Layout Shift</dt>
                                    <dd className={`text-2xl font-semibold tracking-tight sm:text-4xl color-${statusCLS(metrics.cls)}`}>
                                        {metrics.cls}
                                    </dd>
                                </div>
                                <div className="mx-auto basis-1/4">
                                    <dt className="text-base leading-7 text-gray-600">Total Bloking Time    </dt>
                                    <dd className={`text-2xl font-semibold tracking-tight sm:text-4xl color-${statusTBT(metrics.tbt)}`}>
                                        {metrics.tbt}s
                                    </dd>
                                </div>
                            </dl>
                            <div className='mt-8 sm:mt-16'>
                                <h4 className='text-sm sm:text-xl sm:ml-2 mb-2 sm:mb-4 text-black font-semibold'>Así es como fue cargándose tu sitio</h4>
                                <dl className="flex flex-row items-center justify-between relative text-center px-4 pb-4 overflow-hidden bg-gray-100 overflow-x-auto rounded-md shadow-md sm:shadow-lg">
                                    {metrics.screenTns.map((tn) => (
                                    <div key={tn.timestamp} className="mx-auto basis-1/8 my-3">
                                        <dt className="text-xs sm:text-sm font-semibold text-gray-500 relative mr-2">
                                            <div className="flex items-center justify-center shadow-md mb-2">
                                                <img src={tn.data} width={60} height={120} className='border w-8 h-16 sm:h-32 sm:w-16' />
                                            </div>
                                            <div className='absolute ml-2 sm:ml-6 rounded-full mt-1 w-4 h-4 bg-amber-400 z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]'></div>
                                        </dt>
                                    </div>
                                    ))}
                                    <hr className='absolute w-full border-b border-b-amber-400/30 bottom-4 left-0'/>
                                </dl>
                            </div>
                            <div className='mt-8 sm:mt-16'>
                                <h4 className='text-sm sm:text-xl sm:ml-2 mb-2 sm:mb-4 text-black font-semibold'>Estos son algunos de los problemas que encontramos</h4>
                                {diagnostics.map((item) => (
                                    <div className="p-4 bg-gray-100 rounded-md shadow-md mb-6" key={item.id}>
                                        <div className="text-base font-bold">{item.title}</div>
                                        <div className="text-sm font-semibold text-red-500">{item.displayValue}</div>
                                        <div className="text-sm text-gray-500 mt-2">{item.description.replace(/[\[\(][^\[\]\(\)]*[\]\)]/g, '')}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='hidden md:block img-container border-2 border-white rounded-lg shadow-md sm:shadow-lg'>
                                <img src={metrics.screen} />
                            </div>
                        </div>
                    </div>
                </div>
                </>
                ) : (
                    <div className='__Loader py-2 sm:py-10'>
                        <p className='mb-6 text-xl sm:mb-8 sm:text-3xl'>Estamos analizando tu sitio</p>
                        <div className="__LoaderProgress"></div>
                        <p className='mt-6 text-base sm:mt-8 sm:text-lg'>Esto puede demorar un rato, mientras te cuento algunas curiosidades:</p>
                        {loaderText && (
                            <div className='__LoaderTexts items-center w-full sm:w-5/6 h-48 sm:h-24 bg-gray-100 rounded-lg shadow-xl relative'>
                                <IconIdea classes={"absolute top-4 left-3 h-6 w-6 sm:relative sm:h-8 sm:w-8 sm:top-auto sm:left-auto mr-2 fill-amber-400"} />
                                <p className="text-base w-full sm:text-lg text-black">{loaderText}</p>
                            </div>
                        )}
                        <p className="text-xs mb-2 sm:text-sm">Si querés podés cerrar esta ventana, cuando esté completa la auditoría te mostramos el resultado.</p>
                    </div>
                )}
            </div>
        </div>
    )}
</>
  );
}