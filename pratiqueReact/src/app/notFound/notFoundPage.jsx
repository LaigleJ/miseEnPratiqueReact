export function NotFoundPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold animate__animated animate__fadeInDown">
            Oups ! <span className="text-yellow-400">404</span>
          </h1>
          <p className="text-2xl">
            Il semble que la page que vous cherchez soit perdue dans l'univers !
          </p>
          <p className="text-xl text-gray-200">
            Peut-être qu'elle a pris des vacances ?
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="bg-red-500 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
            >
              Retour à l'Accueil
            </a>
          </div>
        </div>
  
        <div className="mt-10">
          <img
            src="https://media.giphy.com/media/3o7aCXXaHjmou9v6xG/giphy.gif"
            alt="404 gif"
            className="w-64 h-64 animate__animated animate__zoomIn"
          />
        </div>
      </main>
    );
  }