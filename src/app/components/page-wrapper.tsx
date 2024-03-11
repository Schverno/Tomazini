"use client"

import { motion } from "framer-motion";

export const PageWrapper = ({
    children,
}: {
    children: React.ReactNode;

}) => (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
        >
            {children}
        </motion.div>
)