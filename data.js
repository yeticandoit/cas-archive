const CAS_RELEASES = [
  { title:"I.", year:"2012", type:"ep", color:"mist", official:"https://www.cigarettesaftersex.com/record/i", tracks:["Nothing's Gonna Hurt You Baby","I'm a Firefighter","Dreaming of You","Starry Eyes"] },
  { title:"Affection", year:"2015", type:"single", color:"rose", official:"https://www.cigarettesaftersex.com/record/affection", tracks:["Affection","Keep on Loving You"] },
  { title:"K.", year:"2016", type:"single", color:"wine", official:"https://www.cigarettesaftersex.com/record/k", tracks:["K."] },
  { title:"Each Time You Fall in Love", year:"2016", type:"single", color:"sepia", official:"https://www.cigarettesaftersex.com/record/each-time-you-fall-in-love", tracks:["Each Time You Fall In Love"] },
  { title:"Cigarettes After Sex", year:"2017", type:"album", color:"mono", official:"https://www.cigarettesaftersex.com/record/cigarettes-after-sex", tracks:["K.","Each Time You Fall In Love","Sunsetz","Apocalypse","Flash","Sweet","Opera House","Truly","John Wayne","Young & Dumb"] },
  { title:"Crush", year:"2018", type:"single", color:"pink", official:"https://www.cigarettesaftersex.com/record/crush", tracks:["Crush","Sesame Syrup"] },
  { title:"You're All I Want", year:"2019", type:"single", color:"darkrose", official:"https://www.cigarettesaftersex.com/record/youre-all-i-want", tracks:["You're All I Want"] },
  { title:"Cry", year:"2019", type:"album", color:"blue", official:"https://www.cigarettesaftersex.com/record/cry", tracks:["Don't Let Me Go","Kiss It Off Me","Heavenly","You're the Only Good Thing In My Life","Touch","Hentai","Cry","Falling In Love","Pure"] },
  { title:"Neon Moon", year:"2020", type:"single", color:"neon", official:"https://www.cigarettesaftersex.com/lyrics/neon-moon", tracks:["Neon Moon"] },
  { title:"Pistol", year:"2022", type:"single", color:"red", official:"https://www.cigarettesaftersex.com/lyrics/pistol", tracks:["Pistol"] },
  { title:"Bubblegum", year:"2023", type:"single", color:"bubble", official:"https://www.cigarettesaftersex.com/lyrics/bubblegum", tracks:["Bubblegum","Stop Waiting"] },
  { title:"X's", year:"2024", type:"album", color:"xs", official:"https://www.cigarettesaftersex.com/record/xs", tracks:["X's","Tejano Blue","Silver Sable","Hideaway","Holding you, Holding me","Dark Vacay","Baby Blue Movie","Hot","Dreams From Bunker Hill","Ambien Slide"] },
  { title:"Motion Picture Soundtrack", year:"2024", type:"single", color:"film", official:"https://www.cigarettesaftersex.com/record/motion-picture-soundtrack", tracks:["Motion Picture Soundtrack"] },
  { title:"Baby Blue Movie", year:"2024", type:"single", color:"baby", official:"https://www.cigarettesaftersex.com/lyrics/baby-blue-movie", tracks:["Baby Blue Movie"] },
  { title:"Dark Vacay", year:"2024", type:"single", color:"vacay", official:"https://www.cigarettesaftersex.com/lyrics/dark-vacay", tracks:["Dark Vacay"] },
  { title:"Tejano Blue", year:"2024", type:"single", color:"tejano", official:"https://www.cigarettesaftersex.com/lyrics/tejano-blue", tracks:["Tejano Blue"] },
  { title:"Falling In Love", year:"2025", type:"single", color:"fall", official:"https://www.cigarettesaftersex.com/lyrics/falling-in-love", tracks:["Falling In Love"] },
  { title:"Heavenly", year:"2025", type:"single", color:"heaven", official:"https://www.cigarettesaftersex.com/lyrics/heavenly", tracks:["Heavenly"] },
  { title:"Twizzler", year:"2026", type:"single", color:"twizzler", official:"https://www.cigarettesaftersex.com/lyrics", tracks:["Twizzler"] },
  { title:"Anna Karenina", year:"2026", type:"single", color:"ak", official:"https://www.cigarettesaftersex.com/lyrics", tracks:["The Crystal Ship","Anna Karenina"] }
];

const ALL_TRACKS = CAS_RELEASES.flatMap(r => r.tracks.map(title => ({title, release:r.title, year:r.year, official:r.official, color:r.color})));
