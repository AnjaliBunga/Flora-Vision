import herobg from '../assets/hero-bg.jpg';
import logo from '../assets/logo.png';
import searchicon from '../assets/searchicon.png';
import bag from '../assets/bag.png';
import heroimg from '../assets/hero-img.png'
import rightarrow from '../assets/rightarrow.png'
import testimonial from '../assets/image.png'
import tendyplant1 from '../assets/tendyplant1.png'
import tendyplant2 from '../assets/trendyplant2.png'
import cactus from '../assets/cactus.png'
import cheeseplant from '../assets/cheeseplant.png'
import Sansevieriaplant from '../assets/Sansevieriaplant.png'
import Agaveplant from '../assets/Agaveplant.png'
import comment1 from '../assets/comment1.png'
import comment2 from '../assets/comment2.png'
import comment3 from '../assets/comment3.png'
import '../App.css';

const topSellingPlants = [
    {
        name: 'Aglaonema plant',
        description: 'Known for its attractive foliage and ease of care, perfect for brightening interiors.',
        price: 'Rs. 300/-',
        image: heroimg,
    },
    {
        name: 'Plantain Lilies',
        description: 'Hostas offer lush decorative leaves and thrive in a wide variety of shapes and sizes.',
        price: 'Rs. 380/-',
        image: tendyplant1,
    },
    {
        name: 'Cactus',
        description: 'Loved for their resilience and ability to thrive in arid environments with minimal care.',
        price: 'Rs. 259/-',
        image: cactus,
    },
];

const premiumPlants = [
    {
        name: 'Swiss cheese Plant',
        description: 'A tropical houseplant famous for its distinctive perforated leaves and bold form.',
        price: 'Rs. 400/-',
        image: cheeseplant,
    },
    {
        name: 'Sansevieria plant',
        description: 'Low-maintenance favorite admired for its striking appearance and upright leaves.',
        price: 'Rs. 450/-',
        image: Sansevieriaplant,
    },
    {
        name: 'Agave plant',
        description: 'Succulent staple known for fleshy rosette leaves and sculptural architectural forms.',
        price: 'Rs. 359/-',
        image: Agaveplant,
    },
];

const customerReviews = [
    {
        name: 'Shelly Russel',
        feedback: 'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!',
        image: comment1,
    },
    {
        name: 'Lula Rolfson',
        feedback:
            'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
        image: comment2,
    },
    {
        name: 'Carol Huels',
        feedback:
            'It’s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!',
        image: comment3,
    },
];

const StarStrip = ({ className = '' }) => (
    <svg
        className={className}
        width="132"
        height="19"
        viewBox="0 0 132 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z" fill="#FFF84E" />
        <path d="M39.9 0L42.0329 6.56434H48.9351L43.3511 10.6213L45.484 17.1857L39.9 13.1287L34.3161 17.1857L36.4489 10.6213L30.865 6.56434H37.7671L39.9 0Z" fill="#FFF84E" />
        <path d="M70.3 0L72.4329 6.56434H79.335L73.7511 10.6213L75.8839 17.1857L70.3 13.1287L64.716 17.1857L66.8489 10.6213L61.265 6.56434H68.1671L70.3 0Z" fill="#FFF84E" />
        <path d="M100.7 0L102.833 6.56434H109.735L104.151 10.6213L106.284 17.1857L100.7 13.1287L95.1161 17.1857L97.2489 10.6213L91.665 6.56434H98.5671L100.7 0Z" fill="#FFF84E" />
        <path d="M131.1 0L131.1 6.56434V9.5L131.1 13.1287L125.516 17.1857L127.649 10.6213L122.065 6.56434H128.967L131.1 0Z" fill="#FFF84E" />
    </svg>
);

const CornerLeft = ({ className = '' }) => (
    <svg className={className} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
            stroke="url(#paint0_linear_left)"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient id="paint0_linear_left" x1="2" y1="0.5" x2="71" y2="71.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55B000" />
                <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                <stop offset="1" stopColor="#50790B" />
            </linearGradient>
        </defs>
    </svg>
);

const CornerRight = ({ className = '' }) => (
    <svg className={className} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
            stroke="url(#paint0_linear_right)"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient id="paint0_linear_right" x1="71.5" y1="73.5" x2="2.5" y2="2.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55B000" />
                <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
                <stop offset="1" stopColor="#50790B" />
            </linearGradient>
        </defs>
    </svg>
);

