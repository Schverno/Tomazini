import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "../styles/portfolio.module.scss"
import { FaBed, FaToilet } from "react-icons/fa6"

// Define los datos de las cards para Residencial y Comercial
const dataResidencial = [
    { id: 1, img: "/portfolio/1.webp", alt: "test", precio: "Precio: $90.000", tipo: "Vivienda unifamiliar", dir: "7787 South Ada Street, Florida USA", info: [{ icono: FaBed, num: "2" }, { icono: FaToilet, num: "2" }] },
    { id: 2, img: "/portfolio/2.webp", alt: "test1", precio: "Precio: $90.000", tipo: "Vivienda unifamiliar", dir: "7787 South Ada Street, Florida USA", info: [{ icono: FaBed, num: "2" }, { icono: FaToilet, num: "1" }] },
    { id: 3, img: "/portfolio/3.webp", alt: "test2", precio: "Precio: $90.000", tipo: "Vivienda unifamiliar", dir: "7787 South Ada Street, Florida USA", info: [{ icono: FaBed, num: "2" }, { icono: FaToilet, num: "2" }] },
    { id: 4, img: "/portfolio/2.webp", alt: "test3", precio: "Precio: $90.000", tipo: "Vivienda unifamiliar", dir: "7787 South Ada Street, Florida USA", info: [{ icono: FaBed, num: "2" }, { icono: FaToilet, num: "2" }] },
];

const dataComercial = [
    { id: 1, img: "/portfolio/2.webp", alt: "test4", precio: "Precio: $100.000", tipo: "Vivienda unifamiliar", dir: "7787 South Ada Street, Florida USA", info: [{ icono: FaBed, num: "2" }, { icono: FaToilet, num: "2" }] },
    { id: 2, img: "/portfolio/3.webp", alt: "test5", precio: "Precio: $100.000", tipo: "Vivienda unifamiliar", dir: "7787 South Ada Street, Florida USA", info: [{ icono: FaBed, num: "2" }, { icono: FaToilet, num: "2" }] },
];

export default function PortfolioCards() {
    const [activeTab, setActiveTab] = useState("Residencial");
    const [showMore, setShowMore] = useState(false);
    const initialItemsToShow = 3;


    // Función para cambiar entre Residencial y Comercial
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setShowMore(false); // Resetear la opción de mostrar más al cambiar de pestaña

    };

    // Renderiza las cards basadas en el tab activo
    const renderCards = () => {
        const data = activeTab === "Residencial" ? dataResidencial : dataComercial;
        const itemsToShow = showMore ? data.length : initialItemsToShow;

        return data.slice(0, itemsToShow).map((item, index) => (
            <motion.div
                key={item.id}
                className={styles.card}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.2, damping: 15, stiffness: 100, type: "spring" }}
            >
                <div className={styles.header}>
                    {item.precio}
                </div>
                <div className={styles.img}>
                    <img src={item.img} draggable="false" alt={item.alt} />
                </div>
                <div className={styles.footer}>

                    <div className={styles.tipo}>
                        <h3> {item.tipo}</h3>
                    </div>
                    <div className={styles.dir}>
                        <p>{item.dir}</p>
                    </div>
                    <div className={styles.wrappericons}>
                        {item.info && item.info.map((infoItem, i) => (
                            <span key={i}>
                                <infoItem.icono />
                                {infoItem.num}
                                {i < item.info.length - 1 && <span className={styles.barra}>|</span>}

                            </span>
                        ))}
                    </div>

                </div>

            </motion.div>
        ));
    };

    return (
        <main>
            <div className={styles.buttonwrapper}>
                <motion.button
                    className={activeTab === "Residencial" ? styles.active : ""}
                    onClick={() => handleTabChange("Residencial")}
                >
                    <div className={styles.txt}>
                        Residencial
                    </div>
                    <motion.span
                        className={styles.line}
                        animate={{ backgroundColor: activeTab === "Residencial" ? "#616C5E" : "#AAAAAA" }}
                    />
                </motion.button>
                <motion.button
                    className={activeTab === "Comercial" ? styles.active : ""}
                    onClick={() => handleTabChange("Comercial")}
                >
                    <div className={styles.txt}>
                        Comercial
                    </div>

                    <motion.span
                        className={styles.line}
                        animate={{ backgroundColor: activeTab === "Comercial" ? "#616C5E" : "#AAAAAA" }}
                    />
                </motion.button>
            </div>
            <AnimatePresence>
                <div className={styles.cardswrapper}>
                    {renderCards()}
                </div>
            </AnimatePresence>
            <div>
                {!showMore && (activeTab === "Residencial" ? dataResidencial.length : dataComercial.length) > initialItemsToShow && (
                    <button className={styles.showMoreBtn} onClick={() => setShowMore(true)}>
                        Ver más
                    </button>
                )}
            </div>
        </main>
    );
}
