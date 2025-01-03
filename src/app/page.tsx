'use client'

import { PageWrapper } from "./components/page-wrapper";
import Headerhome from "./components/headerhome";
import FooterHomer from "./components/footerhome";
import Form from "./components/form";
import styles from './styles/home.module.scss'
import Carousel from "./components/carousel"
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import AnimatedTextWord from "./components/AnimatedTextWord";
import Link from "next/link";

import Slide1 from '../../public/1.webp'

import icon1 from '../../public/iconcard1.svg'
import icon2 from '../../public/iconcard2.svg'
import icon3 from '../../public/iconcard3.svg'

import SlideComercial1 from '../../public/comercial.jpg'
import SlideComercial2 from '../../public/comercial2.webp'

import SlideResidencial1 from '../../public/residencial.webp'
import SlideResidencial2 from '../../public/residencial2.webp'

import { BiChevronRight } from "react-icons/bi";
import { useRef } from "react";


import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa6"


export default function Home() {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "0.6 1"]
  });

  const slides = [
    Slide1
  ]

  const slidesComercial = [
    SlideComercial2
  ]

  const slidesResidencial = [
    SlideResidencial1
  ]

  return (
    <PageWrapper  >
      <Headerhome />
      <main className="min-h-screen">
        <section className={styles.home}>
          <div className={styles.texto}>
            <AnimatedTextWord text="Tus inversiones inmobiliarias en manos expertas" />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}>
              Tomazini Group es una empresa de construcción, desarrollo
              y bienes raíces con una nueva visión sobre la administración y la inversión de propiedades.</motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}
            >Nuestros servicios incluyen desarrollo, construcción,
              adquisición y administración de propiedades comerciales
              y residenciales.</motion.p>
            <motion.a href="#contacto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.8 }}
            >
              <button>
                Contactanos
              </button>
            </motion.a>
          </div>
          <div className={styles.carousel}>
            <Carousel autoSlide={true}>
              {slides.map((s, index) => (
                <Image key={index} alt="Imagen carrousel" priority={true} style={{ objectFit: "cover", width: "100%" }} width={1800} height={1800} src={s} />
              ))}
            </Carousel>
          </div>

        </section>
        <section className={styles.servicios}>
          <div className={styles.container}>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5, damping: 10, stiffness: 100, type: "spring" }}
            >Nuestros servicios</motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 0.8, damping: 12, stiffness: 100, type: "spring" }}
            >Te asesoramos desde el principio hasta el final de la inversión.</motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1.5, damping: 12, stiffness: 100, type: "spring" }}
              className={styles.wrappercards}>
              <div className={styles.card}>
                <Image src={icon1} width={100} height={100} alt="Icono adquisición" />
                <h2>Adquisición</h2>
                <p>Conseguimos las mejores posibilidades de inversión inmobiliaria: nos encargamos de todo con un equipo de especialistas conformado por corredores, abogados, contadores y otros profesionales para asegurar un asesoramiento integral.</p>
    
              </div>
              <div className={styles.card}>
                <Image src={icon2} width={100} height={100} alt="Icono construccion" />

                <h2>Construcción</h2>
                <p>Planificamos y construimos de acuerdo a tus necesidades a partir de un análisis financiero completo que garantice el mejor retorno de la inversión.</p>
              </div>
              <div className={styles.card}>
                <Image src={icon3} width={100} height={100} alt="Icono gestión" />

                <h2>Gestión</h2>
                <p>Si preferís comprar, vender o rentar, estamos a tu disposición. Además, realizamos el mantenimiento de cada propiedad y podemos gestionar el pago de la renta.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className={styles.porfolio}>
          <div className={styles.container}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1, damping: 15, stiffness: 100, type: "spring" }}
              className={styles.cardporfolio}>
              <div className={styles.header}>
                <h2>Comercial</h2>
                <div className={styles.chevron}>
                  <a className={styles.chevron}
                    href="/portfolio">
                    <BiChevronRight />
                  </a>
                </div>
              </div>
              <div className={styles.wrapperCarousel}>
                <Carousel autoSlide={true}>
                  {slidesComercial.map((s, index) => (
                    <Image key={index} alt="Imagen comercial" priority={true} style={{ objectFit: "cover", width: "100%" }} width={700} height={700} src={s} />
                  ))}
                </Carousel>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1, damping: 15, stiffness: 100, type: "spring" }}
              className={styles.cardporfolio}>
              <div className={styles.header}>
                <h2>Residencial</h2>
                <a className={styles.chevron}
                  href="/portfolio">
                  <BiChevronRight />
                </a>
              </div>
              <div className={styles.wrapperCarousel}>
                <Carousel autoSlide={true}>
                  {slidesResidencial.map((s, index) => (
                    <Image key={index} alt="Imagen comercial" priority={true} style={{ objectFit: "cover", width: "100%" }} width={700} height={700} src={s} />
                  ))}
                </Carousel>
              </div>
            </motion.div>
          </div>
          <div className="flex items-center justify-center w-full">
            <motion.a href="/portfolio"
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            >
              <button className={styles.buttonportf}>
                Ver portfolio
              </button>
            </motion.a>
          </div>
        </section>
        <section      id="contacto" className={styles.form}>
          <motion.div
            ref={ref}
            style={{ scaleX: scrollYProgress, opacity: scrollYProgress }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay: 1, damping: 15, stiffness: 100, type: "spring" }}
            className={styles.wrapperform}>


          </motion.div>
          <div  className={styles.wrappercard}>

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
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}
                className={styles.cols}>
                <h2>Contacto</h2>
                <p><strong>5842 NW 74th Terrace (Parkland, Fl 33067)</strong><br />
                  Servicio de emergencia 24 hs.<br />
                  8:00 a 16:50 h.<br />
                  <a href="tel:954 822 8904">954-822-8904</a><br />
                  <a href="mailto:Tomazinigroup@yahoo.com">Tomazinigroup@yahoo.com</a></p>
                <p className={styles.medium}>
                  Áreas de Cobertura - Estado de Florida </p>
                <div className={styles.iconswrapper}>
                  <Link href="https://instagram.com/" target="_blank">
                    <FaInstagram />
                  </Link>
                  <Link href="https://wa.me/" target="_blank">
                    <FaWhatsapp />
                  </Link>
                  <Link href="https://facebook.com/" target="_blank">
                    <FaFacebookF />
                  </Link>

                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{opacity:0}}
                viewport={{ once: true, margin: "0px" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}
                className={styles.cols}>
                <Form/>
                
              </motion.div>

            </motion.div>
          </div>
        </section>
      </main>
      <FooterHomer />
    </PageWrapper>
  );
}
