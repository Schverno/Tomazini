import styles from '../styles/timeline.module.scss';

export default function Timeline() {

    const items = [
        {
            id: 1,
            title: "Adquisición",
            content: [
                {
                    subtitles: [
                        "Conseguimos la propiedad, nos hacemos cargo porque somos corredores inmobiliarios, tenemos abogados, contadores y otro profesionales para asesorarte.",
                        "Te abrimos la compañía en Estados Unidos y hacemos la contabilidad.",
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
                        "Tenemos arquitectos, ingenieros y profesionales de la construcción en general.",
                        "Sacamos todos los costos y planificamos de acuerdo a tus necesidades.",
                        "<strong>Costo total:</strong> costo del trabajo con material + 15 o 20% del total que se gaste en compra de propiedad y remodelación.",
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
                        "Se puede comprar o vender.",
                        "Se puede rentar la propiedad y hacemos el mantenimiento. Inclusive el desalojo en caso de falta de pago."

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
