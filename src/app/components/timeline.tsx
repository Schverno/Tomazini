import styles from '../styles/timeline.module.scss';

export default function Timeline() {

    const items = [
        {
            id: 1,
            title: "Adquisición",
            content: [
                {
                    subtitles: [
                        "Conseguimos las mejores posibilidades de inversión inmobiliaria.",
                        "Nos encargamos de todo con un equipo de especialistas conformado por corredores, abogados, contadores y otros profesionales.",
                        "Asesoramiento integral."
                    ],
                },
            ],
        },
        {
            id: 2,
            title: "Construcción",
            content: [
                {
                    subtitles: [
                        "Planificamos y construimos de acuerdo a tus necesidades a partir de un análisis financiero completo que garantice el mejor retorno de la inversión.",
                    ],
                },
            ],
        },
        {
            id: 3,
            title: "Gestión",
            content: [
                {
                    subtitles: [
                        "Si preferís comprar, vender o rentar, estamos a tu disposición.",
                        "Realizamos el mantenimiento de cada propiedad.",
                        "Podemos gestionar el pago de la renta."

                    ],
                },
            ],
        },
    ];

    return (
        <div className={styles.containerRoadMap}>
            {items.map((item) => (
                <div className={styles.containerItem} key={item.id}>
                    <div className={styles.containerContentItem}>
                        <div className={styles.containerContentHeader}>
                            <span className={`${styles.containerContentHeaderTime} ${styles.containerRoadmapItems}`}>
                                {item.title}
                            </span>
                        </div>
                        <ul className={styles.containerContentList}>
                            {item.content.map((contentItem, index) => (
                                <li key={index} className={styles.liOutside}>
                                    <ul>
                                        {contentItem.subtitles.map((subtitle, index) => (
                                            <span className={styles.contcont} key={index}>
                                                🞄&nbsp;
                                                <li className={styles.liInside} dangerouslySetInnerHTML={{ __html: subtitle }}></li>
                                            </span>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
