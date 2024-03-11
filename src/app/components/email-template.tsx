
interface EmailTemplateProps {
    nombre: string;
    telefono: string;
    email: string;
    mensaje: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    nombre,
    telefono,
    email,
    mensaje,
  }) => (
    <div style={styles.container}>
      <h1 style={styles.title}>Recibimos un nuevo mensaje de la web</h1>
      <p style={styles.paragraph}><strong>Nombre completo:</strong> {nombre}</p>
      <p style={styles.paragraph}><strong>Teléfono:</strong> {telefono}</p>
      <p style={styles.paragraph}><strong>Email:</strong> {email}</p>
      <p style={styles.paragraph}><strong>Mensaje:</strong> {mensaje}</p>
    </div>
  );
  
  const styles = {
    container: {
      fontFamily: 'Poppins, sans-serif',
      padding: '20px',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '24px',
      color: '#616C5E',
      marginBottom: '20px',
      borderBottom: '2px solid #616C5E',
      display: 'inline-flex',
    },
    paragraph: {
      margin: '10px 0',
      fontSize: '16px',
      color: '#555',
    },
  };
  
  export default EmailTemplate;
