import {
  type IconType,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiPrisma,
  SiExpress,
  SiKotlin,
  SiAndroid,
  SiFlutter,
  SiPostgresql,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
        {
          skill: 'kotlin',
          icon: SiKotlin,
        },
        {
          skill: 'android',
          icon: SiAndroid,
        },
        {
          skill: 'flutter',
          icon: SiFlutter,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'Express',
          icon: SiExpress,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'Laravel',
          icon: SiLaravel,
        },
        {
          skill: 'Prisma ORM',
          icon: SiPrisma,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        }
      ],
    },
  ]

export default SKILLS
