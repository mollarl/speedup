import { useState } from 'react';
import { IconMenu } from '../components/Icons';
import logo from '../assets/img/speedupSM.png';

const initialNavigation = [
  { name: 'Por qué optimizar', href: '/#porqueoptimizar', current: false, important:false },
  { name: 'Servicios', href: '/#servicios', current: false, important:false },
  { name: 'Otras soluciones', href: '/#soluciones', current: false, important:false },
  { name: 'Nosotros', href: '/#nosotros', current: false, important:false },
  //{ name: 'Proyectos', href: '#', current: false, important:false },
  { name: 'Contactanos', href: 'https://www.linkedin.com/in/luciano-mollar/', current: false, important:true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navigation, setNavigation] = useState(initialNavigation);

  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const handleClick = (name) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === name
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 z-20 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <IconMenu aria-hidden="true" classes={"block h-6 w-6 fill-white"} />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href="#" onClick={() => handleClick()} className="flex flex-shrink-0 items-center">
              <img
                alt="SpeedUp your web"
                src={logo}
                className="h-8 w-auto"
              />
            </a>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item.name)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      item.important ? 'text-amber-400 hover:text-amber-300':'',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
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
        {/* Menú móvil */}
        {menuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    item.important ? 'text-amber-400 hover:text-amber-300':'',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}