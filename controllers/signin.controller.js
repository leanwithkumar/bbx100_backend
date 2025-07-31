export const signin = async (req, res) => {
    try {
        const { code } = req.body; // changed from req.query to req.body
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);

        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
        );

        const { email, name, picture } = userRes.data;
        let user = await Users.findOne({ email });
        if (!user) {
            user = await Users.create({ email, name, image: picture });
        }

        const { _id } = user;
        const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, { expiresIn: '24h' });

        return res.status(200).json({ message: "User logged in successfully", token, user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Unable to sign in", error: error.message });
    }
};
