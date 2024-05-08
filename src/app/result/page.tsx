'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import withLove from '../../../public/illustrations/with-love.png';

const ResultPage = () => {
  const loves = [
    {
      title: 'Acts of Service',
      percentage: 95,
    },
    {
      title: 'Word of Affirmation',
      percentage: 80,
    },
    {
      title: 'Giving/Receiving Gifts',
      percentage: 90,
    },
    {
      title: 'Physical Touch',
      percentage: 85,
    },
    {
      title: 'Quality Time',
      percentage: 85,
    },
  ];

  const clickHandler = async () => {
    window.open('https://www.greetingsisland.com/ecard/p42viqyvdpkj', '_blank');
  };

  return (
    <div className='md:py-[80px] py-10 px-4 max-w-[1280px] w-full m-auto p'>
      <h2 className='md:text-4xl text-xl font-bold md:mb-6 mb-2'>
        Lover (BAYU-W)
      </h2>
      <p className='md:text-2xl text-base mb-8'>
        Tinjau hasil tes kecocokan ini dan pelajari selengkapnya tentang tipe
        kepribadian dan ciri-ciri utamanya.
      </p>

      <div className='flex justify-between w-full flex-col lg:flex-row md:gap-12 gap-4 mb-8'>
        <Card className='py-9 px-6 md:w-[360px] w-full'>
          <p className='text-center mb-3'>Tipe Kepribadian</p>
          <h2 className='text-center mb-4 text-3xl'>Lover (BAYU-W)</h2>

          <Image src={withLove} alt='with love illustration' />

          <p className='mb-4'>
            Lover adalah penyayang imajinatif dan strategis yang penuh kasih
            sayang untuk pasangannya.
          </p>
          <Button>Pelajari Selengkapnya</Button>
        </Card>

        <Card className='grow'>
          <CardHeader className='border-b-2'>
            <CardTitle className='text-lg'>Sifat-sifat Kepribadian</CardTitle>
          </CardHeader>

          <CardContent className='pt-6 space-y-6'>
            {loves.map(love => (
              <div key={love.title}>
                <p className='mb-2 text-sm'>
                  {love.title}:{' '}
                  <span className='font-bold'>{love.percentage}%</span>
                </p>
                <Progress value={love.percentage} className='w-full' />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <h4 className='font-bold md:text-3xl text-xl md:mb-3 mb-1'>
        Bagikan Hasil Anda pada Pasangan
      </h4>
      <p className='mb-3 text-sm md:text-base'>
        Berikan pemahaman yang lebih baik kepada pasangan Anda tentang diri Anda
        dengan membagikan hasil tes kecocokan Anda.
      </p>

      <Card className='md:py-6 md:px-9 py-1 px-4 flex justify-between max-w-full overflow-auto relative whitespace-nowrap'>
        <a
          href={'https://www.greetingsisland.com/ecard/p42viqyvdpkj'}
          target='_blank'
          className='text-sm md:text-base'
        >
          Link URL
        </a>

        <ExternalLink onClick={clickHandler} className='hover:cursor-pointer' />
      </Card>
    </div>
  );
};

export default ResultPage;
