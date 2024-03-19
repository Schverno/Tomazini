'use client'

import styles from '../styles/headerhome.module.scss'
import Link from "next/link";
import Image from 'next/image';
import Logo from '../../../public/logo.svg'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Nav from './nav'

export default function Headerhome() {

    const [isActive, setActive] = useState(false)

    return (
        <main className={styles.header}>
            <div className={styles.container}>
                <motion.div
                    className={styles.logowrapper}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5 } }}
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

                <motion.div
                    initial={{ scaleX: 0.8, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1, transition: { ease: [0.76, 0, 0.24, 1], duration: 1, delay: 2 } }}
                    onMouseDown={() => { setActive(!isActive) }} className={styles.barras}
                >
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                        <span></span>
                    </div>
                </motion.div>
            </div>
            <AnimatePresence>
                {isActive && <Nav />}
            </AnimatePresence>
        </main>
    );
}
