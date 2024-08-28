import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text, Font } from "@react-email/components";
import * as React from "react";

interface CreativoThankYouEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.creativohn.com/landing";

export const CreativoThankYouEmail = ({ userFirstname }: CreativoThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Gracias por contactarnos - Creativo</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://raw.githubusercontent.com/keven-bardales/creativo/main/public/hoz_purplelogo_darktext_title.png`}
          width="180"
          alt="Creativo"
          style={logo}
        />
        <Text style={paragraph}>Hola {userFirstname},</Text>
        <Text style={paragraph}>
          ¡Gracias por ponerte en contacto con nosotros! Hemos recibido tu información y nos pondremos en contacto contigo lo antes posible para
          ayudarte con tus necesidades de diseño y marketing.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={baseUrl}>
            Visita nuestro sitio web
          </Button>
        </Section>
        <Text style={paragraph}>
          Saludos cordiales,
          <br />
          El equipo de Creativo
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Creativo - Transforma tu negocio, promueve tu marca</Text>
        <Text style={footer}>San Pedro Sula, Honduras</Text>
      </Container>
    </Body>
  </Html>
);

CreativoThankYouEmail.PreviewProps = {
  userFirstname: "Usuario",
} as CreativoThankYouEmailProps;

export default CreativoThankYouEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer: React.CSSProperties = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#7E3EEE",
  borderRadius: "12px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
