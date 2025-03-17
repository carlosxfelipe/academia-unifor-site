export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Home</h1>
      <p className="text-lg mb-6">Esta é a página inicial do app.</p>
      <a
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Ir para Login
      </a>
    </div>
  );
}
