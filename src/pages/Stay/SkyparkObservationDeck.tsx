import { useState } from 'react'
import bannerPC from '~/assets/skypark-obs-deck-masthead-desktop-1920x823.jpg'
import bannerMobile from '~/assets/skypark-obs-deck-masthead-mobile-1080x1440.jpg'
import weekdayVacationTile from '~/assets/weekday-vacation-tile-1920x1080.avif'
import { ButtonBlack } from '../Shop/Shopping'
import { Link } from 'react-router-dom'

const SkyparkObservationDeck = () => {
  const dataSlide1 = [1, 2, 3]
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
          <h1 className='uppercase text-[40px] text-center mb-10'>A Paradise That’s Tailored to You</h1>

          <p className='text-center text-[16px] mb-4'>
            From 17 Jan, discover the past, present and future of Marina Bay Sands at Skyline Singapore: Stories From
            Above, a new showcase at SkyPark Observation Deck.
          </p>
          <p className='text-center text-[16px] mb-4'>
            Explore the city from a new vantage point at 56 storeys high, where the scenic view of Singapore’s
            world-class cityscape is uniquely breathtaking. Feast your eyes on the lush Gardens by the Bay and the
            city’s iconic landmarks, such as the durian-shaped domes of the Esplanade.
          </p>
          <p className='text-center text-[16px] mb-4'>
            In the evening, the observation deck also offers a spectacular view of Spectra.
          </p>

          <p className='text-center text-[16px] mb-4'>
            For a more intimate viewing experience, opt for Sunset in the Sky, an exclusive programme complete with
            priority access via a private entry point, dedicated seating areas and premium dining menu.
          </p>
          <button className='bg-black block mx-auto mt-6 mb-10 hover:bg-gray-400 text-white uppercase px-5 py-2 transition-all duration-300 text-[16px]'>
            book tickets
          </button>
        </div>
      </div>
      <div className=' py-10 px-4 lg:px-0'>
        <div className='bg-[#e4e0e0] lg:w-[59pc] 2xl:w-[978pt] mx-auto'>
          <Accordion title='Notice'>
            <p>
              SkyPark Observation Deck will close on the following dates at 9pm for Silent Disco Full Moon Parties (Last
              entry at 8pm)
            </p>
          </Accordion>
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
          <Accordion title='Ticket Prices'>
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
      {/* <div className=' py-20 px-4 lg:px-0'>s</div> */}
      <Slider dataSlide={dataSlide1} title={`WHAT'S ON`}></Slider>
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
              The Sands SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion size='sm' line title='What happens if it rains?' unuppercase fontSize='text-lg'>
            <p className='mb-5'>
              The Sands SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
              4.30pm (Last entry 4pm), Peak Hours: 5pm – 10pm (Last entry 9.30pm).
            </p>
            <p className='mb-5'>
              The Observation Deck may be closed for private events or commercial commitments at certain times. Please
              call ahead at +65 6688 8826 to check if the Observation Deck will be open on the day you wish to visit.
            </p>
          </Accordion>
          <Accordion size='sm' line title='Is there a souvenir shop?' unuppercase fontSize='text-lg'>
            <p className='mb-5'>
              The Sands SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
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
              The Sands SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
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
              The Sands SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
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
              The Sands SkyPark — including the Observation Deck — is open from 10am to 10pm. Non Peak Hours: 10am –
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

export const Accordion = ({
  children,
  title,
  unuppercase,
  fontSize,
  size = 'md',
  line = false
}: {
  children: React.ReactNode
  title: string
  unuppercase?: boolean
  fontSize?: string
  size?: string
  line?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`  transition-all duration-300  ${line ? 'border-b border-gray-300' : ''}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center  cursor-pointer ${size === 'sm' ? 'py-5 ' : 'py-10 px-[15px] md:py-10 md:px-[100px] '
          }`}
      >
        <div className={`text-xl ${fontSize} ${unuppercase ? '' : 'uppercase'}`}>{title}</div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className={`lucide lucide-chevron-up transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d='m18 15-6-6-6 6' />
        </svg>
      </div>
      <div
        className={` transition-all duration-300 overflow-hidden ${size === 'sm' ? 'pb-0' : 'px-[15px] md:px-[100px]'
          } ${isOpen ? 'pb-10 max-h-[1000px]' : 'pb-0 max-h-[0px]'}`}
      >
        <>{children}</>
      </div>
    </div>
  )
}

export const Slider = ({
  tag = false,
  dataSlide,
  title,
  background,
  description,
  buttonTitle = 'Discover more',
  button2 = false
}: {
  tag?: boolean
  dataSlide: number[]
  title: string
  background?: string
  description?: string
  buttonTitle?: string
  button2?: boolean
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className={`py-20 overflow-hidden ${background}`}>
      <h2 className={`text-center uppercase text-2xl  lg:text-[32px] ${description ? 'mb-4' : 'mb-20'}`}>{title}</h2>
      {description && <p className='text-center text-[16px] max-w-[888px] mx-auto mb-20'>{description}</p>}
      <div className='lg:w-[59pc] 2xl:w-[978pt] mx-auto flex px-4 lg:px-0 relative '>
        <button
          onClick={() => {
            if (currentIndex < dataSlide.length - 3) {
              setCurrentIndex(currentIndex + 1)
            }
          }}
          className={`${currentIndex === dataSlide.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } absolute hover:bg-gray-200 transition-all duration-300 z-10 right-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-chevron-right'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </button>
        <button
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1)
            }
          }}
          className={`${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } absolute hover:bg-gray-200 transition-all duration-300 z-10 left-5 top-1/2 -translate-y-1/2 bg-gray-300 cursor-pointer rounded-full p-2`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-chevron-right rotate-180'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </button>
        <div
          style={{ transform: `translateX(-${(978 / 3) * currentIndex}pt)` }}
          className='w-max transition-all duration-300 flex gap-x-10'
        >
          {dataSlide.map((_, index) => (
            <div key={index} className='w-[calc(79pc/3-30px)] lg:w-[calc(59pc/3-30px)] 2xl:w-[calc(978pt/3-30px)]'>
              <div>
                <img src={weekdayVacationTile} alt='weekdayVacationTile' />
              </div>
              <p className='text-xl  uppercase my-5'>Weekday Escapade

                {tag && <p className='text-sm pt-2 uppercase'>Weekday {" "}|{" "} Escapade</p>}
              </p>

              <p className='text-[16px] text-[#333333] mb-10'>
                Experience the newly restored Sands Premier Room, stylishly fitted with a deep soaking bathtub and
                walk-in wardrobe. Begin each day with a sumptuous breakfast buffet, and take a dip in our world-famous
                SkyPark Infinity Pool.
              </p>
              <button className='uppercase text-[15px]  pt-3 pb-2.5 px-4  relative hover:opacity-60  group transition-all duration-300'>
                {buttonTitle}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-black group-hover:opacity-60 group-hover:w-[70%] transition-all duration-300'></div>
              </button>
              {button2 && (
                <div>
                  <Link to='/booking'>
                    <ButtonBlack className='float-left' title='Reserve Now' />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default SkyparkObservationDeck
