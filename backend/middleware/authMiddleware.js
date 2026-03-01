export const isAuthenticated = (req, res, next) => {
    const user = req.cookies?.adminToken;

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
}