'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/welcome');
  }, [router]);

  return <h1>Loading...</h1>;
}
