import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
        Junior Fullstack Developer with basic skills in backend development using PHP and Laravel, as well as
        frontend using JavaScript, Next Js framework and Node.js. Experienced in creating and using REST APIs for system integration.
        Master the use of Bootstrap and Tailwind CSS to build responsive and attractive user interfaces. Enthusiastic
        to continue learning and developing through best practices and teamwork.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
