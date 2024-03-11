'use client'

import styles from '../styles/headerhome.module.scss'
import Link from "next/link";
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
    const links = [
        {
            title: "Inicio",
            href: "/"
        },
        {
            title: "Propiedades",
            href: "/portfolio"
        },
        {
            title: "Nosotros",
            href: "/nosotros"
        },
        {
            title: "Inversiones",
            href: "/inversiones"
        },
        {
            title: "ESG",
            href: "/esg"
        },
    ]

    const [hoverStates, setHoverStates] = useState(Array(links.length).fill(false));

    const handleMouseEnter = (index: number) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = true;
        setHoverStates(newHoverStates);
    };

    const handleMouseLeave = (index: number) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = false;
        setHoverStates(newHoverStates);
    };

    const path = usePathname();


    const getChar = (title: string): JSX.Element[] => {
        let chars: JSX.Element[] = [];
        title.split("").forEach((char, index) => {
            const transition: Transition = { ease: [0.76, 0, 0.24, 1], duration: 1, delay: index * 0.02 };
    
            chars.push(
                <motion.span
                    custom={[index * 0.02, (title.length - index) * 0.01]}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition }}
                    exit={{ y: 0, opacity: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7, delay: (title.length - index) * 0.01 } }}
                    key={`c_${index}`}
                >
                    {char}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <main className={styles.header}>
            <motion.div
                className={styles.navbar}
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                exit={{ width: 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            >
                <div className={styles.wrapperas}>
                    {
                        links.map((link, index) => {
                            const { title, href } = link;
                            return  <Link href={href} key={`l_${index}`} >
                                <p onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    className={styles.link}>{getChar(title)}
                                    <AnimatePresence  >
                                    {(link.href === path || hoverStates[index]) && (
                                        
                                            <motion.span
                                                className='absolute bg-white h-[2px] top-12 w-full left-0 flex'
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                exit={{ width: 0, opacity: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } }}
                                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7,}}

                                            />
                                    )}</AnimatePresence>
                                </p>

                            </Link>
                        })
                    }
                </div>

            </motion.div>
        </main >
    );
}
