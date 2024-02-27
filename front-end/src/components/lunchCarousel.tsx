'use client'
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export const LunchCarrossel = () => {
  const [qtdCarousel, setQtdCarousel] = useState<number>(4)

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window
      if (width < 620) {
        setQtdCarousel(3)
      } else if (width < 890) {
        setQtdCarousel(4)
      } else if (width < 920) {
        setQtdCarousel(5)
      } else if (width < 1100) {
        setQtdCarousel(6)
      } else if (width < 1330) {
        setQtdCarousel(7)
      } else {
        setQtdCarousel(11)
      }
    }
    handleResize()
  }, [])

  return (
    <div className="pl-2">
      <div className="flex items-center py-2 text-lg mt-3">
        Almoço <ArrowRight className="w-5 h-5" />
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={qtdCarousel}
      >
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Link href="">
              <Image
                src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg"
                width={100}
                height={100}
                alt="imagem do item"
              />
              <div>
                <span className="text-md truncate text-zinc-900 font-medium">
                  Churrasco
                </span>
                <span className="text-zinc-900 flex font-medium">R$ 10</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
