import signUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"

export default function handleProfileSignup(firstName, lastName, fileName) {
    const signup = signUpUser(firstName, lastName);
    const upload = uploadPhoto(fileName);
    const promise = Promise.allSettled([signup, upload])
    return promise
        .then((results) => {
            return results.map(result => ({
                status: result.status,
                message: result.status === 'fulfilled' ? result.value : result.reason
            }));
        });
}
