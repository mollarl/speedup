import { useEffect, useContext, useState, useRef } from 'react'
import { LayoutContext } from '../contexts/layout'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const SITE_KEY = import.meta.env.VITE_CAPTCHA;

const translations = {
  es: {
    main: {
      title: 'Contactanos',
      text: 'Escribirnos por cualquier consulta que tengas. Estamos para ayudarte.',
      name: 'Nombre',
      surname: 'Apellido',
      comp: 'Compañía',
      email: 'Email',
      msg: 'Mensaje',
      btn: 'Enviar',
      return: 'Tu consulta fue enviada exitosamente',
      error: 'Error al enviar el formulario',
    },
  },
  en: {
    main: {
      title: 'Contact Us',
      text: `Feel free to reach out if you have any questions. We're happy to help.`,
      name: 'First Name',
      surname: 'Last Name',
      comp: 'Company',
      email: 'Email',
      msg: 'Message',
      btn: 'Send',
      return: 'Your inquiry was successfully sent',
      error: 'Error sending the formError al enviar el formulario',
    },
  }
};

export default function Contact() {

    const { defaultMessage, loading, setLoading, language } = useContext(LayoutContext);  
    const [emailReturn, setEmailReturn] = useState({text:null, status:null});
    const [isCaptchaVisible, setCaptchaVisible] = useState(false);
    const visibilityStyle = `.grecaptcha-badge{visibility:visible!important;}`;
    const formRef = useRef(null);
    const currentTranslations = translations[language];

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        setLoading(true);
        
        const formData = {
            firstName: event.target['first-name'].value,
            lastName: event.target['last-name'].value,
            company: event.target.company.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key':  import.meta.env.VITE_BREVO_API,
            },
            body: JSON.stringify({
                sender: { name: formData.firstName, email: 'mollar.luciano@gmail.com' },
                to: [{ email: 'mollar.luciano@gmail.com', name: 'Luciano Mollar' }],
                subject: `Mensaje de ${formData.firstName} ${formData.lastName}`,
                textContent: `
                Nombre: ${formData.firstName} ${formData.lastName}\n
                Compañía: ${formData.company}\n
                Email: ${formData.email}\n
                Mensaje: ${formData.message}\n
                `,
            }),
        });

        if (response.ok) {
            setEmailReturn({text:currentTranslations.main.return, status:'success'});
        } else {
            setEmailReturn({text:currentTranslations.main.error, status:'error'});
        }
        setLoading(false);
    };
    useEffect(() => {
        if(!emailReturn.text)
        return;
        setTimeout(function(){
            setEmailReturn({text:null, status:null});
        }, 10000);
    }, [emailReturn]);

    useEffect(() => {
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCaptchaVisible(true);
            } else {
              setCaptchaVisible(false);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (formRef.current) {
        observer.observe(formRef.current);
      }

      return () => {
        if (formRef.current) {
          observer.unobserve(formRef.current);
        }
      };
  }, []);

  return (
    <>
    {isCaptchaVisible && (<style>{visibilityStyle}</style>)}
    <a id="contact"></a>
    <div className="relative isolate overflow-hidden bg-white px-4 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#333] to-[#999] opacity-20"
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
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#333] to-[#999] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#666] to-[#ccc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{currentTranslations.main.title}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {currentTranslations.main.text}
        </p>
      </div>
      <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      <form onSubmit={handleSubmit} ref={formRef} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              {currentTranslations.main.name}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              {currentTranslations.main.surname}
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              {currentTranslations.main.comp}
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              {currentTranslations.main.email}
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              {currentTranslations.main.msg}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                defaultValue={defaultMessage}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={loading ? 'disabled' : false}
            className={`block w-full uppercase rounded-md bg-amber-400 px-3.5 py-2.5 text-center text-sm text-black shadow-sm hover:bg-amber-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${loading ? 'opacity-50' : ''}`}
          >
            {currentTranslations.main.btn}
          </button>
        </div>

        {emailReturn.text && (
            <div className="mt-2">
                <p className={`return-text-${emailReturn.status} text-sm font-semibold`}>{emailReturn.text}</p>
            </div>
        )}
      </form>
      </GoogleReCaptchaProvider>
    </div>
    </>
  )
}