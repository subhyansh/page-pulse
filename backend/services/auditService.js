const axios = require("axios");
const cheerio = require("cheerio");
const { validateURL } = require("../utils/validator");

const analyzeWebsite = async (url) => {

    // Validate URL first
    validateURL(url);

    try {

        const startTime = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36"
            }
        });

        const endTime = Date.now();

        // Check if response is HTML
        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            throw new Error("URL does not point to an HTML page.");
        }

        // Load HTML into Cheerio
        const $ = cheerio.load(response.data);

        // Extract Title
        const title = $("title").text().trim() || "No title found";

        // Extract Meta Description
        const metaDescription =
            $('meta[name="description"]').attr("content") || "No meta description";

        // Count H1 tags
        const h1Count = $("h1").length;

        // Count images without alt attribute
        const imagesWithoutAlt = $("img:not([alt])").length;

        // Calculate approximate word count
        const pageText = $("body").text();

        const wordCount = pageText
            .replace(/\s+/g, " ")
            .trim()
            .split(" ")
            .filter(word => word.length > 0).length;

        return {
            success: true,
            status: response.status,
            responseTime: `${endTime - startTime} ms`,
            title,
            metaDescription,
            h1Count,
            imagesWithoutAlt,
            wordCount
        };

    } catch (error) {

        // Axios timeout
        if (error.code === "ECONNABORTED") {
            throw new Error("Request timed out.");
        }

        // Invalid domain / DNS
        if (error.code === "ENOTFOUND") {
            throw new Error("Website not found.");
        }

        // Website refused request
        if (error.response) {
            throw new Error(
                `Website returned HTTP ${error.response.status}`
            );
        }

        // Other errors
        throw new Error(error.message);
    }
};

module.exports = {
    analyzeWebsite
};