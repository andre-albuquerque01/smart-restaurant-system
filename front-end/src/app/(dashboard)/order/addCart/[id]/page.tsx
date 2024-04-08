import { GetAllItens } from '@/app/actions/itens/getAllItens'
import { AddCartComanda } from '@/components/addCart'
import { InterfaceItens } from '@/data/type/interfaceItens'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function AddCart({ params }: { params: { id: number } }) {
  const reqBody = await GetAllItens()
  const data = reqBody.data

  return (
    <div className="max-md:w-[360px] mx-auto mt-5 space-y-5">
      <Link href="/menu/list" className="flex items-center  md:hidden">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </Link>
      <p className="text-md font-normal">Itens na comanda</p>
      <div className="flex flex-wrap gap-5">
        {data.map((itens: InterfaceItens, index: number) => (
          <div
            className="flex justify-between gap-3 max-md:w-full shadow-xl p-2 border md:w-[370px] border-zinc-200 rounded-lg"
            key={index}
          >
            <div className="flex gap-3">
              <Image
                src={itens.urlImage}
                alt={`Imagem do ${itens.title}`}
                width={150}
                height={150}
                className="rounded-lg"
              />
              <div className="flex flex-col justify-evenly">
                <p className="font-medium text-lg text-wrap">{itens.title}</p>
                <p className="font-medium text-md">
                  {itens.value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
            <AddCartComanda idItens={itens.idItens} idMenu={params.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
