import xmlToJson from "./util";

const cors_api_url = "https://cors-anywhere.herokuapp.com/";

const RSS_URL = "https://www.cnbeta.com/backend.php";

async function getData() {
  const data = await fetch(cors_api_url + RSS_URL)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"));
  const jsonData = xmlToJson(data);
  return jsonData;
}

async function getCnBeta() {
  const jsonData = await getData();
  console.log(jsonData);
  const main = jsonData.rss.channel;
  return {
    name: main.title,
    description: main.description,
    logo: main.image.url,
    itemList: main.item,
  };
}

export default getCnBeta;
