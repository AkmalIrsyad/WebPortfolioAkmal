import {
  IconType,
  SiFiverr,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiShutterstock,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:akmalirsyad137@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/AkmalIrsyad',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/akmal-irsyad-188ab4247/?profileId=ACoAAD01fvgBQEeC8gocshhEgUoI3gtvxPTPHoo',
    },
    {
      icon: SiFiverr,
      href: 'https://www.fiverr.com/gogoro29/create-design-ui-ux-for-a-website-in-figma',
    },
    {
      icon: SiShutterstock,
      href: 'https://www.shutterstock.com/g/akmal+irsyad%20dwi%20yulianto?rid=375869959',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
