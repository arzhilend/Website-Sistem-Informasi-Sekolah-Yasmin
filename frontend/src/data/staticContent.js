const image = (folder, file) => `/images/content/${folder}/${file}`

export const staticNews = [
  {
    id: 1,
    title: 'Kegiatan Belajar Aktif Menumbuhkan Rasa Percaya Diri Siswa',
    slug: 'kegiatan-belajar-aktif',
    location: 'Kampus Yasmin',
    image: image('news', '1764601509_zIzkNiCJEJ.png'),
    date: '2026-01-12',
    excerpt:
      'Pembelajaran dirancang lebih dekat dengan pengalaman siswa melalui diskusi, presentasi, dan praktik kolaboratif di kelas.',
    content:
      'SMA Mutiara Insan Nusantara terus mendorong pembelajaran yang aktif dan bermakna. Guru mengajak siswa berdiskusi, menyampaikan gagasan, dan bekerja dalam kelompok agar kemampuan akademik berjalan seimbang dengan keberanian berkomunikasi.'
  },
  {
    id: 2,
    title: 'Pembiasaan Karakter Melalui Kegiatan Pagi Sekolah',
    slug: 'pembiasaan-karakter-kegiatan-pagi',
    location: 'Lapangan Sekolah',
    image: image('news', '1764611696_NMy9tLPh80.jpeg'),
    date: '2026-01-18',
    excerpt:
      'Kegiatan pagi menjadi ruang pembentukan disiplin, tanggung jawab, dan kepedulian antarwarga sekolah.',
    content:
      'Setiap pagi, siswa mengikuti kegiatan pembiasaan yang menekankan kedisiplinan, kerapian, doa bersama, dan arahan singkat dari guru. Rutinitas ini menjadi bagian dari budaya sekolah yang menumbuhkan karakter baik.'
  },
  {
    id: 3,
    title: 'Kolaborasi Siswa dalam Proyek Kreatif Sekolah',
    slug: 'kolaborasi-siswa-proyek-kreatif',
    location: 'Ruang Kegiatan',
    image: image('news', '1764666601_5R8qafUgiI.png'),
    date: '2026-02-02',
    excerpt:
      'Siswa belajar merancang ide, membagi peran, dan menyelesaikan proyek dengan pendekatan kreatif.',
    content:
      'Proyek kreatif memberi kesempatan bagi siswa untuk mengembangkan kemampuan berpikir kritis dan kerja sama. Setiap kelompok diarahkan menghasilkan karya yang relevan dengan lingkungan sekolah dan kehidupan sehari-hari.'
  },
  {
    id: 4,
    title: 'Semangat Literasi Tumbuh dari Ruang Kelas',
    slug: 'semangat-literasi-ruang-kelas',
    location: 'Perpustakaan',
    image: image('news', '1764842948_7MwYnquTEU.webp'),
    date: '2026-02-14',
    excerpt:
      'Gerakan literasi sekolah membantu siswa membangun kebiasaan membaca, menulis, dan memahami informasi secara bijak.',
    content:
      'Literasi menjadi bagian penting dari proses belajar. Melalui kegiatan membaca terarah dan refleksi singkat, siswa dilatih memahami teks, menyusun pendapat, dan menyampaikan gagasan dengan lebih runtut.'
  },
  {
    id: 5,
    title: 'Kegiatan Sekolah Menguatkan Kebersamaan Warga Yasmin',
    slug: 'kegiatan-sekolah-menguatkan-kebersamaan',
    location: 'Aula Sekolah',
    image: image('news', '1764893646_5naqycSldR.jpg'),
    date: '2026-03-04',
    excerpt:
      'Agenda sekolah menjadi ruang perjumpaan yang memperkuat komunikasi antara siswa, guru, dan lingkungan sekolah.',
    content:
      'Berbagai kegiatan sekolah dirancang untuk menjaga suasana belajar yang hangat. Melalui agenda bersama, siswa belajar menghargai perbedaan, bekerja sama, dan mengambil bagian dalam kehidupan sekolah.'
  },
  {
    id: 6,
    title: 'Siswa Mengikuti Pembinaan Prestasi Akademik dan Nonakademik',
    slug: 'pembinaan-prestasi-akademik-nonakademik',
    location: 'SMA Mutiara Insan Nusantara',
    image: image('news', '1765127251_9HrQpjuWCJ.webp'),
    date: '2026-03-16',
    excerpt:
      'Pembinaan dilakukan secara bertahap agar minat dan potensi siswa berkembang sesuai bidangnya.',
    content:
      'Sekolah memberi ruang pembinaan bagi siswa yang memiliki minat di bidang akademik, olahraga, seni, dan organisasi. Pendampingan guru menjadi kunci agar potensi siswa terarah dan berkelanjutan.'
  }
]

