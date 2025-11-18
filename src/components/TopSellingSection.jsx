import React from 'react';
import bag from '../assets/bag.png';

// Expect arrays passed in: topSellingPlants / premiumPlants
export default function TopSellingSection({ title, plants = [] }) {
    return (
        <div className="mt-[140px] flex gap-5 justify-center">
            {plants.map((plant) => (
                <div
                    key={plant.name}
                    className="relative w-[600px] h-[544px] rounded-[40px] overflow-visible"
                >
                    {/* SVG background / card shape (from provided SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 512 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <foreignObject x="-15" y="-15" width="542" height="653.157">
                            <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(7.5px)', clipPath: 'url(#bgblur_0_11_19_clip_path)', height: '100%', width: '100%' }} />
                        </foreignObject>
                        <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_11_19)" />
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

                    {/* keep original card content unchanged, just overlay it above svg */}
                    <div className="relative z-10 rounded-[40px] border border-white/15 bg-white/5 backdrop-blur-[22px] px-8 pb-8 text-left shadow-[0_25px_60px_rgba(0,0,0,0.35)] h-full">
                        <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none">
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                            />
                        </div>
                        <div className="pt-[340px]">
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
                </div>
            ))}
        </div>
    );
}