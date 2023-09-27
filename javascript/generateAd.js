function generateAd() {
  let boxAd = document.querySelectorAll(".box-ad");
  let longAd = document.querySelectorAll(".horizontal-ad")
  let adLength = boxAd.length + longAd.length;
  console.log(adLength);
  console.log(boxAd);
  console.log(longAd);

  let boxSource = [
    "https://i.imgur.com/D2amyrx.gif",
    "https://i.imgur.com/6lwL89J.gif",
    "https://i.imgur.com/3BVl25o.gif",
    "https://i.imgur.com/G9rks66.gif",
    "https://i.imgur.com/3iX998a.gif",
    "https://i.imgur.com/d2vJnUK.gif",
    "https://i.imgur.com/sFSqf1T.gif",
    "https://i.imgur.com/AXivaJu.gif",
    "https://i.imgur.com/XRxcIRR.gif",
    "https://i.imgur.com/q0dQcMl.gif",
    "https://i.imgur.com/22Znbql.gif",
    "https://i.imgur.com/WAe9oS6.gif",
    "https://i.imgur.com/OrJR4gu.gif",
    "https://i.imgur.com/bdQGwxc.gif",
    "https://i.imgur.com/lxTuMsK.gif",
    "https://i.imgur.com/lu8g5wu.gif",
    "https://i.imgur.com/riDBGKm.gif",
    "https://i.imgur.com/opZyFIF.gif",
    "https://i.imgur.com/LM3SPwK.gif",
    "https://i.imgur.com/g4mZs0j.gif",
    "https://i.imgur.com/3F7pF0j.gif",
    "https://i.imgur.com/AtTQjSO.gif",
    "https://i.imgur.com/a4Z18wH.gif",
    "https://i.imgur.com/82RjrMs.gif",
    "https://i.imgur.com/Liz4SdA.gif",
    "https://i.imgur.com/D1sT4dZ.gif",
    "https://i.imgur.com/jjLAZa8.gif"
  ];

  let longSource = [
    "https://i.imgur.com/P566Gjw.gif",
    "https://i.imgur.com/flksq88.gif",
    "https://i.imgur.com/1rNSKjn.gif",
    "https://i.imgur.com/QooKTTE.gif",
    "https://i.imgur.com/M0uNFOJ.gif",
    "https://i.imgur.com/CdcqdwG.gif",
    "https://i.imgur.com/vPlajyH.gif",
    "https://i.imgur.com/vBCwEgT.gif",
    "https://i.imgur.com/B5XXlDB.gif",
    "https://i.imgur.com/7WNAfJB.gif",
    "https://i.imgur.com/G8BN088.gif",
    "https://i.imgur.com/uuAtWmG.gif",
    "https://i.imgur.com/yfkpXJI.gif",
    "https://i.imgur.com/dzsULyd.gif",
    "https://i.imgur.com/KUNvaVx.gif",
    "https://i.imgur.com/l1QSg0K.gif",
    "https://i.imgur.com/fwLxJA7.gif",
    "https://i.imgur.com/MY1imxM.gif",
    "https://i.imgur.com/eEZA5bN.gif",
    "https://i.imgur.com/v362I8X.gif",
    "https://i.imgur.com/tRkqzWd.gif",
    "https://i.imgur.com/PFsGelg.gif",
    "https://i.imgur.com/7yUIBzu.gif",
    "https://i.imgur.com/NUHtBie.gif",
    "https://i.imgur.com/3ZsrZq2.gif",
    "https://i.imgur.com/YIY1tRQ.gif",
    "https://i.imgur.com/p56N0kt.gif",
    "https://i.imgur.com/9wZCflT.gif",
    "https://i.imgur.com/W7yJx50.gif",
    "https://i.imgur.com/86CMwgz.gif",
    "https://i.imgur.com/QIaweiQ.gif",
    "https://i.imgur.com/gykT9Uq.gif",
    "https://i.imgur.com/xEsTktn.gif",
    "https://i.imgur.com/nbqKOqH.gif",
    "https://i.imgur.com/Hiow6SJ.gif",
    "https://i.imgur.com/ysaOze0.gif",
    "https://i.imgur.com/kPxtL1O.gif",
    "https://i.imgur.com/wRBxyFC.gif",
    "https://i.imgur.com/Jo59DjU.gif",
    "https://i.imgur.com/DlrwTFx.gif",
    "https://i.imgur.com/Ui7XBm3.gif",
    "https://i.imgur.com/S7bmN7M.gif",
    "https://i.imgur.com/4gk0OL1.gif",
    "https://i.imgur.com/MfxUnXF.gif",
    "https://i.imgur.com/6UoPUEI.gif",
    "https://i.imgur.com/i2ZorMn.gif",
    "https://i.imgur.com/8bP72wj.gif",
    "https://i.imgur.com/Yg3AIK3.gif",
    "https://i.imgur.com/z4c7lQp.gif",
    "https://i.imgur.com/MyGAKXh.gif",
    "https://i.imgur.com/jbQbYqH.gif"
  ]

  for (let i = 0; i < boxAd.length; i++) {
    console.log("Current iteration of box ad generation: " + i);
    let numberAd = Math.floor(Math.random() * boxSource.length)
    boxAd[i].src = boxSource[numberAd];
    boxSource.splice(numberAd, 1)
  }

  for (let i = 0; i < longAd.length; i++) {
    console.log("Current iteration of horizontal ad generation: " + i);
    let numberAd = Math.floor(Math.random() * longSource.length)
    longAd[i].src = longSource[numberAd];
    longSource.splice(numberAd, 1)
  }
}
