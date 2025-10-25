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
      appearances: 1115,
      goals: 874,
      assists: 386,
    },
    seasonStats: {
      appearances: 15,
      goals: 17,
      assists: 13,
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
      appearances: 957,
      goals: 228,
      assists: 310,
    },
    seasonStats: {
      appearances: 13,
      goals: 6,
      assists: 2,
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
      appearances: 463,
      goals: 210,
      assists: 65,
    },
    seasonStats: {
      appearances: 17,
      goals: 11,
      assists: 2,
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
      appearances: 579,
      goals: 199,
      assists: 93,
    },
    seasonStats: {
      appearances: 6,
      goals: 1,
      assists: 0,
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
      appearances: 325,
      goals: 132,
      assists: 60,
    },
    seasonStats: {
      appearances: 17,
      goals: 7,
      assists: 5,
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
      appearances: 332,
      goals: 83,
      assists: 36,
    },
    seasonStats: {
      appearances: 15,
      goals: 1,
      assists: 3,
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
      appearances: 564,
      goals: 59,
      assists: 86,
    },
    seasonStats: {
      appearances: 22,
      goals: 1,
      assists: 5,
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
      appearances: 238,
      goals: 58,
      assists: 40,
    },
    seasonStats: {
      appearances: 8,
      goals: 2,
      assists: 2,
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
      appearances: 346,
      goals: 51,
      assists: 40,
    },
    seasonStats: {
      appearances: 14,
      goals: 3,
      assists: 1,
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
      appearances: 486,
      goals: 39,
      assists: 46,
    },
    seasonStats: {
      appearances: 15,
      goals: 1,
      assists: 3,
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
      appearances: 260,
      goals: 37,
      assists: 44,
    },
    seasonStats: {
      appearances: 19,
      goals: 5,
      assists: 4,
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
      appearances: 279,
      goals: 25,
      assists: 32,
    },
    seasonStats: {
      appearances: 5,
      goals: 0,
      assists: 1,
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
      appearances: 152,
      goals: 26,
      assists: 21,
    },
    seasonStats: {
      appearances: 6,
      goals: 0,
      assists: 0,
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
      appearances: 319,
      goals: 20,
      assists: 30,
    },
    seasonStats: {
      appearances: 13,
      goals: 0,
      assists: 0,
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
      appearances: 289,
      goals: 16,
      assists: 10,
    },
    seasonStats: {
      appearances: 11,
      goals: 1,
      assists: 1,
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
      appearances: 296,
      goals: 13,
      assists: 15,
    },
    seasonStats: {
      appearances: 0,
      goals: 0,
      assists: 0,
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
      appearances: 366,
      goalsConceded: 403,
      cleanSheets: 139,
    },
    seasonStats: {
      appearances: 11,
      goalsConceded: 8,
      cleanSheets: 4,
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
