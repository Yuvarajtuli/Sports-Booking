import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

export default async function buildDriver() {
  const options = new chrome.Options();

  // Required for CI (GitHub Actions)
  options.addArguments("--headless=new");
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-gpu");
  options.addArguments("--disable-dev-shm-usage");

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  return driver;
}
