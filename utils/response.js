/**
 * Send a success response
 * @param {Object} res - Express response object
 * @param {any} data - Data to send
 * @param {string} message - Success message
 * @param {number} statusCode - HTTP status code (default 200)
 */
export const success = (res, data = null, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

/**
 * Send an error response
 * @param {Object} res - Express response object
 * @param {Error|string} err - Error object or message
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code (default 500)
 */
export const error = (res, err = null, message = "Internal Server Error", statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message,
        data: null,
        error: err ? (err.message || err) : null
    });
};
