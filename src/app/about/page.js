import Image from 'next/image'
import Link from 'next/link'

//This page.js file is located inside the /about directory, so its URL path becomes 'example.com/about'

export default function Home1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> 
        You are now on the <Link href="/">about page!</Link>
      </div>
    </main>
  )
}
