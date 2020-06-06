module.exports = (req, res, next) => {
    console.log(`Ip client: ${req.connection.remoteAddress}`);
    next();
}