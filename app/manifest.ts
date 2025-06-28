import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IMMK UI - Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia',
    short_name: 'IMMK UI',
    description: 'Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A2463',
    theme_color: '#0A2463',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/immk-logo.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
    categories: ['education', 'business'],
    lang: 'id',
    dir: 'ltr',
  }
} 