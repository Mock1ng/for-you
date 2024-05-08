'use client';

import { Button } from '@/components/ui/button';
import questions from './questions';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';

const QuestionsPage = () => {
  const router = useRouter();
  const [questionActive, setQuestionActive] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const radioHandler = (value: string) => {
    setCurrentAnswer(value);
  };

  const nextHandler = () => {
    if (questionActive == questions.length - 1) {
      setProgress(10 * questions.length);
      router.push('/result');
    } else if (currentAnswer == '') {
      setIsAlertOpen(true);
    } else {
      setQuestionActive(prev => prev + 1);
      setCurrentAnswer('');
    }
  };

  useEffect(() => {
    setProgress(questionActive * questions.length);
  }, [questionActive]);

  return (
    <div className='w-full h-dvh min-h-full flex flex-col justify-center items-center p-10 text-center'>
      <div className='flex flex-col gap-8 mb-8 justify-center items-center'>
        <h2 className='sm:text-3xl text-xl font-bold'>
          {questions[questionActive].title}
        </h2>

        <div className='w-fit'>
          <RadioGroup onValueChange={radioHandler}>
            {questions[questionActive].options.map(option => (
              <div key={option} className='flex items-center space-x-2'>
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <Button onClick={nextHandler} className='mb-20'>
        Next
      </Button>

      <Progress value={progress} className='lg:w-1/2 sm:w-[80%] w-[90%] mb-3' />
      <p>
        {questionActive} / {questions.length}
      </p>

      <AlertDialog open={isAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Jawaban tidak boleh kosong!</AlertDialogTitle>
            <AlertDialogDescription>
              Kamu harus pilih salah satu dari pilihan yang dikasih eaa
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsAlertOpen(false)}>
              Ok
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default QuestionsPage;
