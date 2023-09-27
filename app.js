import express from "express"
import { getAllTasks, getTask, createTask, updateTask, getTaskMetrics } from './database.js'

const app = express()
app.use(express.json())

// Get all tasks - pagination
app.get('/tasks', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const offset = (page - 1) * perPage;

    const tasks = await getAllTasks(offset, perPage);
    res.json(tasks);
});

// Get task by id
app.get("/task/:id", async (req, res) => {
    const id = req.params.id;
    const task = await getTask(id);
    res.send(task)
})

// Create task
app.post("/task", async (req, res) => {
    const { title, description, status, date } = req.body;
    const task = await createTask(title, description, status, date);
    res.status(201).send(task)
})

// Update task
app.put("/task/:id", async (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    delete updatedTask.id;

    const task = await updateTask(taskId, updatedTask);
    res.status(201).send(task)
})

// Get task metrics
app.get("/taskMetrics", async (req, res) => {
    const taskMetrics = await getTaskMetrics();
    
    const output = [];
    taskMetrics.forEach(function(data){
        let date = data.formatted_date;
        delete data.formatted_date;
        let obj = {
            date: date,
            metrics: data
        }
        
        output.push(obj);
    });

    res.send(output)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})