"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as  z from "zod"
import { POST } from '../api/send/route'
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Ingresa tu nombre completo.",
    }),
    emailAddress: z.string().email({
        message: "Ingresa un email válido.",
    }),
    phone: z.string().min(4, {
        message: "Ingresa un número válido",
    }),
    mensaje: z.string().min(2, {
        message: "Ingresa tu mensaje.",
    }),

})

export default function ProfileForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            emailAddress: "",
            phone: "",
            mensaje: "",
        }
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        // Dentro de handleSubmit
        await POST(values);

        try {
            const res = await fetch("/api/send/", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Puedes realizar acciones adicionales aquí después de la llamada al API
            setFormSubmitted(true);

        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };



    return (
        <AnimatePresence >
            {!formSubmitted ? (

                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} method="POST" className="space-y-8">

                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Nombre completo" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField control={form.control} name="emailAddress" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="email@email.com" {...field} type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Teléfono" {...field} type="number" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField control={form.control} name="mensaje" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Mensaje..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />


                                <Button type="submit">Enviar</Button>
                            </form>
                        </Form>
                    </motion.div>

            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1.5 }}>
                    <p className={`success-message text-center ${formSubmitted ? 'active' : ''}`}>¡El formulario se envió con éxito!</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
