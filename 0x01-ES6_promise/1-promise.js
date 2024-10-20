export default function getResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success === true) { // Simulate API success
            resolve({ status: 200, body: 'Success' });
        } else {
            reject(Error('The fake API is not working currently'));
        }
        
    });
}
