import { Text } from "react-native";
import Section from "../components/section";

const AboutMe = () => {
    return (
      <Section title="Sobre Mim">
        <Text>{"\t"}Tenho 26 anos, nasci na Praia Grande/SP, mas atualmente moro em Sorocaba. Vou pra baixada todos os meses pra visitar meus pais, mas não sou viciado em praia.{"\n"}</Text>
        <Text>{"\t"}Jogo bastante video game, ultimamente zerei Hogwarts Legacy, mas o meu top 3 jogos são God of War, Horizon e Life is Strange.{"\n"}</Text>
        <Text>{"\t"}Maratono uma lista enorme de séries e já perdi muito tempo assistindo Supernatural, Greys Anatomy, Friends e How I met your mother.{"\n"}</Text>
        <Text>{"\t"}Minhas bandas favoritas são Paramore e Linkin Park.{"\n"}</Text>
        <Text>{"\t"}Sou formado em ciência da computação na UFSCar Sorocaba (2019) e desde então trabalhei somente em consultorias, atualmente estou na OPUS Software e trabalho com várias tecnologias desde java backend ou com react e até flutter (e sou péssimo com design).{"\n"}</Text>
      </Section>
    );
  };
  
  export default AboutMe;