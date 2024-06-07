'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-black">
      <div className="w-full max-w-[840px] mx-auto">
        <h1 className="text-8xl mb-4">Give up, give up!</h1>
        <p className="text-2xl text-black/60 mb-4">Get some kafkian advices.</p>
        <div>
          <Link href={'/chat'}>
            <button className="bg-gray-600 px-4 py-2 rounded-lg text-xl text-white flex items-center">
              <span className="mr-1">get started</span> <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
