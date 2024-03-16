'use client'

interface ListItemProps {
  text: string; // Assuming 'text' is a string, adjust the type accordingly
  index: number;
}

import { useState } from 'react';

import { PageWrapper } from "../components/page-wrapper";
import FooterIn from "../components/footerIn";
import HeaderESG from "../components/headerESG"
import styles from "../styles/esg.module.scss"
import { motion } from 'framer-motion';

export default function Esg() {

  const items = [
    'Luces LED en las instalaciones',
    'Ahorro de agua',
    'Aire acondicionado energéticamente eficiente',
    'Electrodomésticos y calefones energéticamente eficientes',
    'Alto aislamiento de calefacción',
    'Tecnología smart-home',
    'Características de seguridad',
    'Aberturas de alto impacto y energéticamente eficientes',
  ];

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const ListItem: React.FC<ListItemProps> = ({ text, index }) => {
    return (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: index * 0.1 }}
      >
        {text}
      </motion.li>
    );
  };

  return (
    <PageWrapper  >
      <HeaderESG />
      <section className={styles.esgwrapper}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, }}
          className={styles.imagen}>

        </motion.div>
        <div className={styles.texto}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7, delay: 0.8 }}
          >Nuestra política de sustentabilidad</motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}
            onAnimationComplete={handleAnimationComplete}>Nos dedicamos a diseñar propiedades sostenibles para la renta o la venta incorporando tecnología inteligente y
            características de eficiencia energética.
          </motion.h2>
          {isAnimationComplete && (
            <>
              <ul >
                {items.map((item, index) => (
                  <ListItem key={index} text={item} index={index} />
                ))}
              </ul>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7, delay: 1.2 }}
              >Además, integramos <strong> paisajismo </strong>para plantar arbolado nativo instalando sistemas de irrigación sostenibles para atraer compradores
                ambientalmente conscientes.</motion.p>
            </>
          )}


        </div>

      </section>
      <FooterIn />
    </PageWrapper>
  );
}