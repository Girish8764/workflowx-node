const app = require("./app");
const sequelize = require("./config/db");

// Models
require("./models/user.model");
require("./models/employee.model");

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {

        await sequelize.authenticate();
        console.log("✅ Database Connected");

        await sequelize.sync();
        console.log("✅ Database Synced");

        app.listen(PORT, () => {
            console.log(`🚀 WorkFlowX Server Running On Port ${PORT}`);
        });

    } catch (err) {

        console.error("❌ Failed To Start Server");
        console.error(err);

        process.exit(1);
    }
}

startServer();
