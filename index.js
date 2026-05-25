import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const distDir = path.join(__dirname, "dist");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(distDir));

  app.get("*", (req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send(
      "This server is only used for production deployment. Run `npm run dev` for local Vite development."
    );
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`NODE_ENV=${process.env.NODE_ENV}`);
});
