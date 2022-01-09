export default function handler(req, res) {
    // .status is function that sets status code
    // .json is function that sends json response
    res.status(200).json({ "hello": "world" })
}