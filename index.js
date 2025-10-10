require("dotenv").config();

    if (process.env.BUILD_RESULT === "success") {
        console.log("Build success");
        process.exit(0);
    }

//throw new Error("Build failed");
