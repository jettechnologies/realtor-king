// import heroBanner from "./assets/hero-banner.jpg";
import heroVideo from "./assets/hero-video.mp4";
import brooklineEstate from "./assets/Brookline-estate.jpg";
import jadeEstate from "./assets/Jade-estate.jpg";
import maverickEstate from "./assets/maverick-estate.jpg";
import kansamApartments from "./assets/Kansam_apartment.jpg";
import facebookIcon from "./assets/facebook-icon.png";
import instagramIcon from "./assets/instagram-icon.png";
import locationIcon from "./assets/location-icon.png";


const App = () => {
  return (
    <main className="w-full min-h-screen bg-white font-roboto">
      <header className="w-full h-[4rem] bg-header-bg py-3 px-6 md:px-12 flex items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold capitalize text-white">realtor king</h1>	
      </header>
      <section className="w-full">
        <div className="h-[320px] relative">
          {/* <img src={heroBanner} alt="hero banner" className="w-full h-full object-cover"/> */}
          <video src={heroVideo} autoPlay muted loop className="w-full h-full object-cover"/>
          <div className="w-full h-full absolute top-0 left-0 bg-footer-bg opacity-70">
          </div>
          <div className="relative z-10 -top-2/3 w-full max-sm:pl-6 md:w-[51%] md:ml-16 lg:ml-20">
            <h2 className="font-bold text-2xl text-white md:text-3xl lg:text-4xl leading-10">Your real estate satification is our concern</h2>
          </div>
        </div>
        <div className="w-full px-6 md:px-16 lg:px-20 py-6 flex gap-10  max-sm:flex-col">
          <div className="w-full md:w-[55vw] lg:w-[60vw] p-4 shadow-md">
            <h3 className="font-bold text-lg text-extra lg:text-xl leading-5 mb-3">Reach out to us</h3>
            <p className="text-base font-semibold text-footer-bg leading-[1.15em]">Feel free to browse though some of our estate catalogs through the links below</p>
            <div className="w-full mt-6 flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center py-4">
                <a href="https://wa.me/p/25057539827226925/2347016383381" target="_blank" rel="noopener noreferrer" className="w-full lg:w-[45%] aspect-square">
                  <img src={brooklineEstate} alt="brookline estate banner" className="w-full h-[90%] object-cover mb-3"/>
                  <div className="flex gap-2 w-fit mx-auto">
                    <img src={locationIcon} alt="location icon" className="w-6 h-6 object-cover"/>
                    <p className="text-xl font-bold text-black capitalize">ketu, epe, lagos</p>
                  </div>
                </a>
                <a href="https://wa.me/p/5900554923402471/2347016383381" target="_blank" rel="noopener noreferrer" className="w-full lg:w-[45%] aspect-square">
                  <img src={jadeEstate} alt="jade estate banner" className="w-full h-[90%] object-cover mb-3"/>
                  <div className="flex gap-2 w-fit mx-auto">
                    <img src={locationIcon} alt="location icon" className="w-6 h-6 object-cover"/>
                    <p className="text-xl font-bold text-black capitalize">ido, ibadan, oyo</p>
                  </div>
                </a>
                <a href="https://wa.me/p/7195720537223485/2347016383381" target="_blank" rel="noopener noreferrer" className="w-full lg:w-[45%] aspect-square">
                  <img src={maverickEstate} alt="maverick estate banner" className="w-full h-[90%] object-cover mb-3"/>
                  <div className="flex gap-2 w-fit mx-auto">
                    <img src={locationIcon} alt="location icon" className="w-6 h-6 object-cover"/>
                    <p className="text-xl font-bold text-black capitalize">olodo, ibadan, oyo</p>
                  </div>
                </a>
                <a href="https://wa.me/p/7456227687791648/2347016383381" target="_blank" rel="noopener noreferrer" className="w-full lg:w-[45%] aspect-square">
                  <img src={kansamApartments} alt="kansam apartments banner" className="w-full h-[90%] object-cover mb-3"/>
                  <div className="flex gap-2 w-fit mx-auto">
                    <img src={locationIcon} alt="location icon" className="w-6 h-6 object-cover"/>
                    <p className="text-xl font-bold text-black capitalize">Agodi, ibadan, oyo</p>
                  </div>
                </a>
            </div>
          </div>
          <div className="w-full md:w-[45vw] lg:w-[35vw] p-4 pt-20 flex flex-col gap-y-8">

            <div className="flex items-center gap-4">
              <img src="https://plitsolutions.com/assets/ContactIcon1.b1052c26.png" alt="message icon" className="w-14 h-14 object-cover"/>
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold text-base text-black uppercase">
                  head office
                </h3>
                <p className="font-semibold text-sm text-footer-bg leading-[1.5em]">
                  Kemsan building, beside pemola filling station, monatan,iwo road, oyo state
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://plitsolutions.com/assets/ContactIcon3.8ae87406.png" alt="contact icon" className="w-14 h-14 object-cover"/>
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold text-base text-black uppercase">
                  contact
                </h3>
                <p className="font-semibold text-sm text-footer-bg leading-[1.5em]">
                  +2347016383381
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-base text-black uppercase">or visit our social links</h3>
              <div className="flex gap-x-4 justify-center">
                <a href="https://www.instagram.com/realtorking_" target="_blank" rel="noopener noreferrer" className="w-fit h-8 flex gap-2 ">
                  <img src={instagramIcon} alt="instagram icon" className="w-8 aspect-square object-cover"/>
                  <p className="font-semibold text-sm text-footer-bg leading-[1.5em] self-center">
                    Realtor_king
                  </p>
                </a>
                <a href="https://www.facebook.com/therealtorking?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="w-fit h-8 flex gap-2">
                  <img src={facebookIcon} alt="facebook icon" className="w-8 aspect-square object-cover"/>
                  <p className="font-semibold text-sm text-footer-bg leading-[1.5em] self-center">
                    Realtor_king
                  </p>
                </a>
              </div>
            </div>
            <a href="https://wa.me/2347016383381" target="_blank" rel="noopener noreferrer" className="ml-8 mt-8">
              <img src="data:image/png;base64,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" alt="" className="w-[200px] mt-2"/>
            </a>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-footer-bg">
        <p className="text-center text-base font-medium text-white">Copyright © 2024. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App