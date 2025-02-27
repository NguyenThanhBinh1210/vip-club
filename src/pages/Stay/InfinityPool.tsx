import bannerPC from '~/assets/infinity-masthead-desktop-1920x823.webp'
import bannerMobile from '~/assets/infinity-masthead-mobile-1080x1440.webp'
import { Accordion, Slider } from './SkyparkObservationDeck'

const InfinityPool = () => {
  const dataSlide2 = [1, 2, 3, 4, 5]
  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt='bannerMobile'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-20 pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>SKYPARK INFINITY POOL</h1>

          <p className='text-center text-[16px] mb-4'>
            Renowned for a reason.


          </p>
          <p className='text-center text-[16px] mb-4'>
            Gain a whole new perspective at the largest rooftop infinity pool in the world. Float among the clouds, bask in the sun or lounge under swaying palm trees at our iconic eyrie, 57 storeys above the glittering city.


          </p>



          <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
            book a room
          </button>
        </div>
      </div>

      <div className='bg-[#f0f1eb] py-10 px-4 lg:px-0'>
        <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto grid md:grid-cols-2 gap-x-10 gap-y-10'>
          <Accordion title='Details'>
            <p className='uppercase mb-5'>Location</p>
            <p>Hotel Tower 3, Level 56</p>
            <p>Entrance to the SkyPark Observation Deck is accessible via the Hotel Tower 3 driveway.</p>
            <p className='uppercase mb-5 mt-5'>Opening Hours</p>
            <ul className='list-disc pl-5 space-y-4 mb-5'>
              <li>Non-peak: 10am – 4.30pm (Last entry at 4pm)</li>
              <li>Peak: 5pm – 10pm (Last entry at 9.30pm)</li>
            </ul>
          </Accordion>
          <Accordion title='Operating Hours'>
            <p className='uppercase mb-5'>Location</p>
            <p>Hotel Tower 3, Level 56</p>
            <p>Entrance to the SkyPark Observation Deck is accessible via the Hotel Tower 3 driveway.</p>
            <p className='uppercase mb-5 mt-5'>Opening Hours</p>
            <ul className='list-disc pl-5 space-y-4 mb-5'>
              <li>Non-peak: 10am – 4.30pm (Last entry at 4pm)</li>
              <li>Peak: 5pm – 10pm (Last entry at 9.30pm)</li>
            </ul>
          </Accordion>
        </div>
      </div>
      <div className=' py-20 px-4 lg:px-0 lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
        <h2 className='text-center uppercase text-2xl mb-10 lg:text-[32px]'>FREQUENTLY ASKED QUESTIONS</h2>

        <div>
          <Accordion
            size='sm'
            line
            title='What are the opening hours for Sands SkyPark?'
            unuppercase
            fontSize='text-lg'
          >
            <p className='mb-5'>
              Let's Vip SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion size='sm' line title='What happens if it rains?' unuppercase fontSize='text-lg'>
            <p className='mb-5'>
              Let's Vip SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion size='sm' line title='Is there a souvenir shop?' unuppercase fontSize='text-lg'>
            <p className='mb-5'>
              Let's Vip SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion
            size='sm'
            line
            title='Are any items prohibited on the SkyPark Observation Deck?'
            unuppercase
            fontSize='text-lg'
          >
            <p className='mb-5'>
              Let's Vip SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion
            size='sm'
            line
            title='Can I visit other areas of Sands SkyPark with my SkyPark Observation Deck Ticket?'
            unuppercase
            fontSize='text-lg'
          >
            <p className='mb-5'>
              Let's Vip SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion
            size='sm'
            line
            title='Are there other conditions of entry to the SkyPark Observation Deck?'
            unuppercase
            fontSize='text-lg'
          >
            <p className='mb-5'>
              Let's Vip SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
        </div>
      </div>
      <Slider dataSlide={dataSlide2} title='WE THINK YOU’D ALSO LIKE'></Slider>
    </div>
  )
}


export default InfinityPool
