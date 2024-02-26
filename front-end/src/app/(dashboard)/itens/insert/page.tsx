import { BtnForm } from '@/components/btnForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function InsertItens() {
  return (
    <div className="flex flex-col mx-auto justify-center h-screen w-full items-center">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm mb-3 w-96 max-md:mt-24 max-md:w-80"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar
      </Link>
      <p className="text-xl mb-1 w-96 max-md:mb-0 max-md:w-80">Seu cadastro</p>
      <form>
        <div className="flex flex-col mt-3 max-md:mt-3">
          <label htmlFor="title">
            Titulo: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="desc">
            Descrição: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="text"
            name="desc"
            id="desc"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="value">
            Valor: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="number"
            name="value"
            id="value"
            step="0.00"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="qtdIten">
            Quantidade de iten: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="number"
            name="qtdIten"
            id="qtdIten"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="slug">
            Slug (Como deve chamar o iten, na url):{' '}
            <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="urlImage">
            Caminho da imagem: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="text"
            name="urlImage"
            id="urlImage"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="waitTime">
            Tempo de espera: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="text"
            name="waitTime"
            id="waitTime"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="idCategory">
            Categoria: <span className="text-red-600">*</span>{' '}
          </label>
          <input
            type="text"
            name="idCategory"
            id="idCategory"
            className="w-96 h-9 border border-zinc-400 rounded-[5px] max-md:w-80 px-2"
            required
          />
        </div>
        <BtnForm title="Cadastrar" />
      </form>
    </div>
  )
}
