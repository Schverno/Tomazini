'use client'

import { PageWrapper } from "../components/page-wrapper";
import FooterIn from "../components/footerIn";
import Header from "../components/header"
import styles from '../styles/nosotros.module.scss'
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <PageWrapper  >
      <Header />
      <main>
        <div className={styles.wrapper}>
          <motion.div className={styles.texto}
           initial={{ y:50, opacity: 0 }}
           whileInView={{y:0, opacity: 1 }}
           viewport={{ once: true, margin: "0px" }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}>
            <h1>Nosotros</h1>
            <p>Tomazini Group es una empresa de construcción, desarrollo y bienes raíces fundada en 2001 con una nueva visión sobre la administración y la inversión de propiedades.</p>
            <p>Nuestros servicios incluyen desarrollo, construcción, adquisición y administración de propiedades comerciales y residenciales.</p>
            <a href="/#contacto"><button>Contactanos</button></a>
          </motion.div>
          <motion.div className={styles.imagen}
           initial={{ x:50, opacity: 0 }}
           whileInView={{x:0, opacity: 1 }}
           viewport={{ once: true, margin: "0px" }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.8 }}>

          </motion.div>
        </div>
        <div className={styles.wrapperdos}>
          <motion.div className={styles.imagen}
          initial={{ x:-50, opacity: 0 }}
          whileInView={{x:0, opacity: 1 }}
          viewport={{ once: true, margin: "-130px" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.8 }}
          >
          </motion.div>
          <motion.div className={styles.texto}
             initial={{ y:50, opacity: 0 }}
             whileInView={{y:0, opacity: 1 }}
             viewport={{ once: true, margin: "-50%" }}
             transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          >
            <p>A lo largo de los años, entendimos la necesidad de crear nuevas formas de negocios para ofrecer una administración eficiente y servicios de calidad para lograr nuestros objetivos de inversión sin importar el tamaño.</p>
            <p><strong>Nuestro equipo especializado está para guiarte a lo largo de todo el proceso:</strong><br/>
            desde la formulación de la estrategia de inversión, el análisis del mercado, la adquisición de la propiedad y la administración general.
</p>
          </motion.div>
        </div>
      </main>
      <FooterIn />
    </PageWrapper>
  );
}