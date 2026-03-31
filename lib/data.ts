export const personalInfo = {
  nama: 'Muhammad Ashab Ibnu Abdul Aziz',
  panggilan: 'Ashab',
  title: 'Full Stack Developer',
  email: 'azizabib22@gmail.com',
  phone: '085878612964',
  github: 'https://github.com/Abibsa',
  linkedin: 'https://www.linkedin.com/in/abib-aziz-a247813bb/',
  lokasi: 'Jepara, Jawa Tengah, Indonesia',
  kampus: 'UNISNU – Universitas Islam Nahdlatul Ulama Jepara',
  jurusan: 'Teknik Informatika',
  semester: '6',
  ipk: '3.94',
  bio: 'Mahasiswa Teknik Informatika semester 6 dengan IPK 3.94 yang passionate di bidang web development. Berpengalaman membangun aplikasi web fullstack menggunakan Laravel dan Python, dengan pengalaman nyata dari magang di PT Telkom Indonesia dan berbagai proyek freelance.',
}

export type Skill = {
  name: string
  icon: string        // nama icon dari react-icons/si, contoh: 'SiLaravel'
  level: number       // 0-100
  category: 'frontend' | 'backend'
  color: string       // warna hex untuk icon
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: 'SiHtml5', level: 92, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: 'SiCss3', level: 90, category: 'frontend', color: '#1572B6' },
  { name: 'JavaScript', icon: 'SiJavascript', level: 82, category: 'frontend', color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 78, category: 'frontend', color: '#06B6D4' },
  // Backend
  { name: 'Laravel', icon: 'SiLaravel', level: 85, category: 'backend', color: '#FF2D20' },
  { name: 'PHP', icon: 'SiPhp', level: 80, category: 'backend', color: '#777BB4' },
  { name: 'Python', icon: 'SiPython', level: 75, category: 'backend', color: '#3776AB' },
  { name: 'MySQL', icon: 'SiMysql', level: 80, category: 'backend', color: '#4479A1' },
  { name: 'Git', icon: 'SiGit', level: 85, category: 'backend', color: '#F05032' },
  { name: 'GitHub', icon: 'SiGithub', level: 85, category: 'backend', color: '#ffffff' },
]

export type Project = {
  title: string
  desc: string
  longDesc: string
  tech: string[]
  github: string
  demo: string
  badge: string
  badgeColor: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Sistem Informasi Laravel',
    desc: 'Aplikasi CRUD fullstack dengan autentikasi dan manajemen role',
    longDesc: 'Web app sistem informasi berbasis Laravel dengan fitur login/register, manajemen role (admin/user), CRUD data lengkap, dan dashboard statistik menggunakan MySQL sebagai database.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    github: 'https://github.com/Abibsa',
    demo: '#',
    badge: 'Laravel',
    badgeColor: '#FF2D20',
    image: '/projects/project1.jpg',
  },
  {
    title: 'Landing Page Bisnis',
    desc: 'Landing page modern responsif untuk kebutuhan bisnis',
    longDesc: 'Landing page profesional dengan desain modern, animasi scroll, section produk, testimonial, dan form kontak. Dioptimalkan untuk performa dan SEO.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
    github: 'https://github.com/Abibsa',
    demo: '#',
    badge: 'Frontend',
    badgeColor: '#00BFFF',
    image: '/projects/project2.jpg',
  },
  {
    title: 'Data Mining K-Means',
    desc: 'Clustering dataset e-commerce 34.500 baris dengan Python',
    longDesc: 'Proyek data mining menggunakan metode K-Means Clustering pada dataset e-commerce sebanyak 34.500 baris. Menghasilkan 3 cluster dengan visualisasi radar chart dan analisis pola pembelian.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github: 'https://github.com/Abibsa',
    demo: '#',
    badge: 'Python',
    badgeColor: '#3776AB',
    image: '/projects/project3.jpg',
  },
]


export type Experience = {
  tahun: string
  posisi: string
  tempat: string
  desc: string
  icon: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    tahun: '2022 – Sekarang',
    posisi: 'Mahasiswa S1 Teknik Informatika',
    tempat: 'UNISNU – Universitas Islam Nahdlatul Ulama Jepara',
    desc: 'Menempuh pendidikan S1 Teknik Informatika dengan IPK 3.94. Aktif mengerjakan proyek akademis dan penelitian di bidang web development dan data mining.',
    icon: '🎓',
    tags: ['IPK 3.94', 'Web Dev', 'Data Mining'],
  },
  {
    tahun: '2023 – Sekarang',
    posisi: 'Freelance Web Developer',
    tempat: 'Self-employed',
    desc: 'Mengerjakan berbagai proyek web untuk klien meliputi company profile, sistem informasi, dan landing page menggunakan Laravel, HTML, CSS, dan JavaScript.',
    icon: '💼',
    tags: ['Laravel', 'JavaScript', 'HTML/CSS'],
  },
  {
    tahun: '2024',
    posisi: 'Web Developer Intern',
    tempat: 'PT Telkom Indonesia – Jepara',
    desc: 'Magang di PT Telkom Indonesia cabang Jepara. Terlibat dalam pengembangan dan pemeliharaan aplikasi web internal, berkolaborasi dengan tim menggunakan Git.',
    icon: '🏢',
    tags: ['Telkom', 'Web Dev', 'Git'],
  },
]
