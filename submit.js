
// Vercel Serverless Function placeholder for form submission
export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received submission:", req.body);
    res.status(200).json({ message: "提交成功" });
  } else {
    res.status(405).json({ message: "方法不允许" });
  }
}