export const staticPrestasi = [
  {
    id: 1,
    title: 'Juara Nasional Olimpiade Ekonomi dan Matematika',
    nama_prestasi: 'Juara Nasional Olimpiade Ekonomi dan Matematika',
    slug: 'juara-nasional-olimpiade-ekonomi-dan-matematika',
    description:
      'Prestasi nasional yang menunjukkan kemampuan siswa dalam berpikir analitis, teliti, dan pantang menyerah.',
    image: image('prestasi', '1764688183_juara-nasional-olimpiade-ekonomi-dan-matematika.webp'),
    category: 'Akademik',
    kategori: 'Akademik',
    level: 'Nasional',
    tingkat: 'Nasional',
    year: 2026,
    tahun: 2026,
    participants: 'Tim Olimpiade Yasmin',
    peserta: 'Tim Olimpiade Yasmin'
  },
  {
    id: 2,
    title: 'Juara Nasional Olimpiade Siswa Indonesia',
    nama_prestasi: 'Juara Nasional Olimpiade Siswa Indonesia',
    slug: 'juara-nasional-olimpiade-siswa-indonesia',
    description:
      'Pencapaian siswa dalam kompetisi tingkat nasional melalui persiapan intensif dan pendampingan guru.',
    image: image('prestasi', '1764688547_juara-nasional-olimpiade-siswa-indonesia-17.webp'),
    category: 'Akademik',
    kategori: 'Akademik',
    level: 'Nasional',
    tingkat: 'Nasional',
    year: 2026,
    tahun: 2026,
    participants: 'Siswa Berprestasi Yasmin',
    peserta: 'Siswa Berprestasi Yasmin'
  },
  {
    id: 3,
    title: 'Juara Umum Tingkat Remaja Tangerang Gemilang',
    nama_prestasi: 'Juara Umum Tingkat Remaja Tangerang Gemilang',
    slug: 'juara-umum-remaja-tangerang-gemilang',
    description:
      'Penghargaan atas kekompakan dan daya juang siswa dalam ajang kompetisi remaja tingkat daerah.',
    image: image('prestasi', '1764688363_juara-umum-tingkat-remaja-tangerang-gemilang.webp'),
    category: 'Nonakademik',
    kategori: 'Nonakademik',
    level: 'Kota/Kabupaten',
    tingkat: 'Kota/Kabupaten',
    year: 2026,
    tahun: 2026,
    participants: 'Kontingen Yasmin',
    peserta: 'Kontingen Yasmin'
  },
  {
    id: 4,
    title: 'Juara 1 Lomba MBG',
    nama_prestasi: 'Juara 1 Lomba MBG',
    slug: 'juara-1-lomba-mbg',
    description:
      'Kreativitas dan kedisiplinan siswa membawa hasil membanggakan dalam kompetisi antar sekolah.',
    image: image('prestasi', '1764922679_juara-1-lomba-mbg.webp'),
    category: 'Kreativitas',
    kategori: 'Kreativitas',
    level: 'Daerah',
    tingkat: 'Daerah',
    year: 2026,
    tahun: 2026,
    participants: 'Tim Kreatif Yasmin',
    peserta: 'Tim Kreatif Yasmin'
  }
]

export const staticGalleries = [
  '1764724571_692f8f5b33e37.webp',
  '1764727416_692f9a787328a.webp',
  '1764728427_692f9e6ba67a8.webp',
  '1764728699_692f9f7bb6549.webp',
  '1764732891_692fafdbb6715.webp',
  '1764734360_692fb598a3506.webp',
  '1764734443_692fb5ebbc3b6.webp',
  '1764734459_692fb5fbf2105.webp',
  '1764734475_692fb60b95cdc.webp'
].map((file, index) => ({
  id: index + 1,
  title:
    [
      'Suasana Belajar',
      'Kegiatan Siswa',
      'Kolaborasi Kelas',
      'Ruang Kreatif',
      'Aktivitas Lapangan',
      'Kebersamaan Sekolah',
      'Pembinaan Karakter',
      'Momen Prestasi',
      'Budaya Sekolah'
    ][index],
  description: 'Dokumentasi kegiatan dan kehidupan sekolah di SMA Mutiara Insan Nusantara.',
  image: image('galleries', file),
  grid_position: index + 1,
  all_images: [{ image_url: image('galleries', file) }]
}))

