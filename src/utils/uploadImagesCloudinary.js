import { CLOUDINARY, PRESET } from "../constants/cloudinary.js";
import { axios } from "./axios.js";

export const uploadImagesCloudinary = async fileImages => {
	const allPromiseImages = Array.from(fileImages).map(image => {
		const form = new FormData();
		form.append("file", image);
		form.append("upload_preset", PRESET);
		const configAxios = { method: "POST", url: CLOUDINARY, data: form };
		return axios(configAxios).then(({ data }) => data.secure_url);
	});
	const allImages = await Promise.all(allPromiseImages);
	return allImages.map(img => ({ original: img }));
};
