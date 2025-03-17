export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p className="text-lg mb-6">Digite suas credenciais para acessar.</p>

      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">E-mail</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Digite sua senha"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>

      <a href="/" className="mt-4 text-blue-600 hover:underline">
        Voltar para Home
      </a>
    </div>
  );
}
