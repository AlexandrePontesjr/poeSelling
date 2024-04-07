import styles from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination} from "swiper/modules";

import {RxArrowRight} from "react-icons/rx";

const ServicesItems = ({id,image, title, name, value}) =>(
    <div>
                {/* <div className={`flex`}> */}
                <div className={`flex`}>
                    <div href="#" className={`m-auto bg-slate-950 lg:h-[350px] lg:w-[250px] max-w-[450px] rounded-lg sm:px-4 sm:py-4`}>
                    {/* <div href="#" className={` bg-white max-w-[450px] rounded-lg sm:px-4 sm:py-4 lg:px-4 mr-2`}> */}
                        <div className={`bg-yellow-900 p-4  rounded-lg`}>
                            <img
                                src={image}
                                alt=""
                                className="rounded-lg lg:h-[150px] lg:w-[100px] items-center bg-white m-auto"
                            />
                                <div className="rounded-lg p-2 mt-3">
                                    <h3
                                    className="text-white font-pirata text-[24px] group-hover:underline group-hover:underline-offset-4 ml-auto"
                                    >
                                    {id} {name}
                                    </h3>
                                    <p className="mt-2 text-[40px] text-white">R$ {value}</p>
                                </div>
                        </div>
                    </div>
                </div>
    </div>
    // <div className={` flex items-center justify-center bg-purple-600`}>
    //     <div className={`overflow-hidden relativeflex flex-col gap-3 max-w-[200px]`}>
    //         {id}
    //         <img src={image} alt="" />
    //     </div>
    //     <div className=" text-white">
    //     <RxArrowRight />
    //     </div>
    // </div>
);


export default ServicesItems;
