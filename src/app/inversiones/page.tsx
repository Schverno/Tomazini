'use client'

import { PageWrapper } from "../components/page-wrapper";
import FooterIn from "../components/footerIn";
import Header from "../components/header"
import Timeline from "../components/timeline"
import styles from '../styles/inversiones.module.scss'
import { motion, useScroll } from "framer-motion";
import Carousel from "../components/carousel"
import Image from "next/image";
import Form from "../components/form";
import { useRef } from "react";

import Logo from '../../../public/logoinversiones.svg'

import Slide1 from '../../../public/inversiones/slide1.webp'
import Slide2 from '../../../public/inversiones/slide1.webp'
import Slide3 from '../../../public/inversiones/slide1.webp'

export default function Inversiones() {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "0.6 1"]
  });

  const slides = [
    Slide1,
    Slide2,
    Slide3,
  ]


  return (
    <PageWrapper  >
      <Header />
      <main className="min-h-screen">
        <section className={styles.wrapper}>
          <motion.div className={styles.texto}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}>
            <h1>¿Por qué invertir <span className="hidden md:block h-0"><br /></span>
              en Tomazini Group? </h1>
            <p>A un nivel de confianza del país, de la propiedad privada e inversión privada y <strong>seguridad jurídica garantizada.</strong></p>
            <p>Cada inversión es distinta y luego de conocer al inversor y sus objetivos, vamos <strong>buscar la mejor propuesta dependiendo de sus metas</strong>  a corto, mediano o largo plazo y asesorar de la mejor forma.</p>
            <p>Es un <strong> joint venture.</strong> El inversor es un partner y estamos juntos como socios. Hacemos el proyecto, si el partner decide vender, se hace.</p>
            <a href="#contacto"><button>Contactanos</button></a>
          </motion.div>
          <motion.div
            className={styles.carousel}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.8 }}
          >
            <Carousel autoSlide={true}>
              {slides.map((s, index) => (
                <Image key={index} alt="Imagen carrousel" priority={true} style={{ objectFit: "cover", width: "100%" }} width={1800} height={1800} src={s} />
              ))}
            </Carousel>
          </motion.div>

        </section>

        <section className={styles.wrapperTimeline}>
          <motion.div className={styles.texto}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.2 }}          >
            <h1>Proceso de inversión</h1>

          </motion.div>
          <motion.div className={styles.timeline}
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true, margin: "0px" }}
                   transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5}} >
            <Timeline/>
          </motion.div>
        </section>

        <section id="contacto" className={styles.form}>
          <motion.div
            ref={ref}
            style={{ scaleX: scrollYProgress, opacity: scrollYProgress }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1, damping: 15, stiffness: 100, type: "spring" }}
            className={styles.wrapperform}>

            <div className={styles.wrappercard}>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1, damping: 15, stiffness: 100, type: "spring" }}
                className={styles.cardfooter}>

                <motion.div

                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
                  className={styles.logo}>
                  <Image src={Logo} width={250} height={119} alt="logo" />
                </motion.div>

                <motion.div

                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
                  className={styles.cols}>
                  <h1>Siempre dispuestos <span className="hidden md:block h-0"><br /></span>
                    a colaborar en nuevos proyectos </h1>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2, delay: 1.2 }}
                  className={styles.cols}>
                  <Form />

                </motion.div>

              </motion.div>
            </div>
          </motion.div>

        </section>
      </main>
      <FooterIn />
    </PageWrapper>
  );
}