module.exports = async function (context, req) {
    const tasks = [
        { id: 1, title: "Learn Azure Functions" },
        { id: 2, title: "Build a To-Do App" }
    ];

    context.res = {
        status: 200,
        body: tasks
    };
}; 