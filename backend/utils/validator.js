function validateURL(url) {

    if (!url) {
        throw new Error("URL is required.");
    }

    try {
        new URL(url);
    } catch {
        throw new Error("Invalid URL format.");
    }

}

module.exports = {
    validateURL
};