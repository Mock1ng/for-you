'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';

import loveit from '../../../public/illustrations/love-it.png';
import teamEffort from '../../../public/illustrations/team-effort.png';
import walkingTogether from '../../../public/illustrations/walking-together.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const WelcomePage = () => {
  const router = useRouter();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [carouselApii, setCarouselApii] = useState<CarouselApi>();
  const [isLastCarousel, setIsLastCarousel] = useState<boolean>(false);

  const lastCarouselHandler = () => {
    if (carouselApi?.canScrollNext()) return;

    setIsLastCarousel(true);
  };

  return (
    <div className='min-h-full h-dvh w-full relative'>
      <div className='bg-white w-full h-1/2 flex justify-center items-center'>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: 'start',
          }}
          className='w-full max-w-sm'
        >
          <CarouselContent>
            <CarouselItem>
              <div className='flex justify-center'>
                <Image
                  src={loveit}
                  alt='illustration girl with big heart'
                  height={350}
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center'>
                <Image
                  src={teamEffort}
                  alt='illustration team work'
                  height={350}
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center'>
                <Image
                  src={walkingTogether}
                  alt='illustration walking together'
                  height={350}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className='bg-primary w-full h-1/2 flex flex-col items-center pt-10'>
        <Carousel
          setApi={setCarouselApii}
          opts={{
            align: 'start',
          }}
          className='w-full max-w-sm mb-7'
        >
          <CarouselContent>
            <CarouselItem>
              <div className='flex flex-col justify-center items-center gap-4 text-white text-center'>
                <h3 className='font-bold text-3xl'>Cek Kecocokan</h3>
                <p>Apa benar kamu cocok dengan dia?</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex flex-col justify-center items-center gap-4 text-white text-center'>
                <h3 className='font-bold text-3xl'>Lebih Yakin</h3>
                <p>Kamu bisa jadi lebih yakin dengan pilihan kamu</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex flex-col justify-center items-center gap-4 text-white text-center'>
                <h3 className='font-bold text-3xl'>Hasil Akurat</h3>
                <p>Tunggu apa lagi? Mulai test sekarang!</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <Button
          variant={'secondary'}
          onClick={() => {
            if (isLastCarousel) {
              router.push('/login');
            } else {
              carouselApi?.scrollNext();
              carouselApii?.scrollNext();
              lastCarouselHandler();
            }
          }}
          className='w-32'
        >
          {isLastCarousel ? 'Mulai' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
