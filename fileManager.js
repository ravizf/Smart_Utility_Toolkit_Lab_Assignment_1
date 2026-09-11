// File Manager using Node.js fs module

const fs = require("fs");

const fileName = "sample.txt";

// CREATE FILE
console.log("Creating file...");
fs.writeFile(fileName, "This is the original content.", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // READ FILE
    console.log("Reading file...");
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File content:", data);

        // UPDATE FILE
        console.log("Updating file...");
        fs.appendFile(fileName, "\nThis content was added during the update.", (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File updated successfully.");

            // READ UPDATED FILE
            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file:", err.message);
                    return;
                }

                console.log("Updated content:", updatedData);

                // DELETE FILE
                console.log("Deleting file...");
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }

                    console.log("File deleted successfully.");
                    console.log("File manager operations completed.");
                });
            });
        });
    });
});
