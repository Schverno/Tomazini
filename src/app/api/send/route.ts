


import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_SRrokTiZ_P4bXXHCMHKHbJPXfZUzsde6y');

// @ts-ignore

export async function POST(values) {
  try {

    const body = await values.json();
    
    const emailData = {
      from: 'Noreply <noreply@neopolitan.me>',
      to: ['neo@neopolitan.me'],
      subject: 'Nuevo contacto desde la web - Tomazini Group - ' + body.username,
      react: EmailTemplate({
        nombre: body.username,
        email: body.emailAddress,
        telefono: body.phone,
        mensaje: body.mensaje,
    }),
      text: "",
    };

    const data = await resend.emails.send(emailData);

    return Response.json(data);
  } catch (error) {

    return Response.json({ error });
  }
}
