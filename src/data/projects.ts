const PROJECTS: {
  name: string
  description: string
  previewImage: string
  images: string[]
  repoUrl: string
  liveLink: string
  youtubeId?: string
}[] = [
    {
      name: 'GogoroOto ',
      description: `GogoroOto adalah platform web yang mempermudah jual beli mobil baik baru maupun bekas. Website tersebut menampilkan katalog mobil dengan informasi lengkap seperti spesifikasi, harga, dan gambar mobil yang menarik.
      Dengan TechStack Nextjs (TypeScript) dan Tailwind CSS`,
      liveLink: 'https://gogoro-oto.vercel.app/about',
      youtubeId: '1YpbR3k6Tcs',
      previewImage: '/gogoroOto.png',
      images: [
        '/gogoroOto.png',
        'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop'
      ],
      repoUrl: 'https://github.com/AkmalIrsyad/GogoroOto',
    },

    {
      name: 'WebBarudak 4KA28 ',
      description: `Website Kelas Kampus menggunakan Framework Laravel + tailwindWebsite Kelas menggunakan Framework Laravel + tailwind,
*Menggunakan CRUD sederhana dan relasi One to Many dengan database MySQL.
**Website ini menggunakan API OpenWeatherMap untuk mengambil data cuaca saat ini. Integrasi ini memungkinkan pengguna untuk mendapatkan informasi cuaca real-time, termasuk suhu, kelembapan, kecepatan angin, dan kondisi cuaca lainnya untuk lokasi yang dipilih.`,
      liveLink: 'https://web4ka28.my.id/dashboard',
      youtubeId: 'onKOdD3WytM',
      previewImage: '/webbarudak.png',
      images: ['/webbarudak.png'],
      repoUrl: 'https://github.com/AkmalIrsyad/web2ka28',
    },
    {
      name: 'fetching Weather API data with golang web',
      description: `Memahami Integrasi API dengan Golang: Memperdalam pemahaman tentang bagaimana mengintegrasikan API dengan aplikasi yang dikembangkan menggunakan Golang.
Mengolah dan Menyajikan Data Cuaca: Mengolah data cuaca yang diambil dari API sehingga dapat ditampilkan dalam format yang informatif dan mudah dipahami oleh pengguna.`,
      liveLink: 'https://golangweb.my.canva.site/',
      previewImage: '/go.png',
      images: ['/go.png'],
      repoUrl: 'https://github.com/AkmalIrsyad/fetching-Weather-API-data-with-golang-web',
    },
    {
      name: 'Freelance Web Design',
      description: 'I will create website design and landing page in figma',
      liveLink: 'https://www.fiverr.com/gogoro29/create-design-ui-ux-for-a-website-in-figma',
      previewImage: '/fvr.png',
      images: ['/fvr.png'],
      repoUrl: 'https://github.com/AkmalIrsyad/web2ka28',
    },
    {
      name: 'Aplikasi Management Parkir dengan Vb.net',
      description: 'Tujuan pembuatan Aplikasi ini untuk menyelesaikan Tugas Akhir Matkul PBO semester 2',
      liveLink: 'https://www.canva.com/design/DAFnkilDsj0/3vbnbDLYZQvul3hw4xYOcw/view',
      previewImage: '/dekstop.png',
      images: ['/dekstop.png'],
      repoUrl: 'https://drive.google.com/file/d/17BESqHqEPP5D1CXw35PmrwWJgjKzcRXu/view?usp=sharing',
    },
    {
      name: 'Landmark AI',
      description: `Aplikasi Android yang bisa mengenali Landmark Asia secara real-time langsung dari kamera HP.
      📱 Android + Jetpack Compose untuk UI-nya
      🤖 TensorFlow Lite untuk inferensi model di perangkat
      📷 CameraX untuk analisis gambar real-time
      🧠 Pre-trained model dari Kaggle untuk klasifikasi landmark`,
      liveLink: '#',
      youtubeId: '39WkZAzEaSk',
      previewImage: 'ai_lanmark.png',
      images: [
        'ai_lanmark.png',
      ],
      repoUrl: '#',
    },
    {
      name: 'RusBlog',
      description: `Aplikasi Blog interaktif yang dibangun menggunakan ekosistem Flutter dan Laravel.
      ✨ RESTful API & Authentication
      ✨ Optimistic UI Updates (Like feature)
      ✨ Nested Comments System (Reply)
      ✨ Image Handling & Storage Management`,
      youtubeId: '-F1ZOdPVo-U?si=T8JoehONzApXIQ11',
      liveLink: 'https://rusblog.my.id/api/posts',
      previewImage: 'banner_rus.png',
      images: [
        '/1.png',
        '/2.png',
        '/3.png',
        'banner_rus.png',
        'play_st.png'
      ],
      repoUrl: '#',
    },
    {
      name: 'Slicing WhatsApp Flutter',
      description: 'Slicing UI WhatsApp menggunakan Flutter untuk melatih kemampuan layouting dan UI/UX implementation.',
      liveLink: '#',
      youtubeId: '5VhmbNy8Ud0',
      previewImage: 'wa.png',
      images: [
        'wa.png',
      ],
      repoUrl: '#',
    },
    {
      name: 'CCTV Kota Bekasi',
      description: `Remake web CCTV publik Bekasi dengan fokus pada pembaruan UI & User Experience.
      🛠️ Neo Brutalism UI Style
      🛠️ Google Street View Integration
      🛠️ M3U8 Online Streaming
      🛠️ TypeScript & shadcn/ui`,
      liveLink: 'https://cctv-bekasi.vercel.app/',
      youtubeId: 'TylunpSco5E', // Masukkan ID video YouTube di
      previewImage: 'cctv-bekasi.png',
      images: [
        '/cctv-bekasi.png',
      ],
      repoUrl: '#',
    },
    {
      name: 'Moolax Custom Baju',
      description: `Website Custom Baju menggunakan Laravel, Vue.js, dan MySQL. Dilengkapi dengan optimasi OG Tag (Open Graph) untuk preview link yang menarik saat dibagikan di media sosial.`,
      liveLink: 'https://moolax.web.id',
      youtubeId: '50URgEfpfsY',
      previewImage: 'detail-moolax.png',
      images: [
        'detail-moolax.png',
        'moolax.png',
        'header_moolax.png',
        'dashboard_admin_moolax.png',
        'kategori_moolax.png',
        'produk_admin_moolax.png',
        'OG_moolax.png',
        'brand_admin_moolax.png',
        'banner_admin_moolax.png',
      ],
      repoUrl: '#',
    },
  ]

export default PROJECTS
