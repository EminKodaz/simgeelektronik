export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      res.status(200).json({ message: "Form gönderildi!" });
    } catch (error) {
      res.status(500).json({ message: "Form gönderme hatası." });
    }
  } else {
    res.status(405).json({ message: "Sadece POST istekleri desteklenir." });
  }
}
