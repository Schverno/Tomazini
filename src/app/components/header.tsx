import Link from "next/link";
import styles from '../styles/variables.module.scss'

export default function Header() {
    return (
        <main className="flex  flex-row items-center justify-between p-24">
            <Link className={styles.red} href="/">Inicio</Link>
            <Link href="/inversiones">Inversiones</Link>
            <Link href="/esg">ESG</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/portfolio">Portfolio</Link>
        </main>
    );
}