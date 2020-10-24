import Parser from "rss-parser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const RSS_URL_9TO5MAC = "https://9to5mac.com/feed/";
const RSS_URL_CNBETA = "https://www.cnbeta.com/backend.php";
const RSS_URL_ITHOME = "https://www.ithome.com/rss/";

let parser = new Parser();

export async function getITHome() {
  const feed = await parser.parseURL(CORS_PROXY + RSS_URL_ITHOME);
  console.log(feed);
  return feed;
}

export async function get9to5mac() {
  const feed = await parser.parseURL(CORS_PROXY + RSS_URL_9TO5MAC);
  console.log(feed);
  return feed;
}

export async function getCnBeta() {
  const feed = await parser.parseURL(CORS_PROXY + RSS_URL_CNBETA);
  console.log(feed);
  return feed;
}
