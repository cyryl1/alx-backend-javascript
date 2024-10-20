import { uploadPhoto, createUser } from "./utils.js"

export default function handleProfileSignup() {
    const upload = uploadPhoto();
    const user = createUser();
    return Promise.all([upload, user])
        .then((values) => {
            const [photo, user] = values;
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            console.log("Signup system offline")
        });
}