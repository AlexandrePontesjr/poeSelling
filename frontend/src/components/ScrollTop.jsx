import { useState } from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { GameDetails } from "../constants";

import { useEffect } from 'react';

const ScrollTopButton = ({game}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Verifica se a posição vertical da página é maior que 100px
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [game]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            { isVisible &&
                <div className="fixed justify-start flex bottom-6 right-36 items-center z-50">
                    {Object.values(GameDetails).map((game, index) => (
                        <Link key={index} to={game.path} relative="path">
                            <Button
                                variant="solid"
                                color=""
                                size="sm"
                                sx={{
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.5)",
                                    },
                                }}
                            >
                                <img className="h-10 mx-2" src={game.icon} alt="" />
                            </Button>
                        </Link>
                    ))}
                </div>
            }
            {isVisible && (
                <button
                    className="fixed bottom-5 lg:bottom-10 right-1 lg:right-10 bg-slate-950 hover:bg-slate-800 text-dimWhite font-bold py-2 px-4 rounded-full z-50"
                    onClick={scrollToTop}
                >
                    <i className="">
                        <BsFillArrowUpCircleFill className="h-8 w-8" />
                    </i>
                </button>
            )}
        </div>
    );
};

export default ScrollTopButton;
