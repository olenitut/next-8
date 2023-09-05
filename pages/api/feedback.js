import path from "path";
import fs from "fs";

const handler = async (req, res) => {
  const pathName = path.join(process.cwd(), "data", "feedback.json");

  if (req.method === "POST") {
    try {
      const data = req.body;
      fs.writeFileSync(pathName, JSON.stringify(data));
      res.status(200).json({
        status: "ok",
        data: {
          ping: "pong",
        },
      });
    } catch (error) {
      console.error("Error writing to file:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(200).json({
      data: fs.readFileSync(pathName, "utf-8"),
    });
  }
};

export default handler;
