import { URLs } from "../models/url.js";
import { generateShortId } from "../utils/key.js";

export const SaveUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const shortId = generateShortId(8);
    const newUrl = new URLs({
      longUrl,
      shortId,
    });
    await newUrl.save();
    const shortUrl = `http://localhost:5050/${shortId}`;
    res.status(201).json({ ok: true, shortUrl });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const redirectUrl = async (req, res) => {
  console.log(res);
  const { shortId } = req.params;
  try {
    const resUrl = await URLs.find({ shortId: shortId });
    const element = resUrl[0];
    console.log(element.longUrl);

    res.redirect(element.longUrl);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