function Section() {
    return (
        <div className="hero-section relative">
            <img className="hero-bg h-[2202px] w-full object-cover" src={herobg} alt="hero-bg" />

            <div className="hero-content absolute top-0 left-0 w-full h-full">

                <div className='navbar px-6 py-4 flex items-center justify-between'>

                    <div className='navbar-logo flex items-center gap-2'>
                        <img className="w-[40px] h-[48px] object-contain" src={logo} alt="logo" />
                        <h1 className="text-2xl font-bold text-white font-inter">FloraVision.</h1>
                    </div>

                    <div className='navbar-menu flex items-center gap-16 text-[23px] font-[400]'>
                        <a href="#" className="text-white">Home</a>

                        <a href="#" className="text-white flex items-center gap-2">
                            Plants Type
                            <svg className="w-3 h-3" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.19617 5.25L0 0H10.3923L5.19617 5.25Z" fill="white" />
                            </svg>
                        </a>

                        <a href="#" className="text-white">More</a>
                        <a href="#" className="text-white">Contact</a>
                    </div>

                    <div className='navbar-button flex items-center gap-10'>
                        <button className="text-white">
                            <img className="w-[20px] h-[20px] object-contain" src={searchicon} alt="search" />
                        </button>

                        <button className="text-white">
                            <img className="w-[20px] h-[20px] object-contain" src={bag} alt="bag" />
                        </button>

                        <button className="text-white flex flex-col items-end gap-2 py-2 h-[40px] mt-2">
                            <div className="w-[31px] h-[3px] bg-white rounded-full"   ></div>
                            <div className="w-[23px] h-[3px] bg-white rounded-full "   ></div>
                        </button>
                    </div>

                </div>
                <div className='hero-context flex flex-row '>

                    <div className='hero-content-text absolute top-[210px] left-[43px] w-[775px] h-full'>
                        <h1 className="text-[110px] font-[500] text-white font-inter opacity-75 w-[798px]">Earth's Exhale</h1>
                        <p className="text-lg text-white font-inter opacity-75 text-[25px] font-[400] ">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                        <div className='flex items-center gap-4 mt-1'>
                            <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md mt-4 text-[28px] font-[400] opacity-75">Buy Now</button>
                            <button className="text-white bg-transparent border border-white w-[70px] h-[70px] rounded-full mt-4 flex items-center justify-center font-[400] opacity-75 ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg> </button><span className='live-demo text-[25px] text-white mt-4 font-[400]'>Live Demo...</span>
                        </div>

                        <div className="
  card-curve1 relative mt-10 w-[409px] h-[237px] absolute top-[75px] left-[43px] rounded-[36px]
  border border-white/20
  bg-white/5 backdrop-blur-[17px]
  px-7 py-6
">
                            <div className="flex items-center gap-4">
                                <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/40">
                                    <img
                                        src={testimonial}
                                        alt="Ronnie Hamill"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="text-white text-[22px] font-[400] font-inter">
                                        Ronnie Hamill
                                    </p>

                                    <StarStrip className="w-[132px] h-[19px]" />
                                </div>
                            </div>

                            {/* TEXT */}
                            <p className="text-white/85 text-[17px] leading-snug tracking-wide mt-4 font-[400] font-inter">
                                I can't express how thrilled I am with my new natural plants! They bring such a fresh
                                and vibrant energy to my home.
                            </p>

                            {/* GLOW EFFECT */}
                            <div className="absolute -right-10 bottom-4 w-[120px] h-[120px] bg-[#6de28d]/30 blur-[60px] rounded-full pointer-events-none"></div>
                        </div>
                    </div>
                    <div className="absolute top-[160px] right-[100px] hidden xl:block">
                        <div className="relative w-[420px] h-[500px]">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <foreignObject x="-15" y="-15" width="542" height="653.157">
                                    <div
                                        xmlns="http://www.w3.org/1999/xhtml"
                                        style={{ clipPath: 'url(#bgblur_0_11_19_clip_path)', height: '100%', width: '100%' }}
                                    />
                                </foreignObject>
                                <path
                                    d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"
                                    fill="white"
                                    fillOpacity="0.05"
                                    stroke="url(#paint0_linear_11_19)"
                                />
                                <defs>
                                    <clipPath id="bgblur_0_11_19_clip_path" transform="translate(15 15)">
                                        <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                                    </clipPath>
                                    <linearGradient id="paint0_linear_11_19" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 px-10 pt-20 pb-12 flex flex-col text-white">
                                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[280px] h-[280px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]">
                                    <img src={heroimg} alt="Aglaonema plant" className="w-full h-full object-contain" />
                                </div>
                                <div className="mt-[150px]">
                                    <p className="text-white/70 text-[24px] font-[400]">Indoor Plant</p>
                                    <p className="text-white text-[36px] font-[500] flex items-center gap-3">
                                        Aglaonema plant
                                        <span>
                                            <img className="w-5 h-5" src={rightarrow} alt="" />
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    <button className="text-white bg-transparent border border-white/50 px-8 py-2 rounded-md text-[24px] font-[400] opacity-80">
                                        Buy Now
                                    </button>
                                    <div className="gap-2 flex items-center">
                                        <div className="w-[21px] h-[6px] bg-white rounded-full"></div>
                                        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[980px] left-1/2 -translate-x-1/2 w-[1250px]">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2">
                                <CornerLeft className="w-[52px] h-[52px] relative left-[50px] top-[10px]" />
                                <h2 className="text-white text-[64px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                                    Our Trendy plants
                                </h2>
                                <CornerRight className="w-[52px] h-[52px] relative right-[50px] bottom-[5px]" />
                            </div>
                        </div>


                        <div className="mt-16 mb-20 flex items-center gap-16 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-[18px] px-20 py-16 shadow-[0_45px_90px_rgba(0,0,0,0.45)] h-[460px] overflow-visible w-[95vw] -ml-[calc((95vw-1250px)/2)]">
                            <div className="w-1/2 h-full relative bottom-[140px] overflow-visible">
                                <img
                                    src={tendyplant1}
                                    alt="Desk plant"
                                    className="relative bottom-[220px] w-[900px] h-[1000px] object-contain drop-shadow-[0_35px_65px_rgba(0,0,0,0.45)]"
                                />
                            </div>

                            <div className="w-1/2 text-left">
                                <p className="text-white text-[38px] font-[500] font-inter">For Your Desks Decorations</p>
                                <p className="text-white/80 text-[21px] font-[400] font-inter leading-relaxed mt-5 w-[470px]">
                                    I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                                </p>
                                <p className="text-white text-[34px] font-[500] font-inter mt-8">Rs. 599/-</p>

                                <div className="flex items-center gap-6 mt-8">
                                    <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md mt-4 text-[28px] font-[400] opacity-75">
                                        Explore
                                    </button>
                                    <button className="w-[74px] h-[74px] rounded-[26px] border border-white/40 flex items-center justify-center">
                                        <img src={bag} alt="bag" className="w-[32px] h-[32px] object-contain" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 flex items-center gap-16 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-[18px] px-20 py-16 shadow-[0_45px_90px_rgba(0,0,0,0.45)] h-[460px] overflow-visible w-[95vw] -ml-[calc((95vw-1250px)/2)]">
                            <div className="w-1/2 text-left">
                                <p className="text-white text-[38px] font-[500] font-inter">For Your Desks Decorations</p>
                                <p className="text-white/80 text-[21px] font-[400] font-inter leading-relaxed mt-5 w-[470px]">
                                    The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
                                </p>
                                <p className="text-white text-[34px] font-[500] font-inter mt-8">Rs. 399/-</p>

                                <div className="flex items-center gap-6 mt-8">
                                    <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md mt-4 text-[28px] font-[400] opacity-75">
                                        Explore
                                    </button>
                                    <button className="w-[74px] h-[74px] rounded-[26px] border border-white/40 flex items-center justify-center">
                                        <img src={bag} alt="bag" className="w-[32px] h-[32px] object-contain" />
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/2 h-full relative bottom-[120px] overflow-visible flex justify-end">
                                <img
                                    src={tendyplant2}
                                    alt="Desk plant"
                                    className="relative bottom-[200px] w-[780px] h-[900px] object-contain drop-shadow-[0_35px_65px_rgba(0,0,0,0.45)]"
                                />
                            </div>
                        </div>

                        <div className="mt-24 text-center">
                            <div className="inline-flex items-center gap-2">
                                <CornerLeft className="w-[52px] h-[52px] relative left-[50px] top-[10px]" />
                                <h2 className="text-white text-[52px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                                    Our Top Selling Plants
                                </h2>
                                <CornerRight className="w-[52px] h-[52px] relative right-[50px] bottom-[5px]" />
                            </div>

                            <div className="mt-[140px] flex gap-5 justify-center">
                                {topSellingPlants.map((plant, idx) => (
                                    <div
                                        key={plant.name}
                                        className="relative w-[600px] h-[544px]   px-8 pb-8 text-left  overflow-visible"
                                    >
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <foreignObject x="-15" y="-15" width="542" height="653.157">
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{ clipPath: `url(#bgblur_${idx}_11_19_clip_path)`, height: '100%', width: '100%' }}
                                                />
                                            </foreignObject>
                                            <path
                                                d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"
                                                fill="white"
                                                fillOpacity="0.05"
                                                stroke={`url(#paint0_linear_${idx}_11_19)`}
                                            />
                                            <defs>
                                                <clipPath id={`bgblur_${idx}_11_19_clip_path`} transform="translate(15 15)">
                                                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                                                </clipPath>
                                                <linearGradient id={`paint0_linear_${idx}_11_19`} x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="white" />
                                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                                            <img
                                                src={plant.image}
                                                alt={plant.name}
                                                className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                                            />
                                        </div>
                                        <div className="pt-[340px] z-[90]">
                                            <p className="text-white text-[24px] font-[500] font-inter">{plant.name}</p>
                                            <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">
                                                {plant.description}
                                            </p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <p className="text-white text-[22px] font-[500] font-inter">{plant.price}</p>
                                                <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                                                    <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-[140px] flex gap-5 justify-center">
                                {premiumPlants.map((plant, idx) => (
                                    <div
                                        key={plant.name}
                                        className="relative w-[600px] h-[544px] rounded-[40px] px-8 pb-8 text-left  overflow-visible"
                                    >
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <foreignObject x="-15" y="-15" width="542" height="653.157">
                                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ clipPath: `url(#bgblur_premium_${idx}_11_19_clip_path)`, height: '100%', width: '100%' }} />
                                            </foreignObject>
                                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke={`url(#paint0_linear_premium_${idx}_11_19)`} />
                                            <defs>
                                                <clipPath id={`bgblur_premium_${idx}_11_19_clip_path`} transform="translate(15 15)">
                                                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                                                </clipPath>
                                                <linearGradient id={`paint0_linear_premium_${idx}_11_19`} x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="white" />
                                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none z-10">
                                            <img src={plant.image} alt={plant.name} className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]" />
                                        </div>
                                        <div className="pt-[340px] relative z-10">
                                            <p className="text-white text-[24px] font-[500] font-inter">{plant.name}</p>
                                            <p className="text-white/80 text-[16px] font-inter leading-relaxed mt-3">{plant.description}</p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <p className="text-white text-[22px] font-[500] font-inter">{plant.price}</p>
                                                <button className="w-[52px] h-[52px] rounded-[18px] border border-white/40 flex items-center justify-center">
                                                    <img src={bag} alt="bag icon" className="w-[24px] h-[24px] object-contain" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-24 text-center">
                            <div className="inline-flex items-center gap-2">
                                <CornerLeft className="w-[48px] h-[48px]" />
                                <h2 className="text-white text-[52px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                                    Customer Review
                                </h2>
                                <CornerRight className="w-[48px] h-[48px]" />
                            </div>

                            <div className="mt-12 flex gap-8 justify-center items-stretch w-[85vw]">
                                {customerReviews.map((review, idx) => (
                                    <div
                                        key={review.name}
                                        className="w-[560px] rounded-[70px] px-10 pt-10 pb-12 text-left relative flex flex-col"
                                    >
                                        {/* Decorative SVG background for reviews */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <foreignObject x="-15" y="-15" width="542" height="653.157">
                                                <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_review3_clip_path)', height: '100%', width: '100%' }}></div>
                                            </foreignObject>
                                            <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_review3)" />
                                            <defs>
                                                <clipPath id="bgblur_review3_clip_path" transform="translate(15 15)">
                                                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                                                </clipPath>
                                                <linearGradient id="paint0_linear_review3" x1="32.5" y1="25.1571" x2="459.5" y2="609.157" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="white" />
                                                    <stop offset="1" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <div className="absolute right-10 top-6 w-[140px] h-[140px] bg-lime-300/20 blur-[70px] rounded-full pointer-events-none z-0" />
                                        <div className="flex items-center gap-6 relative z-10">
                                            <div className="w-[86px] h-[86px] rounded-full overflow-hidden border border-white/30">
                                                <img src={review.image} alt={review.name} className="object-cover w-full h-full" />
                                            </div>
                                            <div>
                                                <p className="text-white text-[28px] font-[600] font-inter">{review.name}</p>
                                                <StarStrip className="mt-2" />
                                            </div>
                                        </div>
                                        <p className="text-white/85 text-[18px] leading-relaxed mt-8 font-inter relative z-10">{review.feedback}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-20 text-center">
                            <div className="inline-flex items-center gap-2">
                                <CornerLeft className="w-[52px] h-[52px] relative left-[50px] top-[10px]" />
                                <h2 className="text-white text-[52px] font-[500] font-inter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                                    Our Best o2
                                </h2>
                                <CornerRight className="w-[52px] h-[52px] relative right-[50px] bottom-[5px]" />
                            </div>

                            <div className="mt-12 flex items-center gap-12 rounded-[120px] border border-white/20 bg-white/5 backdrop-blur-[20px] px-12 py-5 shadow-[0_45px_90px_rgba(0,0,0,0.45)] overflow-visible">
                                <div className="w-1/2 flex justify-center relative overflow-visible h-[520px]">
                                    <img
                                        src={heroimg}
                                        alt="O2 plant"
                                        className="relative bottom-60 w-[880px] h-[880px] object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.55)]"
                                    />
                                </div>

                                <div className="w-1/2 text-left font-inter">
                                    <p className="inline-block  text-white text-[38px] font-[500]  py-2 rounded-[10px] mb-6">
                                        We Have Small And Best O2 Plants Collection's
                                    </p>
                                    <p className="text-white/80 text-[18px] leading-relaxed">
                                        Oxygen-producing plants, often referred to as “O2 plants,” are those that release oxygen into the atmosphere through the process of photosynthesis.
                                    </p>
                                    <p className="text-white/80 text-[18px] leading-relaxed mt-4">
                                        Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                                    </p>
                                    <div className="flex items-center justify-between gap-6 mt-8">
                    <button className="text-white bg-transparent border border-white px-10 py-2 rounded-md text-[20px] font-[400] opacity-75">Explore</button>
                    <div className="flex items-center gap-6 text-white text-[18px] font-semibold px-6">
                        <button className="text-white/60 hover:text-white transition-colors duration-200 text-[28px] leading-none">
                            &lsaquo;
                        </button>
                        <span className="flex items-center gap-1 tracking-[0.2em]">
                            <span className="text-white text-[24px] font-semibold leading-none">01</span>
                            <span className="text-white/70 text-[14px] leading-none">/04</span>
                        </span>
                        <button className="text-white/60 hover:text-white transition-colors duration-200 text-[28px] leading-none">
                            &rsaquo;
                        </button>
                    </div>
                </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 mt-6">
                            <span className="w-14 h-[6px] rounded-full bg-white"></span>
                            <span className="w-3 h-3 rounded-full border bg-white border-white/60"></span>
                            <span className="w-3 h-3 rounded-full border bg-white border-white/60"></span>
                        </div>
                        <div className="mt-24 text-white border-white/10 pt-16 font-inter">
                            <div className="flex flex-col xl:flex-row items-start gap-17">
                                <div className="flex-1 space-y-6 h-[100px]">
                                    <div className='navbar-logo flex items-center gap-2'>
                                        <img className="w-[94px] h-[94px] object-contain" src={logo} alt="logo" />
                                        <h1 className="text-[44px] font-bold text-white font-inter">FloraVision.</h1>
                                    </div>
                                    <p className="text-[22px] leading-relaxed text-white/90 w-[520px]">
                                        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                                    </p>
                                    <div className="flex gap-12 text-white text-xl  font-semibold mt-[50px]">
                                        <span>FB</span>
                                        <span>TW</span>
                                        <span>LI</span>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <h4 className="text-[20px] font-semibold">Quick Link’s</h4>
                                    <div className="flex flex-col gap-4 text-[18px] text-white/90">
                                        <a href="#" className="border-b border-white/40 w-max pb-1">Home</a>
                                        <a href="#" className="border-b border-white/40 w-max pb-1">Type’s Of plant’s</a>
                                        <a href="#" className="border-b border-white/40 w-max pb-1">Contact</a>
                                        <a href="#" className="border-b border-white/40 w-max pb-1">Privacy</a>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <h4 className="text-[24px] font-semibold">For Every Update.</h4>
                                    <div className="w-full flex border-2 border-white overflow-hidden max-w-xl rounded-[5px]">
                                        <input
                                            type="email"
                                            placeholder="Enter Email"
                                            className="flex-1 bg-transparent px-6 py-4 text-xl text-white placeholder:text-white/60 outline-none"
                                        />
                                        <button className="bg-white text-black px-8 text-xl m-1 rounded-[5px] font-semibold">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-white text-xl mb-10 mt-3">FloraVision © all right reserve</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Section;
