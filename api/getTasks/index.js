module.exports = async function (context, req) {
    const tasks = [
        { id: 1, text: "Learn Azure Functions" },
        { id: 2, text: "Build a To-Do App" }
    ];

    context.res = {
        status: 200,
        body: tasks
    };
} 