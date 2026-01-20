const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user'); // Checks your User model

dotenv.config();

const promoteUser = async () => {
    try {
        // Connect to your database
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB Connected");

        // Find Anukriti and make her Admin
        const user = await User.findOneAndUpdate(
            { email: "anukriti@test.com" }, // The email you used to login
            { isAdmin: true },              // The Magic Switch
            { new: true }
        );

        if (user) {
            console.log("-----------------------------------");
            console.log(`👑 SUCCESS: ${user.name} is now a College Admin!`);
            console.log("-----------------------------------");
        } else {
            console.log("❌ User not found. Did you register as 'anukriti@test.com' first?");
        }
        process.exit();
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
};

promoteUser();