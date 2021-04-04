module.exports = function() {
    return {
        users: require("./api.users.json"),
        feed: require("./api.feed.json"),
        orders: require("./api.orders.json"),
        friends: require("./api.friends.json")
    };
};