'use client'

import Link from "next/link";
import styles from '../styles/footerin.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../../public/logofooter.svg'
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa6"

export default function FooterIn() {

    const [hoverStateTel, setHoverStateTel] = useState(false);
    const [hoverStateEmail, setHoverStateEmail] = useState(false);

    const handleMouseEnterTel = () => {
        setHoverStateTel(true);
    };

    const handleMouseLeaveTel = () => {
        setHoverStateTel(false);
    };

    const handleMouseEnterEmail = () => {
        setHoverStateEmail(true);
    };

    const handleMouseLeaveEmail = () => {
        setHoverStateEmail(false);
    };

    return (
        <main className="relative">
            <motion.div className={styles.footer}
                initial={{ scaleY: "0.1%" }}
                whileInView={{ scaleY: "100%" }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            >
                <div>
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
                    <motion.div className={styles.iconswrapper}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}>
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
                </div>
                <div>
                    <motion.div className={styles.copywrapper}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.75, delay: 1.5 }}
                    >
                        <p><strong>5842 NW 74th Terrace (Parkland, Fl 33067)</strong><br />
                            Servicio de emergencia 24 hs.<br />
                            8:00 AM to 4:50 PM<br />
                            <a className="relative" href="tel:954 822 8904" 
                               onMouseEnter={handleMouseEnterTel}
                               onMouseLeave={handleMouseLeaveTel}>
                                954-822-8904

                                <AnimatePresence mode="wait" >
                                {hoverStateTel  && (
                                    <motion.span
                                        className='absolute bg-white h-[2px] bottom-0 w-full left-0 flex'
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        exit={{ width: '100%' , opacity: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7, }}

                                 />
                                 )}</AnimatePresence>
                            </a><br />
                            <a className="relative"  href="mailto:Tomazinigroup@yahoo.com"
                             onMouseEnter={handleMouseEnterEmail}
                             onMouseLeave={handleMouseLeaveEmail}>
                                Tomazinigroup@yahoo.com
                                <AnimatePresence mode="wait" >
                                {hoverStateEmail  && (
                                    <motion.span
                                        className='absolute bg-white h-[2px] bottom-0 w-full left-0 flex'
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        exit={{ width: '100%' , opacity: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 } }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7, }}

                                 />
                                 )}</AnimatePresence>
                                </a>
                                </p>
                        <p className={styles.medium}>
                            Áreas de Cobertura - Estado de Florida </p>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}