class CalculatorError extends Error {
    constructor(message, errorType) {
        super(message);
        this.name = 'CalculatorError';
        this.errorType = errorType;
        this.timestamp = new Date();
    }

    logError() {
        console.error(
            `${this.name} [${this.errorType}]: ${this.message} at ${this.timestamp}`
        );
    }
}
