import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-700 text-white font-['Inter']" style={{ backgroundColor: '#273A5C' }}>
            <div className= "flex flex-col mx-auto w-full p-4 py-6 lg:py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    
                    {/* Social Media Icons */}
                    <div  className="lg:w-1/4 text-center lg:text-right mb-4 lg:mb-0 flex flex-col items-center lg:items-start lg:ml-10">
                        <p className="text-lg lg:text-base lg:ml-11">FOLLOW US</p>
                        <p className="text-sm lg:text-xs mt-2 lg:ml-11">Yes, we are social</p>
                        <div className="mt-2 flex gap-4 lg:ml-11 "> 
                            {/* Facebook icon */}
                            <svg
                                width={19}
                                height={20}
                                viewBox="0 0 19 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_21_139)">
                                    <path d="M18.9999 10.0584C18.9999 4.77877 14.7463 0.499023 9.49993 0.499023C4.25118 0.500211 -0.00244141 4.77877 -0.00244141 10.0596C-0.00244141 14.8298 3.47218 18.7841 8.01318 19.5014V12.8217H5.60256V10.0596H8.01556V7.95177C8.01556 5.55659 9.43462 4.23371 11.6042 4.23371C12.6444 4.23371 13.731 4.42015 13.731 4.42015V6.7714H12.5328C11.3536 6.7714 10.9855 7.50884 10.9855 8.26527V10.0584H13.6194L13.199 12.8205H10.9843V19.5002C15.5253 18.783 18.9999 14.8286 18.9999 10.0584Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21_139">
                                        <rect width={19} height={19} fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {/* Twitter icon */}
                            <svg
                                width={19}
                                height={20}
                                viewBox="0 0 19 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_21_141)">
                                        <path d="M14.5469 0.5H4.45312C1.99373 0.5 0 2.49373 0 4.95312V15.0469C0 17.5063 1.99373 19.5 4.45312 19.5H14.5469C17.0063 19.5 19 17.5063 19 15.0469V4.95312C19 2.49373 17.0063 0.5 14.5469 0.5Z" fill="white" />
                                        <path d="M14.5469 0.5H4.45312C1.99373 0.5 0 2.49373 0 4.95312V15.0469C0 17.5063 1.99373 19.5 4.45312 19.5H14.5469C17.0063 19.5 19 17.5063 19 15.0469V4.95312C19 2.49373 17.0063 0.5 14.5469 0.5Z" fill="#1D9BF0" />
                                        <path d="M14.812 7.28441C14.8201 7.40219 14.8201 7.51998 14.8201 7.63888C14.8201 11.2605 12.0631 15.4374 7.02161 15.4374V15.4352C5.53228 15.4373 4.07379 15.0108 2.82031 14.2065C3.03688 14.2325 3.25449 14.2455 3.4727 14.2461C4.70707 14.247 5.90594 13.833 6.87666 13.0705C6.30473 13.0597 5.75047 12.8704 5.29138 12.5292C4.83229 12.1879 4.49131 11.7117 4.31612 11.1672C4.72675 11.2463 5.15008 11.2302 5.55349 11.12C4.27485 10.8616 3.35491 9.73815 3.35491 8.43339V8.39865C3.73609 8.61096 4.16269 8.72861 4.59882 8.74169C3.39454 7.93679 3.0233 6.33463 3.7505 5.08197C4.4386 5.92873 5.29714 6.62126 6.27033 7.1146C7.24353 7.60793 8.30962 7.89102 9.39936 7.94547C9.29071 7.47778 9.30676 6.98975 9.4459 6.5302C9.58504 6.07065 9.8424 5.65569 10.1922 5.32681C11.2962 4.28909 13.0324 4.3423 14.0701 5.44564C14.6839 5.32445 15.2725 5.09944 15.8106 4.78027C15.606 5.41488 15.1778 5.95357 14.6057 6.29611C15.1491 6.2321 15.6797 6.08666 16.1797 5.86468C15.8119 6.41553 15.3487 6.89626 14.812 7.28441Z" fill="white" />
                                </g>
                                    <defs>
                                        <clipPath id="clip0_21_141">
                                            <rect width={19} height={19} fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                            </svg>
                            {/* Instagram icon */}
                            <svg
                                width={19}
                                height={20}
                                viewBox="0 0 19 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_21_146)">
                                    <path d="M9.5 0.5C6.92194 0.5 6.59775 0.511875 5.58481 0.557C4.57188 0.6045 3.88194 0.763625 3.2775 0.99875C2.64349 1.23722 2.06921 1.61129 1.59481 2.09481C1.11159 2.56945 0.737565 3.14366 0.49875 3.7775C0.263625 4.38075 0.103312 5.07187 0.057 6.08125C0.011875 7.09656 0 7.41956 0 10.0012C0 12.5804 0.011875 12.9034 0.057 13.9164C0.1045 14.9281 0.263625 15.6181 0.49875 16.2225C0.742188 16.8471 1.06638 17.3767 1.59481 17.9052C2.12206 18.4336 2.65169 18.759 3.27631 19.0012C3.88194 19.2364 4.57069 19.3967 5.58244 19.443C6.59656 19.4881 6.91956 19.5 9.5 19.5C12.0804 19.5 12.4023 19.4881 13.4164 19.443C14.4269 19.3955 15.1193 19.2364 15.7237 19.0012C16.3573 18.7627 16.9312 18.3886 17.4052 17.9052C17.9336 17.3767 18.2578 16.8471 18.5012 16.2225C18.7352 15.6181 18.8955 14.9281 18.943 13.9164C18.9881 12.9034 19 12.5804 19 10C19 7.41956 18.9881 7.09656 18.943 6.08244C18.8955 5.07188 18.7352 4.38075 18.5012 3.7775C18.2625 3.14364 17.8884 2.56943 17.4052 2.09481C16.9309 1.61111 16.3566 1.23702 15.7225 0.99875C15.1169 0.763625 14.4257 0.603312 13.4152 0.557C12.4011 0.511875 12.0793 0.5 9.49763 0.5H9.50119H9.5ZM8.64856 2.21238H9.50119C12.0377 2.21238 12.3381 2.22069 13.3392 2.267C14.2654 2.30856 14.7689 2.46413 15.1038 2.59356C15.5468 2.76575 15.8638 2.97237 16.1963 3.30487C16.5288 3.63737 16.7343 3.95325 16.9064 4.39738C17.0371 4.73106 17.1914 5.23456 17.233 6.16081C17.2793 7.16188 17.2888 7.46231 17.2888 9.99763C17.2888 12.5329 17.2793 12.8346 17.233 13.8356C17.1914 14.7619 17.0359 15.2642 16.9064 15.5991C16.7541 16.0116 16.511 16.3845 16.1951 16.6904C15.8626 17.0229 15.5468 17.2283 15.1026 17.4005C14.7701 17.5311 14.2666 17.6855 13.3392 17.7283C12.3381 17.7734 12.0377 17.7841 9.50119 17.7841C6.96469 17.7841 6.66306 17.7734 5.662 17.7283C4.73575 17.6855 4.23344 17.5311 3.89856 17.4005C3.48591 17.2484 3.11259 17.0057 2.80606 16.6904C2.48989 16.384 2.24642 16.0107 2.09356 15.5979C1.96413 15.2642 1.80856 14.7607 1.767 13.8344C1.72188 12.8334 1.71238 12.5329 1.71238 9.99525C1.71238 7.45875 1.72188 7.1595 1.767 6.15844C1.80975 5.23219 1.96413 4.72869 2.09475 4.39381C2.26694 3.95088 2.47356 3.63381 2.80606 3.30131C3.13856 2.96881 3.45444 2.76338 3.89856 2.59119C4.23344 2.46056 4.73575 2.30619 5.662 2.26344C6.53837 2.22306 6.878 2.21119 8.64856 2.21V2.21238ZM14.5718 3.78938C14.4221 3.78938 14.2739 3.81886 14.1356 3.87615C13.9972 3.93344 13.8716 4.01741 13.7657 4.12327C13.6599 4.22913 13.5759 4.3548 13.5186 4.49312C13.4613 4.63143 13.4318 4.77967 13.4318 4.92938C13.4318 5.07908 13.4613 5.22732 13.5186 5.36563C13.5759 5.50394 13.6599 5.62962 13.7657 5.73548C13.8716 5.84134 13.9972 5.92531 14.1356 5.9826C14.2739 6.03989 14.4221 6.06938 14.5718 6.06938C14.8742 6.06938 15.1641 5.94927 15.3779 5.73548C15.5917 5.52169 15.7118 5.23172 15.7118 4.92938C15.7118 4.62703 15.5917 4.33706 15.3779 4.12327C15.1641 3.90948 14.8742 3.78938 14.5718 3.78938ZM9.50119 5.12175C8.85408 5.11165 8.21144 5.23039 7.61066 5.47104C7.00989 5.7117 6.46299 6.06946 6.0018 6.5235C5.54062 6.97755 5.17437 7.5188 4.92437 8.11575C4.67438 8.71269 4.54563 9.35341 4.54563 10.0006C4.54563 10.6478 4.67438 11.2885 4.92437 11.8854C5.17437 12.4824 5.54062 13.0236 6.0018 13.4777C6.46299 13.9317 7.00989 14.2895 7.61066 14.5301C8.21144 14.7708 8.85408 14.8895 9.50119 14.8794C10.782 14.8595 12.0035 14.3366 12.9022 13.4239C13.8008 12.5111 14.3045 11.2815 14.3045 10.0006C14.3045 8.71967 13.8008 7.49011 12.9022 6.57733C12.0035 5.66454 10.782 5.14173 9.50119 5.12175ZM9.50119 6.83294C10.3411 6.83294 11.1467 7.16661 11.7406 7.76055C12.3346 8.35449 12.6683 9.16004 12.6683 10C12.6683 10.84 12.3346 11.6455 11.7406 12.2395C11.1467 12.8334 10.3411 13.1671 9.50119 13.1671C8.66123 13.1671 7.85568 12.8334 7.26174 12.2395C6.6678 11.6455 6.33413 10.84 6.33413 10C6.33413 9.16004 6.6678 8.35449 7.26174 7.76055C7.85568 7.16661 8.66123 6.83294 9.50119 6.83294Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21_146">
                                        <rect width={19} height={19} fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Logo section */}
                    <div className="text-2xl lg:text-4xl text-center w-full lg:w-auto mb-4 lg:mb-0 lg:mr-8">
                        LOGO
                    </div>

                    {/* Contact us sections */}
                    <div className="lg:w-1/4 text-center lg:text-right">
                        <div className="text-lg lg:text-base">CONTACT US</div>
                        <div className="text-sm lg:text-xs mt-4 lg:mt-4">school@gmail.com</div>
                        <p className=" mt-4 text-sm lg:text-xs lg:mt-4">
                            41 Juta Street, Braamfontain,
                            <br/>
                            Johannesburg, 2001
                        </p>
                    </div>
                </div>

                <div className="mt-6 lg:w-full lg:mt-3 mx-auto w-full border-b-2 border-white"></div>


                <div className="text-sm lg:text-xs flex justify-center items-center gap-1 mt-4">
                    <span style={{ color: 'red' }}>©</span> School name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;