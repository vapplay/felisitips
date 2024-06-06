const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("db");

module.exports = defaultConfig;

/* (() => {
  const lists = document.querySelectorAll(
    "ul.ue-c-article__list.ue-c-article__list--unordered"
  );

  const phrasesArray = [];
  lists.forEach((list) => {
    const liElements = list.getElementsByTagName("li");

    for (let i = 0; i < liElements.length; i++) {
      const text = liElements[i].textContent
        .trim()
        .replace(' " ', "")
        .replace(" ", "");
      phrasesArray.push({ phrase: text, id: Math.floor(Math.random() * 1000) });
    }
  });
  const jsonString = JSON.stringify(phrasesArray, null, 4);

  const blob = new Blob([jsonString], { type: "application/json" });
  const blobUrl = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = blobUrl;
  downloadLink.download = "data.json";

  downloadLink.click();
})(); */
