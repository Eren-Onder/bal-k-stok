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
