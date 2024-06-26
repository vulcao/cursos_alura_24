const cheerio = require("cheerio");

export default async (req, res) => {
  if (req.method === "POST") {
    const username = req.body.TWusert;

    try {
      const response = await fetch(`https://mobile.twitter.com/${username}`);
      const htmlString = await response.text();
      const $ = cheerio.load(htmlString);
      const searchContext = `a[href="/${username}/folowers"]`;
      const followerCountString = $(searchContext)
        .text()
        .match(/[0-9]/gi)
        .join("");
      res.statusCode = 200;
      return res.json({
        user: username,
        followerCount: Number(followerCountString),
      });
    } catch (e) {
      res.statusCode = 404;
      return res.json({
        user: username,
        error: `${username} not found. Tip: Double check the spelling.`,
        followerCount: -1,
      });
    }
  }
};
