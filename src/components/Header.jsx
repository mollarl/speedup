const stats = [
  { name: 'Incremento en conversiones bajando a menos de 3 segundos la carga.', value: '50%' },
  { name: 'Aumento en la retención de usuarios al mejorar la velocidad del sitio en un 20%.', value: '3x' },
  { name: 'Más probable que un cliente recomiende tu sitio si carga en menos de 2.5 segundos.', value: '70%' },
  { name: 'Reducción en la tasa de rebote al optimizar el LCP a 2 segundos.', value: '30%' },
]

export default function Header() {
    const PSI_API_KEY = import.meta.env.VITE_PSI;
    const PSI_API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

    const handelSubmit = async (event)=> {
        event.preventDefault();
        const targetURL = 'https://www.agrofy.com.ar'        
        try {
            const response = await fetch(`${PSI_API_URL}?url=${targetURL}/&key=${PSI_API_KEY}&strategy=mobile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.log('error')
                throw new Error('Network response was not ok');
            }
            console.log(response)
        } catch (error) {
            console.error('Error fetching user reports:', error);
        } finally {
            //
        }
    }

  return (
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
            <label htmlFor="price" className="block text-base sm:text-xl font-medium leading-6 text-white">
                Qué tan rápido es tu sitio?
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                id="url"
                name="url"
                type="url"
                placeholder="www.ejemplo.com"
                className="block w-full bg-white/80 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button className="h-full text-xs sm:text-sm rounded-r-md border-0 bg-amber-400 px-4 text-gray-800">ANALIZAR</button>
                </div>
            </div>
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
  );
}