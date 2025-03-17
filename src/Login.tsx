export default function Login() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url(/pexels/pexels-victorfreitas-841130.jpg)",
      }}
    >
      <div className="absolute bg-gradient-to-b from-blue-500 to-blue-400 opacity-75 inset-0 z-0"></div>
      <div className="relative p-12 bg-white mx-auto rounded-2xl w-96 shadow-lg z-10">
        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-gray-800">Entrar</h3>
          <p className="text-gray-500">Por favor, faça login na sua conta.</p>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              E-mail
            </label>
            <input
              className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="email"
              placeholder="seuemail@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
              Senha
            </label>
            <input
              className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-800"
              >
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <a href="/register" className="text-blue-400 hover:text-blue-500">
                Não tem uma conta?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-blue-400 hover:bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Entrar
            </button>
          </div>
        </div>
        <div className="pt-5 text-center text-gray-400 text-xs">
          <span>
            Copyright © 2021-{new Date().getFullYear()}
            <a
              href="https://codepen.io/uidesignhub"
              rel="noreferrer"
              target="_blank"
              title="Ajimon"
              className="text-blue hover:text-blue-500"
            >
              AJI
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
