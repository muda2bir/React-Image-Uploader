// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const cloudinary = require("cloudinary").v2;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb", // Set desired value here
    },
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    res.json({ message: "success", image_url: uploadedResponse.secure_url });
  } catch (error) {
    res.json({ message: "error", error: error });
  }
}
