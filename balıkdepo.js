const fishFarm = [
  {
    fishType: "Salmon",
    price: 15.7,
    entryDate: new Date(2021, 0, 1), // 01.01.2021
    durationInDays: 30,
    itemWeightInGrams: 145,
    originCountry: "Norway",
    season: "Winter",
    stockVolumeInKg: 6500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Seatrout",
    price: 7.9,
    entryDate: new Date(2021, 11, 12), // 12.12.2021
    durationInDays: 20,
    itemWeightInGrams: 460,
    originCountry: "Japan",
    season: "Winter",
    stockVolumeInKg: 1600,
    saleLocations: ["GL", "GR", "BE", "VS"],
  },
  {
    fishType: "Sailfish",
    price: 5.2,
    entryDate: new Date(2021, 3, 19),
    durationInDays: 15,
    itemWeightInGrams: 240,
    originCountry: "United Kingdom",
    season: "Spring",
    stockVolumeInKg: 500,
    saleLocations: ["ZH", "SH", "BL", "SO"],
  },
  {
    fishType: "Red Drum",
    price: 3.1,
    entryDate: new Date(2021, 5, 15),
    durationInDays: 18,
    itemWeightInGrams: 300,
    originCountry: "Poland",
    season: "Summer",
    stockVolumeInKg: 15500,
    saleLocations: ["FR", "GE", "NE", "TI"],
  },
  {
    fishType: "Pompano",
    price: 10,
    entryDate: new Date(2021, 8, 17),
    durationInDays: 20,
    itemWeightInGrams: 645,
    originCountry: "France",
    season: "Autumn",
    stockVolumeInKg: 1500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Bluefish",
    price: 13.7,
    entryDate: new Date(2021, 10, 11),
    durationInDays: 5,
    itemWeightInGrams: 845,
    originCountry: "Italy",
    season: "Winter",
    stockVolumeInKg: 200,
    saleLocations: ["NW", "OW", "UR", "LU"],
  },
  {
    fishType: "Mackerel",
    price: 8.9,
    entryDate: new Date(2021, 6, 18),
    durationInDays: 16,
    itemWeightInGrams: 150,
    originCountry: "GREECE",
    season: "Summer",
    stockVolumeInKg: 8100,
    saleLocations: ["AG", "BL", "BE", "VD", "TG"],
  },
  {
    fishType: "Perch",
    price: 11.9,
    entryDate: new Date(2021, 10, 1),
    durationInDays: 30,
    itemWeightInGrams: 222,
    originCountry: "Egypt",
    season: "Summer",
    stockVolumeInKg: 9500,
    saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
  },
  {
    fishType: "Mullet",
    price: 4.8,
    entryDate: new Date(2021, 2, 14),
    durationInDays: 30,
    itemWeightInGrams: 333,
    originCountry: "Vietnam",
    season: "Summer",
    stockVolumeInKg: 600,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Tuna",
    price: 19.5,
    entryDate: new Date(2021, 0, 1),
    durationInDays: 30,
    itemWeightInGrams: 250,
    originCountry: "Spain",
    season: "Winter",
    stockVolumeInKg: 2300,
    saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
  },
];
const ulkeler = [
  "GERMANY",
  "AUSTRIA",
  "BELGIUM",
  "BULGARIA",
  "CZECHIA",
  "DENMARK",
  "ESTONIA",
  "FILAND",
  "FRANCE",
  "GKRY",
  "CROATIA",
  "NETHERLAND",
  "IRELAND",
  "SPAIN",
  "SWEDEN",
  "ITALY",
  "LATVIA",
  "LITHUANIA",
  "LUXEMBOURG",
  "HUNGARY",
  "MALTA",
  "POLAND",
  "PORTUGAL",
  "GREECE",
];
var wed = stkVlm();
console.log("500kg üzeri stoklu balıklar:  " + wed);
console.log("9-12 euro arası balıklar:  " + price());
console.log("bern'de kışın satılan balıklar:  " + SezonlukBalık());
console.log("gün olarak balık skt listesi:  " + sonKullanma());
let ucuzEuro = [];
for (let i = 0; i < fishFarm.length; i++) {
  let { originCountry, price } = fishFarm[i];
  originCountry = originCountry.toUpperCase();

  if (ulkeler.includes(originCountry) && price < 10) {
    ucuzEuro.push(fishFarm[i].fishType);
  }
}
ucuzEuro.sort();
console.log("AB'deki en ucuz balıklar:  " + ucuzEuro);
console.log("toplam balık stoku:  " + balıkStock());
fishFarm.sort(function (a, b) {
  return a.price - b.price;
});
console.log("en pahalı balık: " + fishFarm[fishFarm.length - 1].fishType);
console.log("en uzun skt'li balığa sahip ülkeler: " + sktEnuzunUlkeler());
console.log("ticino balık stoku:  " + tıcınoBalık());
console.log("ZH balıkların ortalama gramı:  " + ortBalıkAgırlıgı());
/*
function stkVlm() {
  let stok = [];
  for (let i = 0; i < fishFarm.length; i++) {
    let { stockVolumeInKg } = fishFarm[i];
    if (stockVolumeInKg > 500) {
      stok.push(fishFarm[i].fishType);
    }
  }
  return stok;
}

function price() {
  let ucret = [];
  for (let i = 0; i < fishFarm.length; i++) {
    let { price } = fishFarm[i];
    if (9 < price && price < 12) {
      ucret.push(fishFarm[i].fishType);
    }
  }
  return ucret;
}

function SezonlukBalık() {
  let bern = [];
  for (let i = 0; i < fishFarm.length; i++) {
    let { season, saleLocations } = fishFarm[i];
    if (season == "Winter" && saleLocations.includes("BE")) {
      bern.push(fishFarm[i].fishType);
    }
  }
  return bern;
}

function sonKullanma() {
  let skt = [];
  fishFarm.sort(function (a, b) {
    return a.durationInDays - b.durationInDays;
  });

  for (let i = 0; i < fishFarm.length; i++) {
    let typeSkt = fishFarm[i].fishType + ":" + fishFarm[i].durationInDays;
    skt.push(typeSkt);
  }
  return skt;
}

function balıkStock() {
  let toplamStok = 0;
  for (let i = 0; i < fishFarm.length; i++) {
    let { stockVolumeInKg } = fishFarm[i];
    toplamStok += stockVolumeInKg;
  }
  return toplamStok;
}

function sktEnuzunUlkeler() {
  let balıkSkt = [];
  fishFarm.sort(function (a, b) {
    return a.durationInDays - b.durationInDays;
  });
  for (let i = fishFarm.length - 1; i >= 0; i--) {
    if (fishFarm[i].durationInDays == fishFarm[i - 1].durationInDays) {
      balıkSkt.push(fishFarm[i].originCountry);
    } else {
      balıkSkt.push(fishFarm[i].originCountry);
      break;
    }
  }
  return balıkSkt;
}

function tıcınoBalık() {
  let tcnBalık = 0;
  for (let i = 0; i < fishFarm.length; i++) {
    let { saleLocations } = fishFarm[i];
    if (saleLocations.includes("TI")) {
      tcnBalık += fishFarm[i].stockVolumeInKg;
    }
  }
  return tcnBalık;
}

function ortBalıkAgırlıgı() {
  let ortalamaBalıkAgırlıgı = 0;
  let toplamBalıkAgırlıgı = 0;
  let counter = 0;
  for (let i = 0; i < fishFarm.length; i++) {
    let { season, saleLocations, originCountry } = fishFarm[i];
    originCountry = originCountry.toUpperCase();
    if (
      season == "Summer" &&
      saleLocations.includes("ZH") &&
      ulkeler.includes(originCountry) === false
    ) {
      toplamBalıkAgırlıgı += fishFarm[i].itemWeightInGrams;
      counter += 1;
    }
  }

  ortalamaBalıkAgırlıgı = toplamBalıkAgırlıgı / counter;
  return ortalamaBalıkAgırlıgı;
}
*/
