'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import learningSketching from '../../../public/illustrations/learning-sketching-white.png';

const LoginPage = () => {
  const router = useRouter();

  const FormSchema = z.object({
    yourName: z.string().includes('rifa', {
      message: 'Hey namu kamu bukan ini kan?!',
    }),
    yourPartnerName: z.string().includes('bayu', {
      message: 'Ini bukan nama pasangan kamu!',
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      yourName: '',
      yourPartnerName: '',
    },
  });

  function onSubmit() {
    router.push('/questions');
  }

  return (
    <div className='w-full h-dvh min-h-full bg-primary flex md:flex-row flex-col'>
      <div className='lg:w-1/3 md:w-1/2 bg-white h-full py-20 px-16'>
        <div className='mb-9'>
          <h3 className='text-3xl mb-2'>Cek Kecocokan</h3>
          <p className='text-muted-foreground'>
            Cek kecocokan kamu bersama pasangan!
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-6'
          >
            <FormField
              control={form.control}
              name='yourName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kamu</FormLabel>
                  <FormControl>
                    <Input placeholder='Masukkan nama kamu' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='yourPartnerName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Pasangan Kamu</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Masukkan nama pasangan kamu'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Cek
            </Button>
          </form>
        </Form>
      </div>

      <div className='grow flex justify-center items-end'>
        <Image src={learningSketching} alt='illustration learning sketching' />
      </div>
    </div>
  );
};

export default LoginPage;