export const staticTeachers = [
  ['1765200344_rMDuG4PK12.webp', 'Drs. Ahmad Fauzan', 'Kepala Sekolah'],
  ['1765205429_ledmHmKUBd.webp', 'Siti Nurhayati, S.Pd', 'Bahasa Indonesia'],
  ['1765205707_8v6VPnlAR2.webp', 'Dedi Kurniawan, S.Pd', 'Matematika'],
  ['1765205759_TQHe9gkjKN.webp', 'Rina Marlina, S.Pd', 'Bahasa Inggris'],
  ['1765205859_7L4yxOlX4K.webp', 'Agus Setiawan, S.Pd', 'Pendidikan Agama'],
  ['1765205941_R6pRNnLdZf.webp', 'Maya Lestari, S.Pd', 'Biologi'],
  ['1765206058_9pG6Opagbv.webp', 'Bambang Prasetyo, S.Pd', 'Fisika'],
  ['1765206149_veW1Ook2BJ.webp', 'Dewi Anggraini, S.Pd', 'Ekonomi'],
  ['1765206782_tKdsw8PzMR.webp', 'Hendra Saputra, S.Pd', 'Sejarah'],
  ['1765206827_fY2JmN4onM.webp', 'Nadia Putri, S.Kom', 'Informatika'],
  ['1765206868_YnwFGEuBNc.webp', 'Taufik Hidayat, S.Pd', 'PJOK'],
  ['1765206913_BTaKJ1bcyg.webp', 'Lilis Suryani, S.Pd', 'Seni Budaya']
].map(([file, name, subject], index) => ({
  id: index + 1,
  name,
  subject,
  photo: image('guru', file)
}))

export const staticEkskul = [
  {
    id: 1,
    name: 'Pencak Silat',
    category: 'Olahraga',
    tagline: 'Membangun disiplin, keberanian, dan pengendalian diri.',
    description:
      'Pencak silat melatih siswa untuk mengenal seni bela diri Indonesia, menjaga kebugaran, dan membangun sikap hormat kepada pelatih maupun teman latihan.',
    image: image('ekstrakurikuler', '1764657650_692e89f2e615d.png'),
    schedule: 'Selasa, 15.30 WIB',
    location: 'Aula Sekolah',
    mentor: 'Pembina Pencak Silat',
    benefits: ['Melatih disiplin', 'Menjaga kebugaran', 'Membangun percaya diri'],
    max_participants: 30,
    available_slots: 14,
    approved_registrations_count: 16,
    is_slot_full: false,
    is_registration_open: false
  },
  {
    id: 2,
    name: 'Bulu Tangkis',
    category: 'Olahraga',
    tagline: 'Melatih kelincahan, fokus, dan sportivitas.',
    description:
      'Bulu tangkis menjadi wadah bagi siswa untuk mengembangkan kemampuan teknik dasar, stamina, konsentrasi, dan semangat bertanding yang sehat.',
    image: image('ekstrakurikuler', '1764669117_692eb6bd8f0a6.png'),
    schedule: 'Rabu, 15.30 WIB',
    location: 'Lapangan Sekolah',
    mentor: 'Pembina Bulu Tangkis',
    benefits: ['Melatih refleks', 'Meningkatkan stamina', 'Membiasakan sportivitas'],
    max_participants: 25,
    available_slots: 9,
    approved_registrations_count: 16,
    is_slot_full: false,
    is_registration_open: false
  },
  {
    id: 3,
    name: 'Tari',
    category: 'Seni',
    tagline: 'Ruang ekspresi gerak, rasa, dan budaya.',
    description:
      'Ekstrakurikuler tari membantu siswa mengekspresikan diri melalui gerak, mengenal kekayaan budaya, dan tampil percaya diri di berbagai kegiatan sekolah.',
    image: image('ekstrakurikuler', '1764657650_692e89f2e615d.png'),
    schedule: 'Kamis, 15.30 WIB',
    location: 'Ruang Seni',
    mentor: 'Pembina Tari',
    benefits: ['Mengasah ekspresi', 'Melatih kekompakan', 'Menguatkan apresiasi budaya'],
    max_participants: 25,
    available_slots: 11,
    approved_registrations_count: 14,
    is_slot_full: false,
    is_registration_open: false
  },
  {
    id: 4,
    name: 'Bola Basket',
    category: 'Olahraga',
    tagline: 'Menguatkan kerja sama, strategi, dan daya juang.',
    description:
      'Bola basket melatih siswa memahami strategi permainan, koordinasi tim, komunikasi lapangan, serta kebugaran fisik melalui latihan rutin.',
    image: image('ekstrakurikuler', '1764669117_692eb6bd8f0a6.png'),
    schedule: 'Jumat, 15.30 WIB',
    location: 'Lapangan Basket',
    mentor: 'Pembina Basket',
    benefits: ['Melatih kerja sama', 'Meningkatkan koordinasi', 'Membangun mental kompetitif'],
    max_participants: 30,
    available_slots: 12,
    approved_registrations_count: 18,
    is_slot_full: false,
    is_registration_open: false
  },
  {
    id: 5,
    name: 'Bahasa Inggris',
    category: 'Akademik',
    tagline: 'Membiasakan komunikasi global dengan percaya diri.',
    description:
      'Klub Bahasa Inggris mengajak siswa berlatih percakapan, public speaking, kosakata, dan pemahaman budaya internasional secara menyenangkan.',
    image: image('ekstrakurikuler', '1764657650_692e89f2e615d.png'),
    schedule: 'Senin, 15.30 WIB',
    location: 'Ruang Bahasa',
    mentor: 'Pembina Bahasa Inggris',
    benefits: ['Melatih speaking', 'Menambah kosakata', 'Meningkatkan percaya diri'],
    max_participants: 28,
    available_slots: 8,
    approved_registrations_count: 20,
    is_slot_full: false,
    is_registration_open: false
  },
  {
    id: 6,
    name: 'Bahasa Jepang',
    category: 'Akademik',
    tagline: 'Mengenal bahasa, budaya, dan etos belajar Jepang.',
    description:
      'Klub Bahasa Jepang memperkenalkan percakapan dasar, huruf Jepang, budaya populer, dan kebiasaan belajar yang rapi serta konsisten.',
    image: image('ekstrakurikuler', '1764669117_692eb6bd8f0a6.png'),
    schedule: 'Selasa, 15.30 WIB',
    location: 'Ruang Bahasa',
    mentor: 'Pembina Bahasa Jepang',
    benefits: ['Mengenal hiragana dasar', 'Belajar percakapan', 'Memahami budaya Jepang'],
    max_participants: 28,
    available_slots: 13,
    approved_registrations_count: 15,
    is_slot_full: false,
    is_registration_open: false
  }
]

