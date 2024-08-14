import iso from '../assets/speeduoISO.png'

export default function Footer() {
  return (
    <nav className="bg-gray-800 w-full z-30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-36 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href="#" className="flex flex-shrink-0 items-center">
              <img
                alt="SpeedUp your web"
                src={iso}
                className="h-10 opacity-80 w-auto"
              />
            </a>
            <div className="sm:ml-6">
              <div className="flex space-x-4">
                
                  <a
                    href=""
                    className='rounded-md px-3 py-2 text-sm font-medium text-gray-200'>
                    Core Web Vitals
                  </a>
                  <a
                    href=""
                    className='rounded-md px-3 py-2 text-sm font-medium text-gray-200'>
                    Learn about web performance
                  </a>
                  <a
                    href=""
                    className='rounded-md px-3 py-2 text-sm font-medium text-gray-200'>
                    Why speed matters
                  </a>
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

}