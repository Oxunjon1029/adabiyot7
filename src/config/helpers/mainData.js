import { unit1_1_data, unit1_2_data, unit1_3_data, unit1_4_data, unit1_5_data, unit1_6_data, unit1_7_data } from "./unit1/unit1";
import { unit2_1_data, unit2_2_data, unit2_3_data, unit2_4_data, unit2_5_data, unit2_6_data } from "./unit2/unit2";
import { unit3_1_data, unit3_2_data, unit3_3_data, unit3_4_data, unit3_5_data, unit3_6_data } from "./unit3/unit3";
import { unit4_1_data, unit4_2_data, unit4_3_data, unit4_4_data, unit4_5_data, unit4_6_data, unit4_7_data } from "./unit4/unit4";
import first from '../images/content/first.png'
import second from '../images/content/second.png'
import third from '../images/content/third.png'
import fourth from '../images/content/fourth.png'
export const MainData = [
  //1-fasl
  {
    unit: "1-FASL. INSON, TABIAT, O‘ZLIK",
    img: first,
    color: "#7DB46F",
    lessons: [
      {
        lesson: "Kirish. Badiiy tahlil asoslari .",
        path: "/unit1.1",
        data: unit1_1_data,
      },
      {
        lesson: "Normurod Norqobilov. “Oqbo‘yin”",
        path: "/unit1.2",
        data: unit1_2_data,
      },
      {
        lesson: "Zulfiya. “Sog‘inib”. Asqad Muxtor. “Oliy butunlik”",
        path: "/unit1.3",
        data: unit1_3_data,
      },
      {
        lesson: "Ernest Seton-Tompson. “Lobo”",
        path: "/unit1.4",
        data: unit1_4_data,
      },
      {
        lesson: "Ernest Heminguey. “Chol va dengiz”",
        path: "/unit1.5",
        data: unit1_5_data,
      },
      {
        lesson: "Fanlararo aloqa: adabiyot va tabiatshunoslik",
        path: "/unit1.6",
        data: unit1_6_data,
      },
      {
        lesson: "Takrorlash .",
        path: "/unit1.7",
        data: unit1_7_data,
      },
    ],
  },
  // 2-fasl
  {
    unit: "2-FASL. KO‘ZIM QAROG‘IDASAN, OTAYURT!",
    img: second,
    color: "#46B2AB",
    lessons: [
      {
        lesson: "Muhammad Ali. “Gumbazdagi nur”",
        path: '/unit2.1',
        data: unit2_1_data
      },
      {
        lesson: "Hamza. “Jonlarni jononi Vatan”.Sirojiddin Sayyid. “Vatanni o‘rganish”",
        path: '/unit2.2',
        data: unit2_2_data
      },
      {
        lesson: "Nabi Jaloliddin. “Ota”",
        path: '/unit2.3',
        data: unit2_3_data
      },
      {
        lesson: "Sergey Yesenin. “Shahinam, o, mening Shahinam...”.Rasul Hamzatov. “Qushqanotli, hoy karvon...”",
        path: '/unit2.4',
        data: unit2_4_data
      },
      {
        lesson: "Fanlararo aloqa: adabiyot va musiqa .",
        path: '/unit2.5',
        data: unit2_5_data
      },
      {
        lesson: "Takrorlash .",
        path: '/unit2.6',
        data: unit2_6_data
      }
    ]
  },
  // 3-fasl
  {
    unit: "3-FASL. O‘TMISHDAN SADOLAR",
    img: third,
    color: "#5DA5DB",
    lessons: [
      {
        lesson: "Alisher Navoiy. Qit’alar va fardlar",
        path: '/unit3.1',
        data: unit3_1_data
      },
      {
        lesson: "Jahon otin Uvaysiy. G‘azallar va chistonlar .",
        path: '/unit3.2',
        data: unit3_2_data
      },
      {
        lesson: "Abdulla Qodiriy. “Mehrobdan chayon”",
        path: '/unit3.3',
        data: unit3_3_data
      },
      {
        lesson: "Pirimqul Qodirov. “Yulduzli tunlar”",
        path: '/unit3.4',
        data: unit3_4_data
      },
      {
        lesson: "Fanlararo aloqa: adabiyot va tarix",
        path: '/unit3.5',
        data: unit3_5_data
      },
      {
        lesson: "Takrorlash",
        path: '/unit3.6',
        data: unit3_6_data
      }
    ]
  },
  // 4-fasl
  {
    unit: "4-FASL. TURFA QIYOFALAR",
    img: fourth,
    color: "#6C8AC6",
    lessons: [
      {
        lesson: "O‘lmas Umarbekov. “Qiyomat qarz”",
        path: '/unit4.1',
        data: unit4_1_data
      },
      {
        lesson: "Qamchibek Kenja. “Baliq ovi”",
        path: '/unit4.2',
        data: unit4_2_data
      },
      {
        lesson: "Saida Zunnunova. “Asfaltni qoq yorib unibdi giyoh…”.Iqbol Mirzo. “Daraxtlar”",
        path: '/unit4.3',
        data: unit4_3_data
      },
      {
        lesson: "Anton Chexov. “Xameleon”",
        path: '/unit4.4',
        data: unit4_4_data
      },
      {
        lesson: "Fanlararo aloqa: adabiyot va tasviriy san’at",
        path: '/unit4.5',
        data: unit4_5_data
      },
      {
        lesson: "Takrorlash",
        path: '/unit4.6',
        data: unit4_6_data
      },
      {
        lesson: "Lug‘at",
        path: '/unit4.7',
        data: unit4_7_data
      },
    ]
  },
]