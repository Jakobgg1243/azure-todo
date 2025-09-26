module.exports = async function (context, req) {
    const task = req.body;

    context.res = {
        status: 201,
        body: {
            message: "Task added!",
            task
        }
    };
};