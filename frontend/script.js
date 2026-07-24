const button = document.getElementById("analyzeBtn");

button.addEventListener("click", analyzeWebsite);

async function analyzeWebsite() {

    const url = document.getElementById("url").value.trim();

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    // Hide previous state
    error.classList.add("hidden");
    result.classList.add("hidden");

    // Validate input
    if (!url) {
        error.textContent = "Please enter a website URL.";
        error.classList.remove("hidden");
        return;
    }

    // Show loading
    loading.classList.remove("hidden");

    button.disabled = true;
    button.textContent = "Analyzing...";

    try {

        // ⚠️ Change this URL after deployment
        const response = await fetch("https://page-pulse-backend-ns22.onrender.com/api/audit", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                url
            })

        });

        const data = await response.json();

        loading.classList.add("hidden");

        button.disabled = false;
        button.textContent = "Analyze Website";

        if (!data.success) {

            error.textContent = data.message;

            error.classList.remove("hidden");

            return;

        }

        document.getElementById("status").textContent = data.status;

        document.getElementById("responseTime").textContent = data.responseTime;

        document.getElementById("title").textContent = data.title;

        document.getElementById("metaDescription").textContent = data.metaDescription;

        document.getElementById("h1Count").textContent = data.h1Count;

        document.getElementById("imagesWithoutAlt").textContent = data.imagesWithoutAlt;

        document.getElementById("wordCount").textContent = data.wordCount;

        result.classList.remove("hidden");

    }

    catch (err) {

        loading.classList.add("hidden");

        button.disabled = false;

        button.textContent = "Analyze Website";

        error.textContent =
            "Unable to connect to backend server.";

        error.classList.remove("hidden");

        console.error(err);

    }

}