"use client"

import Links from '@/components/links'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">
                <Typewriter
              options={{
              strings: [
                'Akmal Irsyad', 
                'Dwi Yulianto',
                'FullStack Dev',
                'WordPress Dev',
                'Freelancer',
                'Shutterstock Contributor'
              ],
              autoStart: true,
              loop: true,
              }}
          />
        </h1>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Akmal Irsyad Dwi Yulianto, I am a FullStack Dev and undergraduate student living in Bekasi city.</p>

        <br />

        <p>
          Visit My GitHub.{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/AkmalIrsyad"
          >
            github repo
          </a>{' '}
          for more info.
        </p>
      </div>
      <Links />
    </div>
  )
}
