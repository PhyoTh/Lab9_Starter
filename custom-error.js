/**
 * Custom error class that extends the built-in Error object
 * This allows for more specific error types and additional data
 */
class CustomError extends Error {
    /**
     * Create a custom error
     * @param {string} message - The error message
     * @param {string} errorType - The type of error (e.g., INPUT_ERROR, TYPE_ERROR)
     */
    constructor(message, errorType) {
        super(message);
        this.name = 'CustomError';
        this.errorType = errorType;

        // this helps TrackJS capture the proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }

    /**
     * Log the error to console with formatted output
     */
    logError() {
        console.log('Sadly an error happened my friend');
        console.error(`${this.name} [${this.errorType}]: ${this.message}`);

        // track error with TrackJS
        if (window.TrackJS) {
            TrackJS.track(`${this.errorType}: ${this.message}`);
        }
    }
}

window.CustomError = CustomError;