export const staticTestimonials = [
  {
    id: 1,
    name: 'Ibu Rani',
    role: 'Wali Murid',
    content:
      'Sekolah memberi perhatian pada perkembangan anak, baik akademik maupun karakter. Komunikasi dengan guru juga terasa terbuka.'
  },
  {
    id: 2,
    name: 'Fajar Ramadhan',
    role: 'Alumni',
    content:
      'Lingkungan sekolah membantu saya lebih percaya diri. Banyak pengalaman organisasi dan kegiatan yang masih terasa manfaatnya.'
  },
  {
    id: 3,
    name: 'Nadia Putri',
    role: 'Peserta Didik',
    content:
      'Belajar di sini terasa dekat dengan guru. Kami didorong aktif bertanya, mencoba, dan ikut kegiatan sesuai minat.'
  },
  {
    id: 4,
    name: 'Bapak Hendra',
    role: 'Wali Murid',
    content:
      'Kami merasa terbantu karena sekolah tidak hanya mengejar nilai, tetapi juga membiasakan anak untuk disiplin dan bertanggung jawab.'
  },
  {
    id: 5,
    name: 'Aulia Safitri',
    role: 'Alumni',
    content:
      'Guru-gurunya sabar dan suportif. Dari kegiatan kelas sampai ekstrakurikuler, saya belajar banyak tentang kerja sama dan percaya diri.'
  }
]

export const staticHomeData = {
  featuredNews: staticNews,
  galleries: staticGalleries,
  prestasi: staticPrestasi,
  ekstrakurikuler: staticEkskul,
  testimonials: staticTestimonials
}

export const staticPageData = {
  '/public/home': staticHomeData,
  '/public/news': {
    news: {
      data: staticNews,
      current_page: 1,
      last_page: 1,
      total: staticNews.length
    }
  },
  '/public/prestasi': {
    prestasi: {
      data: staticPrestasi,
      current_page: 1,
      last_page: 1,
      total: staticPrestasi.length
    }
  },
  '/public/guru': {
    guru: staticTeachers
  },
  '/public/profil': {
    guru: staticTeachers.slice(0, 8)
  },
  '/public/ppdb': {
    documents: []
  },
  '/public/ppdb/landing': {
    academicYear: '2026/2027'
  }
}

export const getStaticPageData = (endpoint) => staticPageData[endpoint] || {}
