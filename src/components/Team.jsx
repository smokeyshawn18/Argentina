// In a parent component
import TeamSection from "./TeamSection";
import Messi from "../assets/messi.jpg";
import Lautaro from "../assets/lautaro.avif";
import Alvarez from "../assets/alvareez.jpg";
import Atletico from "../assets/atletico.png";
import Inter from "../assets/inter.webp";
import Miami from "../assets/miami.png";
import Roma from "../assets/roma.png";
import Dybala from "../assets/dybala.webp";
import Mac from "../assets/mac.webp";
import LiverPool from "../assets/liv.png";
import De from "../assets/de.jpeg";
import ADM from "../assets/adm.webp";
import Benfica from "../assets/benfica.png";
import Paredes from "../assets/paredes.png";
import Nicolas from "../assets/nic.jpg";
import Juventus from "../assets/juv.png";
import Enzo from "../assets/enzo.jpg";
import Chelsea from "../assets/chelsea.png";
import Garnacho from "../assets/garnacho.webp";
import United from "../assets/united.svg";
import Lisandro from "../assets/lisandro.webp";
import Bayer from "../assets/baye.png";
import Pala from "../assets/pal.jpg";
import Romero from "../assets/romero.webp";
import Tottenham from "../assets/tot.jpg";
import Emi from "../assets/emi.jpg";
import Villa from "../assets/villa.png";
import Molina from "../assets/molina.jpg";
import Lyon from "../assets/lyon.png";
import Alamada from "../assets/almada.avif";

const players = [
  {
    name: "Lionel Messi",
    position: "RW",
    shirt: 10,
    age: 37,
    image: Messi,
    club: Miami,
    careerStats: {
      appearances: 1083,
      goals: 850,
      assists: 379,
    },
    seasonStats: {
      appearances: 17,
      goals: 10,
      assists: 2,
    },
  },
  {
    name: "Ángel Di María",
    position: "AM",
    shirt: 11,
    status: "Retired (Int'l)",
    age: 36,
    image: ADM,
    club: Benfica,
    careerStats: {
      appearances: 913,
      goals: 210,
      assists: 299,
    },
    seasonStats: {
      appearances: 41,
      goals: 15,
      assists: 9
    },
  },
  {
    name: "Lautaro Martinez",
    position: "ST",
    shirt: 22,
    club: Inter,
    age: 27,
    image: Lautaro,
    careerStats: {
      appearances: 408,
      goals: 185,
      assists: 57,
    },
    seasonStats: {
      appearances: 55,
      goals: 25,
      assists: 4,
    },
  },
  {
    name: "Paulo Dybala",
    position: "RW",
    shirt: 21,
    club: Roma,
    age: 30,
    image: Dybala,
    careerStats: {
      appearances: 541,
      goals: 190,
      assists: 89,
    },
    seasonStats: {
      appearances: 38,
      goals: 9,
      assists: 4,
    },
  },

  {
    name: "Julián Álvarez",
    position: "ST",
    shirt: 9,
    age: 24,
    image: Alvarez,
    club: Atletico,
    careerStats: {
      appearances: 261,
      goals: 99,
      assists: 50,
    },
    seasonStats: {
      appearances: 61,
      goals: 32,
      assists: 8,
    },
  },
  {
    name: "Nicolás González",
    position: "RW",
    shirt: 15,
    age: 26,
    image: Nicolas,
    club: Juventus,
    careerStats: {
      appearances: 290,
      goals: 77,
      assists: 34,
    },
    seasonStats: {
      appearances: 37,
      goals: 6,
      assists: 4,
    },
  },
  {
    name: "Rodrigo De Paul",
    position: "CM",
    shirt: 7,
    age: 30,
    image: De,
    club: Atletico,
    careerStats: {
      appearances: 503,
      goals: 56,
      assists: 75,
    },
    seasonStats: {
      appearances: 56,
      goals: 3,
      assists: 8,
    },
  },
  {
    name: "Thiago Almada",
    position: "AM",
    shirt: 11,
    age: 23,
    image: Alamada,
    club: Lyon,
    careerStats: {
      appearances: 205,
      goals: 54,
      assists: 36,
    },
    seasonStats: {
      appearances: 24,
      goals: 4,
      assists: 4,
    },
  },
  {
    name: "Alexis Mac Allister",
    position: "CM",
    shirt: 20,
    club: LiverPool,
    age: 25,
    image: Mac,
    careerStats: {
      appearances: 292,
      goals: 44,
      assists: 32,
    },
    seasonStats: {
      appearances: 55,
      goals: 9,
      assists: 5,
    },
  },

  {
    name: "Leandro Paredes",
    position: "CM",
    shirt: 5,
    club: Roma,
    age: 30,
    image: Paredes,
    careerStats: {
      appearances: 446,
      goals: 35,
      assists: 44,
    },
    seasonStats: {
      appearances: 38,
      goals: 3,
      assists: 2,
    },
  },

  {
    name: "Enzo Fernandez",
    position: "DM",
    shirt: 24,
    age: 23,
    image: Enzo,
    club: Chelsea,
    careerStats: {
      appearances: 207,
      goals: 28,
      assists: 28,
    },
    seasonStats: {
      appearances: 51,
      goals: 7,
      assists: 15,
    },
  },

  {
    name: "Exequiel Palacios",
    position: "CM",
    shirt: 14,
    age: 26,
    image: Pala,
    club: Bayer,
    careerStats: {
      appearances: 240,
      goals: 24,
      assists: 25,
    },
    seasonStats: {
      appearances: 40,
      goals: 1,
      assists: 7,
    },
  },
  {
    name: "Alejandro Garnacho",
    position: "LW",
    shirt: 17,
    age: 20,
    image: Garnacho,
    club: United,
    careerStats: {
      appearances: 92,
      goals: 15,
      assists: 10,
    },
    seasonStats: {
      appearances: 57,
      goals: 10,
      assists: 11,
    },
  },
  {
    name: "Nahuel Molina",
    position: "RB",
    shirt: 26,
    age: 26,
    image: Molina,
    club: Atletico,
    careerStats: {
      appearances: 266,
      goals: 19,
      assists: 26,
    },
    seasonStats: {
      appearances: 50,
      goals: 1,
      assists: 4,
    },
  },

  {
    name: "Cristian Romero",
    position: "CB",
    shirt: 13,
    age: 26,
    image: Romero,
    club: Tottenham,
    careerStats: {
      appearances: 257,
      goals: 15,
      assists: 10,
    },
    seasonStats: {
      appearances: 28,
      goals: 1,
      assists: 0,
    },
  },
  {
    name: "Lisandro Martinez",
    position: "CB",
    shirt: 25,
    age: 26,
    image: Lisandro,
    club: United,
    careerStats: {
      appearances: 260,
      goals: 10,
      assists: 13,
    },
    seasonStats: {
      appearances: 35,
      goals: 2,
      assists: 2,
    },
  },
  {
    name: "Emiliano Martínez",
    position: "GK",
    shirt: 1,
    age: 32,
    image: Emi,
    club: Villa,
    careerStats: {
      appearances: 305,
      goalsConceded: 336,
      cleanSheets: 119,
    },
    seasonStats: {
      appearances: 58,
      goalsConceded: 68,
      cleanSheets: 17,
    },
  },

  // Add more players as needed
];

function App() {
  return (
    <div>
      <TeamSection players={players} />
    </div>
  );
}

export default App;
