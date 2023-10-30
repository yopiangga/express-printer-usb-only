import express from "express";
import cors from "cors";
import ptp from "pdf-to-printer";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const printerName = "HP Ink Tank 310 series";
  const printers = await ptp.getPrinters();
  for (const p of printers) {
    console.log(`PRINTER Name: ${p.name} compare: ${p.name === printerName}`);
  }

  ptp
    .print(
      "C:/Users/dismo/OneDrive/Documents/Alfian Prisma Yopiangga/Agile PDBL/meet 28-10.txt",
      {
        printer: printerName,
      }
    )
    .then((_) => console.log("OK"))
    .catch((error) => console.error(error));

  res.send("Hello World!");
});

app.listen(3001, "0.0.0.0", () =>
  console.log(`Example app listening on port 3000!`)
);
