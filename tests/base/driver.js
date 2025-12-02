import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

export default async function buildDriver() {
  const options = new chrome.Options();

  // Required for GitHub Actions
  options.addArguments("--headless=new");
  options.addArguments("--disable-gpu");
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-dev-shm-usage");

  return await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    // DO NOT SET chromedriver path – use system driver
    .build();
}

