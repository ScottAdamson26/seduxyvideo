const express = require("express");
const cors = require("cors");
const fs = require("fs");
const readline = require("readline");

const app = express();
const PORT = 5000; // Port to run the server

let featuredVideos = [];

// Enable CORS to allow requests from different origins (e.g., React dev server)
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only the React development server
  })
);

// Function to validate if a string is a link
const isValidLink = (str) => {
  const urlRegex = /^(https?:\/\/[^\s]+)$/;
  return urlRegex.test(str);
};

// Function to generate a unique numeric UID
let uidCounter = 1; // Start with a counter
const generateUID = () => {
  const timestamp = Date.now(); // Current timestamp
  const random = Math.floor(Math.random() * 1000); // Random 3-digit number
  return `${timestamp}${random}${uidCounter++}`; // Combine timestamp, random, and counter
};

// Function to load and parse sample data without relying on headers
const loadSampleData = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity, // Handle line breaks
    });

    rl.on("line", (line) => {
      const columns = line.split("|"); // Split by the | delimiter
      if (columns.length < 4) return; // Ensure there are enough columns

      // If the first cell is not a valid link, assume it's a header row and skip it
      if (results.length === 0 && !isValidLink(columns[0])) {
        console.log("Skipping header row:", columns);
        return;
      }

      // Extract the required fields
      const videoData = {
        src: columns[0].trim(),       // Column 1: Source
        thumbnail: columns[1].trim(), // Column 2: Thumbnail
        title: columns[3].trim(),     // Column 4: Title
      };

      if (isValidLink(videoData.src)) {
        results.push(videoData); // Add to results if valid
      }
    });

    rl.on("close", () => {
      console.log("Sample data loaded successfully.");

      // Assign a unique UID to each video
      const dataWithUIDs = results.map((video) => ({
        ...video,
        uid: generateUID(), // Generate a numeric UID
      }));

      resolve(dataWithUIDs);
    });

    rl.on("error", (err) => {
      console.error("Error reading file:", err);
      reject(err);
    });
  });
};

// Load sample data on server startup
const SAMPLE_FILE_PATH = "./sample.csv"; // Path to the sample CSV file

loadSampleData(SAMPLE_FILE_PATH)
  .then((data) => {
    // Take only the first 20 rows of data for the /featured endpoint
    featuredVideos = data.slice(0, 20);
    console.log("Featured Videos with UID:", featuredVideos); // Log for debugging
  })
  .catch((err) => {
    console.error("Error loading sample data:", err);
  });

// Define the /featured endpoint
app.get("/featured", (req, res) => {
  res.setHeader("Content-Type", "application/json"); // Ensure response is JSON
  if (featuredVideos.length > 0) {
    res.status(200).json({ videos: featuredVideos });
  } else {
    res.status(500).json({ message: "No data available." });
  }
});

// Serve static React files in production
const path = require("path");
app.use(express.static(path.join(__dirname, "build"))); // Adjust "build" if needed

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
