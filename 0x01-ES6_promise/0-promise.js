export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) { // Simulate API success
            resolve({ status: 200, body: 'API response' });
        } else {
            reject(new Error('API request failed'));
        }
    });
}
