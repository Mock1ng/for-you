import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const questions = [
  {
    title: '1. Siapa kamu?',
    options: ['Rifa', 'Rifa Vicaya', 'Ayangnya Bayu', 'Benar semua'],
  },
  {
    title: '2. Siapa nama orang yang kamu sayang?',
    options: ['Bayu Wicaksono', 'bayuw', 'baywcksn', 'bayuwwww'],
  },
  {
    title: '3. Kapan ulang tahun beliau?',
    options: [
      format(Date.now(), 'dd MMMM yyyy', { locale: id }),
      '17 Agustus 1945',
      '3 tahun cahaya',
      '23 November 1997',
    ],
  },
  {
    title: '4. Di mana rumah beliau?',
    options: ['Cikopo', 'Cikupa', 'Cikampek', 'Blitar'],
  },
  {
    title: '5. Berapa jarak dari rumah beliau ke rumah kamu?',
    options: ['100km', '60km', '157.7jm', '366.9km'],
  },
  {
    title: '6. Kendaraan apa yang dia punya?',
    options: [
      'Vario 125 New',
      'Vario 125 CBS',
      'Vario 150 New',
      'Vario 110 Techno',
    ],
  },
  {
    title: '7. HP apa yang dia punya?',
    options: [
      'Samsung S23 FE',
      'Samsung S22 FE',
      'Samsung S21 FE',
      'Samsung S20 FE',
    ],
  },
  {
    title:
      '8. Berapa lama rata-rata perjalanan dia dari rumah kamu ke rumahnya?',
    options: ['1 jam', '2.5 jam', '3.5 jam', '5 jam'],
  },
  {
    title: '9. Menurut kamu, seberapa besar perasaan dia ke kamu?',
    options: [
      'Sayang sekali',
      'Cinta mati',
      'Ga abis pikir pokoknya',
      'Tiada dua',
    ],
  },
  {
    title: '10. Apakah kamu bisa hidup tanpanya?',
    options: ['Harusnya sih ngga', 'Kayanya ngga', 'Tentu aja ngga', 'Gatau'],
  },
];

export default questions;
