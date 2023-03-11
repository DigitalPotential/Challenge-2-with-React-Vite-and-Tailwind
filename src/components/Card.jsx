import { Link, } from 'react-router-dom'

const Card = () => {
    return (
        <div className='card-wrapper lg:w-[400px] h-[600px] lg:h-[600px] p-7 flex flex-col '>
            <img src="/illustration-hero.svg" alt="Card image, girl listening to music" className="card-image rounded-t-2xl" />
            <div className="content-wrapper flex flex-col bg-white px-7 py-8 rounded-b-2xl">
                <h2 className="card-heading text-center text-[23px] lg:text-[23px] font-red-hat text-slate-900 font-black">Order Summary</h2>
                <p className="card-description lg:text-[14px] text-center text-black opacity-60 py-3 lg:py-4 lg:px-3 font-medium">You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!</p>
                <div className="plan-price-wrapper flex flex-row my-3 px-5 py-5 lg:px-5 lg:py-5 bg-slate-50 rounded-xl justify-between">
                    <div className="price-icon-wrapper flex flex-row gap-4 items-center">
                        <img src="/icon-music.svg" alt="music-icon" className="music-icon w-11 h-11 lg:w-9 lg:h-9" />
                        <div className="plan-price flex flex-col">
                            <h3 className="plan text-sm font-black ">Annual Plan</h3>
                            <p className="price text-sm text-gray-400">$59.99/year</p>
                        </div>
                    </div>
                    <button className="change-plan-button text-button-blue underline font-black text-xs hover:text-gray-400 hover:no-underline">Change</button>
                </div>
                <button class="proceed-button mt-4 bg-button-blue text-white shadow-xl text-[15px] font-black rounded-xl py-[15px] lg:py-3 hover:bg-hover-color ">Proceed to Payment</button>
                <button class="cancel-order mt-6 lg:mt-5 text-gray-500 opacity-90 font-black text-base hover:text-black">Cancel Order</button>  
            </div>
        </div>        
    )
}

export default Card;