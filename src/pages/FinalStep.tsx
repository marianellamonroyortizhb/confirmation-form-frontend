import Header from '@/components/general/Header'

export default function FinalStep() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex justify-center items-center mt-16 px-4">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Confirma tu pedido</h1>
        </div>
      </div>
    </div>
  )
}
