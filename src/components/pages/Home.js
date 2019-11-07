import React from "react";
import '../../asset/css/eric.css';
import '../../asset/css/house.css';
import hero from '../../asset/hero1.svg';
import hero2 from '../../asset/hero2.svg';
import julia from '../../asset/julia.jpg';
import kettle from '../../asset/icons/electric-kettle.svg';
import avatar1 from '../../asset/avatar/mrTayo.jpg';
import avatar2 from '../../asset/avatar/avatar2.jpg';
export default function Home() {
  return (
    <div className='flex col-lg-6 justify-content-center'>
    <div className='flex col-lg-5 column nowrap'>
      <section className='flex nowrap hero align-items-center'>
        <img className='img-500 img-cover' src={hero} alt='heroimage'/>
        <div className='flex column nowrap align-items-start mar-lr-20'>
          <p className='text-25'>Get Work Done Faster On houseKeep</p>
          <p className='text-13 strong'>With Confidence</p>
          <div className='hero-search flex align-items-center'>
            <input type='text' placeholder='Try "Gardener" '/>
            <button>Search</button>
          </div>
        </div>
      </section>

      <section>
        <ol className='flex flex-wrap services-ol'>
        <li className='active'>
          <a href='fb.com' className='flex align-items-center column nowrap'>
            <img className='icon-40' src={kettle} alt='kettle-icon'/>
            <p className='text-12 service-name'>Chef</p>
          </a>
        </li>
        <li>
          <a href='fb.com' className='flex align-items-center column nowrap'>
            <img className='icon-40' src={kettle} alt='kettle-icon'/>
            <p className='text-12 service-name'>Chef</p>
          </a>
        </li>
        <li>
          <a href='fb.com' className='flex align-items-center column nowrap'>
            <img className='icon-40' src={kettle} alt='kettle-icon'/>
            <p className='text-12 service-name'>Chef</p>
          </a>
        </li>
        </ol>
      </section>

      <section>
        <ol className='flex flex-wrap justify-content-center profile-ol'>
        <li className='flex column nowrap card-view'>
            <img className='avatar' src={avatar1} alt='userimage'/>
            <div className='flex column nowrap pf-info'>
              <p className='strong'>Mr Tayo | Electrician</p>
              <div className='flex'>
              <i class="material-icons">star_border</i>
                <p className='strong'>4.8</p>
                <p className='color-ash'> &nbsp;&nbsp;Airport rd. Lagos</p>
              </div>
            </div>
          </li>
          <li className='flex column nowrap card-view'>
            <img className='avatar' src={avatar2} alt='userimage'/>
            <div className='flex column nowrap pf-info'>
              <p className='strong'>Elizabeth Azeez | Baby sitter</p>
              <div className='flex'>
              <i class="material-icons">star_border</i>
                <p className='strong'>3.6</p>
                <p className='color-ash'> &nbsp;&nbsp;Montgomery Yaba, Lagos</p>
              </div>
            </div>
          </li>
          <li className='flex column nowrap card-view'>
            <img className='avatar' src={avatar1} alt='userimage'/>
            <div className='flex column nowrap pf-info'>
              <p className='strong'>Mr Tayo | Electrician</p>
              <div className='flex'>
              <i class="material-icons">star_border</i>
                <p className='strong'>4.8</p>
                <p className='color-ash'> &nbsp;&nbsp;Airport rd. Lagos</p>
              </div>
            </div>
          </li>
          <li className='flex column nowrap card-view'>
            <img className='avatar' src={avatar2} alt='userimage'/>
            <div className='flex column nowrap pf-info'>
              <p className='strong'>Elizabeth Azeez | Baby sitter</p>
              <div className='flex'>
              <i class="material-icons">star_border</i>
                <p className='strong'>3.6</p>
                <p className='color-ash'> &nbsp;&nbsp;Montgomery Yaba, Lagos</p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      <section className='flex mar-t-100'>
        <ol className='fact-ol'>
          <li>
            <p className='text-30 strong'>Do more with less</p>
          </li>
          <li>
            <p className='strong flex align-items-center'> <i class="material-icons success-icon">check_circle_outline</i> &nbsp;&nbsp;&nbsp;Payment protection garanteed</p>
            <p>Payment is released to the freelancer once you’re pleased and approve the work you get.</p>
          </li>
          <li>
            <p className='strong flex align-items-center'> <i class="material-icons success-icon">check_circle_outline</i> &nbsp;&nbsp;&nbsp;Know the price upfront</p>
            <p>Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price.</p>
          </li>
          <li>
            <p className='strong flex align-items-center'> <i class="material-icons success-icon">check_circle_outline</i> &nbsp;&nbsp;&nbsp;We're here for you 24/7</p>
            <p>House keep is here for you, anything from answering any questions to resolving any issues, at any time.</p>
          </li>
        </ol>
        <img className='img-500 img-cover' src={hero2} alt='heroimage'/>
      </section>

      <section className='flex mar-t-100'>
        <img className='img-500 img-cover' src={julia} alt='heroimage'/>
        <ol className='started-ol'>
          <li>
            <p className='text-30 strong'>Get started in 3 simple steps</p>
          </li>
          <li className='flex nowrap align-items-center'>
            <span className='numbering'>1</span>
            <p>
              Register and complete your profile
            </p>
          </li>
          <li className='flex nowrap align-items-center'>
            <span className='numbering'>2</span>
            <p>
              Search for a service
            </p>
          </li>
          <li className='flex nowrap align-items-center'>
            <span className='numbering'>3</span>
            <p>
              Wait so we get it done
            </p>
          </li>
        </ol>
      </section>
    </div></div>
  );
}
