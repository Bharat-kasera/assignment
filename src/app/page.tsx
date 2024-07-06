import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import BusinessStats from '@/sections/BusinessStats'
import Clients from '@/sections/Clients'
import Design from '@/sections/Design'
import Hero from '@/sections/Hero'
import Manage from '@/sections/Manage'
import Marketing from '@/sections/Marketing'
import MeetAllCustomers from '@/sections/MeetAllCustomers'
import Pixelgrade from '@/sections/Pixelgrade'
import Demo from '@/sections/Demo'
import FooterComponent from '@/components/FooterComponent'





export default function Home() {

  return (
    <div>
      <section className='bg-[#F5F7FA] relative dark:bg-gray-900'>
        <Hero />
      </section>
      <section className='bg-[#FFFFFF] relative dark:bg-gray-950' >
        <Clients />
      </section>
      <section className='bg-[#FFFFFF] relative dark:bg-gray-950' >
        <Manage/>
      </section>
      <section className='bg-[#FFFFFF] relative dark:bg-gray-950' >
        <Pixelgrade/>
      </section>
      <section className='bg-[#F5F7FA] relative dark:bg-gray-900 ' >
        
        <BusinessStats/>
      </section>
      <section className='bg-[#FFFFFF] relative dark:bg-gray-950' >
        <Design/>
      </section>
      <section className='bg-[#F5F7FA] relative dark:bg-gray-900' >
        <MeetAllCustomers/>
      </section>
      <section className='bg-[#FFFFFF] relative dark:bg-gray-950' >
        <Marketing/>
      </section>
      <section className='bg-[#F5F7FA] relative dark:bg-gray-900' >
        <Demo/>
      </section>
      <section className='bg-gray-800 relative dark:bg-gray-950' >
        <FooterComponent/>
      </section>


    </div>
  )
}
