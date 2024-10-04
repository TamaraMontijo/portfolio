'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { AiOutlineFileText } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/src/lib/animations'
import { HomePageInfo } from '@/src/@types/page-info'
import { RichText } from '@/src/components/rich-text'
import { TechBadge } from '@/src/components/tech-badge'
import { CMSIcon } from '@/src/components/cms-icon'
import { Button } from '@/src/components/button'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono">Hello, my name is</p>
          <h2 className="text-4xl text-gray-950 font-medium mt-2">
            Tamara Montijo
          </h2>

          <div className="text-gray-600 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {homeInfo.technologies.map((tech, index) => (
              <TechBadge
                key={`intro-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.07 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Link
              href={
                'https://docs.google.com/document/d/11izzRdCmCD5PedfagkgKXbz0kafC9_jW/edit?usp=sharing&ouid=108694816706060015185&rtpof=true&sd=true'
              }
              target="_blank"
              className="w-full sm:w-max"
              rel="noreferrer"
              aria-label={`Link to Tamara Montijo Resume`}
            >
              <Button className="w-full sm:w-max shadow-button bg-gray-50 text-gray-700 hover:text-gray-50 mb-3 sm:mb-0">
                Resume <AiOutlineFileText size={18} />
              </Button>
            </Link>

            <Button
              className="w-full sm:w-max shadow-button"
              onClick={handleContact}
            >
              Get in touch <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3 justify-center sm:justify-start">
              {homeInfo.socials.map((contact, index) => (
                <Link
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                  aria-label={`Link to ${contact.name}`}
                >
                  <CMSIcon icon={contact.iconSvg} />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {homeInfo.profilePicture?.url && (
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Profile pic of Tamara Montijo"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
            priority
          />
        )}
      </div>
    </section>
  )
}
