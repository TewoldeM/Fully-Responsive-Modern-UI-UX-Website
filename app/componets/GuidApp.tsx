import Image from 'next/image'
const GuidApp = () => {
  return (
<section className='flexCenter flex-col'>
<div className='padding-container max-container w-full pb-24'>
  <Image
   src="/camp.svg" 
   alt="camp" 
   width={50}
  height={50}
/>
  <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
    We are here for you
  </p>
  <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
    <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
      You to Easy path
    </h2>
    <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
    offers an immersive outdoor experience. Pitch tents, explore nature, and bond with loved ones. Enjoy campfires, starry nights, and tranquil surroundings. Adventure seekers can hike, fish, and engage in thrilling activities. Unplug, unwind, and create lasting memories amidst the beauty of nature.
    </p>
  </div>
</div>
<div className="flexCenter max-container relative w-full">
  <Image 
  src="/boat.png"
  alt="boat"
  width={1440}
  height={500}
  className='w-full object-cover object-center 2xl:rounded-5xl'
  
  
  />
<div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]">
<Image 
src="/meter.svg"
alt="meter"
width={16}
height={158}
className='h-full w-auto'
/>
<div className="flexBetween flex-col">
<div className='flex w-full flex-col'>
<div className='flexBetween w-full gap-1'>
  <p className='regular-16 text-gray-20'>Destination</p>
  <p className='bold-16 text-green-50'>1hr</p>
</div>
<p className='bold-20 mt-2'>Entotot</p>
</div>


<div className='flex w-full flex-col'>
  <p className='regular-16 text-gray-20'>Start Track</p>
  <h4 className='bold-20 text-green-50 whitespace-nowrap'>AdisAbeba</h4>
</div>

</div>
</div>
</div>
</section>
  )
}

export default GuidApp
