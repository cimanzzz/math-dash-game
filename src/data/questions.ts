import { MathQuestion, CarColorConfig } from '../types/game';

export const CAR_COLORS: CarColorConfig[] = [
  { id: 'cyan', name: 'Cyber Cyan', hex: '#06b6d4', threeColor: 0x06b6d4, glowHex: '#22d3ee' },
  { id: 'red', name: 'Inferno Red', hex: '#ef4444', threeColor: 0xef4444, glowHex: '#f87171' },
  { id: 'lime', name: 'Neon Lime', hex: '#84cc16', threeColor: 0x84cc16, glowHex: '#a3e635' },
  { id: 'gold', name: 'Solar Gold', hex: '#f59e0b', threeColor: 0xf59e0b, glowHex: '#fbbf24' },
  { id: 'purple', name: 'Apex Purple', hex: '#a855f7', threeColor: 0xa855f7, glowHex: '#c084fc' },
];

export const FORM1_QUESTIONS: MathQuestion[] = [
  {
    id: 'soalan-1',
    topic: 'Standard 4.4.1',
    topicMalay: 'Standard 4.4.1 (Nisbah)',
    question: 'Nisbah bilangan murid lelaki kepada murid perempuan dalam sebuah kelas ialah 3 : 5. Jika terdapat 15 orang murid lelaki, berapakah bilangan murid perempuan?',
    options: ['20 orang', '25 orang', '30 orang'],
    correctIndex: 1, // B
    difficulty: 1,
    explanation: 'Murid lelaki = 3 bahagian = 15 orang. 1 bahagian = 15 ÷ 3 = 5 orang. Bilangan murid perempuan = 5 bahagian = 5 × 5 = 25 orang.',
  },
  {
    id: 'soalan-2',
    topic: 'Standard 4.4.1',
    topicMalay: 'Standard 4.4.1 (Nisbah Tiga Kuantiti)',
    question: 'Nisbah bilangan epal kepada oren ialah 2 : 3, manakala nisbah bilangan oren kepada mangga ialah 6 : 5. Apakah nisbah epal kepada oren kepada mangga?',
    options: ['4 : 6 : 5', '2 : 6 : 5', '4 : 3 : 5'],
    correctIndex: 0, // A
    difficulty: 2,
    explanation: 'Samakan bahagian oren (gandaan 3 dan 6 ialah 6). Nisbah Epal : Oren = 2 : 3 = 4 : 6. Nisbah Oren : Mangga = 6 : 5. Maka nisbah Epal : Oren : Mangga = 4 : 6 : 5.',
  },
  {
    id: 'soalan-3',
    topic: 'Standard 4.4.2',
    topicMalay: 'Standard 4.4.2 (Jumlah Wang)',
    question: 'Nisbah wang Amir kepada wang Bala ialah 4 : 7. Jika wang Amir ialah RM20, berapakah jumlah wang mereka?',
    options: ['RM35', 'RM45', 'RM55'],
    correctIndex: 2, // C
    difficulty: 2,
    explanation: 'Wang Amir = 4 bahagian = RM20. 1 bahagian = RM20 ÷ 4 = RM5. Jumlah bahagian mereka = 4 + 7 = 11 bahagian. Jumlah wang mereka = 11 × RM5 = RM55.',
  },
  {
    id: 'soalan-4',
    topic: 'Standard 4.4.2',
    topicMalay: 'Standard 4.4.2 (Nisbah Tiga Bahagian)',
    question: 'Nisbah bilangan guli merah, biru dan hijau ialah 2 : 3 : 4. Jika jumlah guli ialah 45 biji, berapakah bilangan guli biru?',
    options: ['10 biji', '15 biji', '20 biji'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Jumlah bahagian = 2 + 3 + 4 = 9 bahagian. 1 bahagian = 45 ÷ 9 = 5 biji. Bilangan guli biru = 3 bahagian = 3 × 5 = 15 biji.',
  },
  {
    id: 'soalan-5',
    topic: 'Standard 4.4.3',
    topicMalay: 'Standard 4.4.3 (Kadar Penggunaan)',
    question: 'Sebuah kereta menggunakan 5 liter petrol untuk perjalanan sejauh 60 km. Berapakah jarak yang boleh dilalui dengan 15 liter petrol pada kadar penggunaan yang sama?',
    options: ['120 km', '150 km', '180 km'],
    correctIndex: 2, // C
    difficulty: 2,
    explanation: 'Kadar perjalanan 1 liter petrol = 60 km ÷ 5 liter = 12 km/liter. Jarak bagi 15 liter petrol = 15 × 12 km = 180 km (atau 15 liter ialah 3 kali ganda 5 liter: 3 × 60 km = 180 km).',
  },
  {
    id: 'soalan-6',
    topic: 'Standard 4.4.3',
    topicMalay: 'Standard 4.4.3 (Kadaran Harga)',
    question: 'Harga 4 buah buku ialah RM28. Berapakah harga 7 buah buku yang sama?',
    options: ['RM42', 'RM49', 'RM56'],
    correctIndex: 1, // B
    difficulty: 1,
    explanation: 'Harga 1 buah buku = RM28 ÷ 4 = RM7. Harga 7 buah buku = 7 × RM7 = RM49.',
  },
  {
    id: 'soalan-7',
    topic: 'Standard 4.4.4',
    topicMalay: 'Standard 4.4.4 (Penyelesaian Masalah Resipi)',
    question: 'Sebuah resipi memerlukan 2 cawan tepung untuk menghasilkan 8 biji kek cawan. Berapakah cawan tepung yang diperlukan untuk menghasilkan 20 biji kek cawan?',
    options: ['4 cawan', '5 cawan', '6 cawan'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Kadar hasil bagi 1 cawan tepung = 8 ÷ 2 = 4 biji kek cawan. Untuk 20 biji kek cawan = 20 ÷ 4 = 5 cawan tepung diperlukan.',
  },
  {
    id: 'soalan-8',
    topic: 'Standard 4.4.4',
    topicMalay: 'Standard 4.4.4 (Penyelesaian Masalah Kelab)',
    question: 'Nisbah bilangan murid dalam Kelab Matematik kepada Kelab Sains ialah 5 : 3. Jika jumlah murid dalam kedua-dua kelab ialah 64 orang, berapakah bilangan murid dalam Kelab Matematik?',
    options: ['24 orang', '32 orang', '40 orang'],
    correctIndex: 2, // C
    difficulty: 2,
    explanation: 'Jumlah bahagian = 5 + 3 = 8 bahagian. 1 bahagian = 64 ÷ 8 = 8 orang. Bilangan murid dalam Kelab Matematik = 5 bahagian = 5 × 8 = 40 orang.',
  },
  {
    id: 'soalan-9',
    topic: 'Standard 4.4.4',
    topicMalay: 'Standard 4.4.4 (Kadar Harga Seunit)',
    question: 'Sebuah kedai menjual 3 batang pen dengan harga RM6. Berapakah harga 10 batang pen pada kadar yang sama?',
    options: ['RM18', 'RM20', 'RM24'],
    correctIndex: 1, // B
    difficulty: 1,
    explanation: 'Harga 1 batang pen = RM6 ÷ 3 = RM2. Harga bagi 10 batang pen = 10 × RM2 = RM20.',
  },
  {
    id: 'soalan-10',
    topic: 'Standard 4.4.4',
    topicMalay: 'Standard 4.4.4 (Aplikasi Bajet & Wang)',
    question: 'Puan Siti mempunyai bajet RM120 untuk membeli buku nota. Harga sebuah buku nota ialah RM8. Jika beliau membeli 12 buah buku nota, berapakah baki wangnya?',
    options: ['RM16', 'RM24', 'RM32'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Jumlah kos bagi 12 buah buku nota = 12 × RM8 = RM96. Baki wang Puan Siti = RM120 - RM96 = RM24.',
  },
  {
    id: 'soalan-11',
    topic: 'Standard 4.4.2',
    topicMalay: 'Standard 4.4.2 (Jumlah Ternakan)',
    question: 'Nisbah bilangan ayam kepada itik di sebuah ladang ialah 7 : 4. Jika terdapat 28 ekor itik, berapakah jumlah ayam dan itik di ladang tersebut?',
    options: ['49 ekor', '77 ekor', '84 ekor'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Itik = 4 bahagian = 28 ekor. 1 bahagian = 28 ÷ 4 = 7 ekor. Bilangan ayam = 7 × 7 = 49 ekor. Jumlah ayam dan itik = 49 + 28 = 77 ekor (atau 11 bahagian × 7 = 77 ekor).',
  },
  {
    id: 'soalan-12',
    topic: 'Standard 4.4.4',
    topicMalay: 'Standard 4.4.4 (Aplikasi Peratusan Diskaun)',
    question: 'Sebuah kedai menawarkan diskaun 20% untuk sebuah beg yang berharga RM150. Berapakah harga beg tersebut selepas diskaun?',
    options: ['RM100', 'RM120', 'RM130'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Nilai diskaun 20% = (20 ÷ 100) × RM150 = RM30. Harga beg selepas diskaun = RM150 - RM30 = RM120 (atau 80% × RM150 = RM120).',
  },
];
