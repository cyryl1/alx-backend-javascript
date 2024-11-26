// class AppController {
// 	/**
// 	 * Handles the root route and sends a welcome message.\
// 	 * @param {Object} req - The request object.
// 	 * @param {Object} res - The response object.
// 	 */

// 	static getHomepage(req, res) {
// 		res.status(200).send('Hello Holberton School!');
// 	}
// }

// export default AppController;

class AppController {
	static getHomepage(request, response) {
	  response.status(200).send('Hello Holberton School!');
	}
  }
  
export default AppController;
