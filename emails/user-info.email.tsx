import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

interface UserInformationEmailProps {
  userFirstname: string;
  userEmail: string;
  userDescription: string;
}

export const UserInformationEmail = ({ userFirstname, userEmail, userDescription }: UserInformationEmailProps) => (
  <Html>
    <Head />
    <Preview>Nuevo contacto de usuario - Creativo</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`/static/hoz_purplelogo_darktext_title.png`} width="180" alt="Creativo" style={logo} />
        <Text style={paragraph}>Hola,</Text>
        <Text style={paragraph}>Has recibido un nuevo contacto de usuario. A continuación, se detalla la información proporcionada:</Text>
        <Text style={paragraph}>
          <strong>Nombre:</strong> {userFirstname}
        </Text>
        <Text style={paragraph}>
          <strong>Email:</strong> {userEmail}
        </Text>
        <Text style={paragraph}>
          <strong>Descripción:</strong> {userDescription}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Este es un correo generado automáticamente por el sitio web Creativo. Por favor, no respondas a este correo.</Text>
      </Container>
    </Body>
  </Html>
);

UserInformationEmail.PreviewProps = {
  userFirstname: "Usuario",
  userEmail: "usuario@ejemplo.com",
  userDescription: "Descripción del usuario",
} as UserInformationEmailProps;

export default UserInformationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  margin: "0 auto",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
