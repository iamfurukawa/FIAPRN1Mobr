import Link from "../components/link";
import Section from "../components/section";

const Contact = () => {
    return (
      <Section title="Contato">
        <Link title='LinkedIn' url='https://www.linkedin.com/in/iamfurukawa/'/>
        <Link title='Email' url='vinicius_furuka@hotmail.com.br' isAlert/>
        <Link title='Instagram' url='https://www.instagram.com/iamvinifurukawa/'/>
      </Section>
    );
  };
  
  export default Contact;