export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      res.status(200).json({ message: "Dosya yüklendi!" });
    } catch (error) {
      res.status(500).json({ message: "Dosya yükleme hatası." });
    }
  } else {
    res.status(405).json({ message: "Sadece POST istekleri desteklenir." });
  }
}
