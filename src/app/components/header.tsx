'use client'

import styles from '../styles/headerin.module.scss'
import Link from "next/link";
import Image from 'next/image';
import Logo from '../../../public/logo.svg'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Nav from './nav'
import { usePathname } from 'next/navigation';


export default function Headerhome() {

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

    const [isActive, setActive] = useState(false)
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShouldRender(true);
            } else {
                setShouldRender(false);
            }
        };

        handleResize(); // Llama a la función al cargar la página para determinar el estado inicial

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className={styles.header}>
            <div className={styles.container}>
                <motion.div
                    className={styles.logowrapper}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { ease: [0.76, 0, 0.24, 1], duration: 1, } }}
                >
                    <Link href="/">
                        <Image
                            className={styles.logo}
                            src={Logo}
                            alt="Logo Tomazini"
                            width={250}
                            priority={true} />
                    </Link>
                </motion.div>

                <div className={styles.wrapperbtn}>
                    <div className={styles.wrapperas}>
                        {
                            links.map((link: { title: string; href: string }, index: number) => {
                                const { title, href } = link;
                                return <Link href={href} key={`l_${index}`}
                                >
                                    <p onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={() => handleMouseLeave(index)}
                                        className={styles.link}>
                                        <motion.span
                                            initial={{ y: "100%", opacity: 1 }}
                                            exit={{ y: "0%", opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true, margin: "200px" }}
                                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, }}

                                        >

                                            {title}
                                        </motion.span>
                                        <AnimatePresence mode="wait" >
                                            {(link.href === path || hoverStates[index]) && (

                                                <motion.span
                                                    className='absolute bg-black h-[2px] bottom-0 w-full left-0 flex'
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    exit={{ width: '100%', opacity: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } }}
                                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7, delay: 0.1 }}

                                                />
                                            )}</AnimatePresence>
                                    </p>

                                </Link>
                            })
                        }

                    </div>

                    <a href='/#contacto'><button>Contactanos</button></a>

                </div>


                {shouldRender && (
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1, transition: { ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5 } }}
                        onMouseDown={() => setActive(!isActive)}
                        className={styles.barras}
                    >
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                            <span></span>
                        </div>
                    </motion.div>
                )}
            </div>
            <AnimatePresence>
                {isActive && <Nav />}
            </AnimatePresence>
        </main>
    );
}
