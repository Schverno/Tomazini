'use client'

import Link from "next/link";
import styles from '../styles/footerhome.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../../public/logofooter.svg'
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa6"

export default function FooterHome() {
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

    return (
        <main className="relative">
            <motion.div className={styles.footer}
                initial={{ scaleY: "0.1%" }}
                whileInView={{ scaleY: "100%" }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            >
                <motion.div className={styles.logowrapper}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5 }}>
                    <Image
                        sizes="(max-width: 768px) 176px, 84px"
                        alt="Logo Footer Tomazini"
                        width={176}
                        height={84}
                        src={Logo}
                        priority={true}
                    />
                </motion.div>
                <div className={styles.footerwrapper}>



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
                                            initial={{ y: "100%", opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true, margin: "200px" }}
                                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}

                                        >

                                            {title}
                                        </motion.span>
                                        <AnimatePresence mode="wait" >
                                            {(hoverStates[index]) && (

                                                <motion.span
                                                    className='absolute bg-white h-[2px] bottom-0 w-full left-0 flex'
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    exit={{ width: 0, opacity: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } }}
                                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7, }}

                                                />
                                            )}</AnimatePresence>
                                    </p>

                                </Link>
                            })
                        }
                    </div>

                </div>
                <motion.div className={styles.iconswrapper}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}>
                    <Link href="https://instagram.com/" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href="https://wa.me/" target="_blank">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://facebook.com/" target="_blank">
                        <FaFacebookF />
                    </Link>

                </motion.div>
                <motion.div className={styles.copywrapper}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.75, delay: 2.5 }}
                >
                    <p>© Copyright Tomazini 2024. <br className="block md:hidden"></br> Todos los derechos reservados.</p>
                </motion.div>
            </motion.div>
        </main>
    );
}