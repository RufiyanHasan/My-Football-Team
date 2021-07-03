const players = [
  {
    id: 1,
    name: "Jordi Alba",
    imgURL:
      "https://assets.laliga.com/squad/2021/t178/p52356/256x278/p52356_t178_2021_0_001_000.png",
    currentClub: "Current Club: FC Barcelona",
    age: "Age: 32",
    debutYear: "Debut Year: 2012",
    prevClub: "Previous Club: Sevilla FC",
    goals:  "Goals: 10",
    assists:  "Assists: 15",
    position:  "Position: DF"  ,
    freekickScored: "Free Kick Scored: 2"  ,
  },
  {
    id: 2,
    name: "Lionel Messi",
    imgURL:
      "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg",
    currentClub: "FC Barcelona",
    age: "Age: 35",
    debutYear: "Debut Year: 2013",
    prevClub: "Previous Club: Real Madrid CF",
    goals:  "Goals: 102"  ,
    assists:  "Assists: 168"  ,
    position:  "Position: FW"  ,
    freekickScored:  "Free Kick Scored: 52" ,
  },
  {
    id: 3,
    name: "Pedri",
    imgURL:
      "https://i.ytimg.com/vi/1Em2BK18h5c/maxresdefault.jpg",
    currentClub: "FC Barcelona",
    age: "Age: 30",
    debutYear: "Debut Year: 2017",
    prevClub: "Previous Club: CD Leganes",
    goals: "Goals: 50",
    assists:  "Assists: 27",
    position: "Position: MF",
    freekickScored:  "Free Kick Scored: 4",
  },
  {
  id: 4,
  name: "Gerard Pique",
  imgURL:
    "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/11/w1200X800/Gerard_Pique_AP.jpg",
  currentClub: "FC Barcelona",
  age: "Age: 33",
  debutYear: "Debut Year: 2015",
  prevClub: "Previous Club: Cadiz CF",
  goals:  "Goals: 23",
  assists:  "Assists: 90",
  position: "Position: DF",
  freekickScored: "Free Kick Scored: 2",
},
{
  id: 5,
  name: "Ansu Fati",
  imgURL:
    "https://www.fcbarcelonanoticias.com/uploads/s1/12/37/19/1/ansu-fati-sonrie.jpeg?mrf-size=m",
  currentClub: "FC Barcelona",
  age: "Age: 27",
  debutYear: "Debut Year: 2020",
  prevClub: "Previous Club: Real Madrid CF",
  goals: "Goals: 12",
  assists:  "Assists: 3",
  position: "Position: FW",
  freekickScored: "Free Kick Scored: 5",
},
{
  id: 6,
  name: "Samuel Umtiti",
  imgURL:
    "https://tmssl.akamaized.net/images/foto/normal/samuel-umtiti-fc-barcellona-1594712763-43440.jpg?lm=1594712728",
  currentClub: "FC Barcelona",
  age: "Age: 29",
  debutYear: "Debut Year: 2019",
  prevClub: "Previous Club: SD Eibar",
  goals:  "Goals: 12",
  assists:  "Assists: 32",
  position:  "Position: DF",
  freekickScored: "Free Kick Scored: 2",
},
{
  id: 7,
  name: "Oscar Minqueza",
  imgURL:
    "https://www.fcbarcelona.com/photo-resources/2020/11/12/9fa550e1-b9ef-470a-87a9-010a2e233138/mini_1920x1080-Barca_B-OSCAR-MINGUEZA.jpg?width=1200&height=750",
  currentClub: "FC Barcelona",
  age: "Age: 25",
  debutYear: "Debut Year: 2021",
  prevClub: "Previous Club: Granada CF",
  goals:  "Goals: 5",
  assists:  "Assists: 8",
  position:  "Position: DF",
  freekickScored: "Free Kick Scored: 1",
},
{
  id: 8,
  name: "Sergi Roberto",
  imgURL:
    "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/12/gettyimages-1205122355-1606971732.jpg",
  currentClub: "FC Barcelona",
  age: "Age: 37",
  debutYear: "Debut Year: 2012",
  prevClub: "Previous Club: Athletic Club",
  goals: "Goals: 90",
  assists: "Assists: 160",
  position: "Position: DF",
  freekickScored:"Free Kick Scored: 5",
},
{
  id: 9,
  name: "Santiago Ramos",
  imgURL:
    "https://www.fcbarcelona.com/photo-resources/2020/11/12/210d4a71-f0b2-4abb-912c-ed2e493e56e3/mini_1920x1080-Barca_B-Santiago.jpg?width=1200&height=750",
  currentClub: "FC Barcelona",
  age: "Age: 29",
  debutYear: "Debut Year: 2018",
  prevClub: "Previous Club: Sevilla FC",
  goals:  "Goals: 34",
  assists:  "Assists: 65",
  position:  "Position: DF",
  freekickScored: "Free Kick Scored: 7",
},
{
  id: 10,
  name: "Ilaix",
  imgURL:
    "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/01/08/16101280189951.jpg",
  currentClub: "FC Barcelona",
  age: "Age: 30",
  debutYear: "Debut Year: 2016",
  prevClub: "Previous Club: Atletico Madrid",
  goals:   "Goals: 8",
  assists:  "Assists: 15",
  position:  "Position: MF",
  freekickScored: "Free Kick Scored: 6",
},
{
  id: 11,
  name: "Neto",
  imgURL:
    "https://www.fcbarcelona.com/photo-resources/2020/01/22/fe5cc94d-5f62-4280-9aff-98779729eff1/WhatsApp-Image-2020-01-22-at-21.47.35.jpeg?width=1200&height=750",
  currentClub: "FC Barcelona",
  age: "Age: 31",
  debutYear: "Debut Year: 2010",
  prevClub: "Previous Club: Athletic Club",
  goals:  "Goals: 0",
  assists:  "Assists: 25",
  position:  "Position: GK",
  freekickScored: "Free Kick Scored: 67",
},
];

export default players;
