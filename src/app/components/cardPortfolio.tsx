import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "../styles/portfolio.module.scss"
import { FaBed, FaToilet,FaLocationDot,FaExpand    } from "react-icons/fa6"

// Define los datos de las cards para Residencial y Comercial
const dataResidencial = [
    { id: 1, img: "/portfolio/residencial/1.webp", alt: "residencial 1", precio: "Precio: 600,000 USD ", tipo: " Uso residencial (para tres casas familiares).",masinfo:"Posibilidad de Inversión.",masinfo2:"", dir: "204 S Chillingworth Drive, West Palm Beach.", info: [{ icono: FaExpand  , num: "0,58 Acres" }, { icono: FaLocationDot , num: "Solo lote"}] },
];

const dataComercial = [
    { id: 1, img: "/portfolio/comercial/1.webp", alt: "comercial 1", precio: "Precio: 1,100,000 USD ", tipo: " Uso comercial",masinfo:"Posibilidad de Inversión.",masinfo2:"Lote limpio y cerrado.", dir: "3201 Broadway, West Palm Beach.", info: [{ icono: FaExpand  , num: "0,14 Acres" }] },
    { id: 2, img: "/portfolio/comercial/2.webp", alt: "comercial 2", precio: "Precio: CONSULTAR ", tipo: " Uso comercial",masinfo:"Posibilidad de Inversión.",masinfo2:"", dir: "3406 Broadway, West Palm Beach.", info: [{ icono: FaExpand  , num: "0,13 Acres" }] },
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
                        <h3> {item.dir}</h3>
                    </div>
                    <div className={styles.dir}>
                    <p>{item.tipo}</p>
                    <p>{item.masinfo}</p>
                    <p>{item.masinfo2}</p>
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
