import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ParagraphDiv = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="paragraphDiv" className='px-[11vw] mt-[10vw] w-full flex flex-col items-end gap-[10vw]'>
      {/* Section 1 */}
      <div id="feature1" className='w-[40%] flex flex-col justify-start items-end' data-aos="fade-up">
        <h5 className='leading-tight text-5xl'>Unique Pottery Designs</h5>
        <p className='leading-normal text-xl mt-[2vw]'>Discover our unique pottery designs that blend traditional craftsmanship with modern aesthetics. Each piece is handcrafted to perfection.</p>
      </div>

      {/* Section 2 */}
      <div id="feature2" className='w-[40%] flex flex-col justify-start items-end' data-aos="fade-up">
        <h5 className='leading-tight text-5xl'>High-Quality Materials</h5>
        <p className='leading-normal text-xl mt-[2vw]'>We use only the highest quality clay and glazes to ensure that our pottery is not only beautiful but also durable and long-lasting.</p>
      </div>

      {/* Section 3 */}
      <div id="feature3" className='w-[40%] flex flex-col justify-start items-end' data-aos="fade-up">
        <h5 className='leading-tight text-5xl'>Custom Orders</h5>
        <p className='leading-normal text-xl mt-[2vw]'>We offer custom orders to bring your vision to life. Whether it’s a personalized gift or a custom piece for your home, we’ve got you covered.</p>
      </div>
    </div>
  );
}

export default ParagraphDiv;
