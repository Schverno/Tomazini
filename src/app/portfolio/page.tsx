'use client'

import { PageWrapper } from "../components/page-wrapper";
import FooterIn from "../components/footerIn";
import Header from "../components/headerportfolio";
import styles from '../styles/portfolio.module.scss';
import { motion } from "framer-motion";
import CardsPortfolio from "../components/cardPortfolio";

export default function Porftolio() {
  return (
    <PageWrapper  >
      <Header />
      <main >
        <div className={styles.wrapper}>
          <motion.div className={styles.texto}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}>
            <h1>¿Por qué elegirnos?</h1>
            <p><strong>Asesoramiento integral desde la compra hasta la venta o renta de la propiedad.</strong> </p>

            <p>Las empresas de construcción no hacen lo que hacemos nosotros: asesoramos desde el principio hasta el final de la inversión siendo parte de cada uno de los aspectos del negocio: inversiones, contabilidad,
              construcción, legales, venta o renta e inclusive el mantenimiento de la propiedad. </p>
            <p> <strong> Administración general de la propiedad:</strong> nos hacemos cargo como si fuera nuestra para que no tengas que preocuparte</p>
            <a href="/#contacto"><button>Contactanos</button></a>
          </motion.div>
          <motion.div className={styles.imagen}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.8 }}>

          </motion.div>
        </div>
        <div className={styles.wrapperCards}>
          <motion.div 
           initial={{ y:20, opacity: 0 }}
           whileInView={{ y:0, opacity: 1 }}
           viewport={{ once: true, margin: "0px" }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 0.5, damping: 15, stiffness: 100, type: "spring" }}
          className={styles.texto}>
            <h1>Portafolio de <span className="block h-0 md:hidden"><br/></span> bienes raíces</h1>
          </motion.div>

          <div>
            <CardsPortfolio/>
          </div>
        </div>
      </main>
      <FooterIn />
    </PageWrapper>
  );
}