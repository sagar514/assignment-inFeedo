import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


export async function getAllTasks(offset, perPage) {
    const result = await pool.query(`
    SELECT * 
    FROM tasks
    LIMIT ?, ?
    `, [offset, perPage]);
    return result[0];
}

// const tasks = await getAllTasks();
// console.log(tasks)

export async function getTask(id) {
    const [result] = await pool.query(`
    SELECT * 
    FROM tasks
    WHERE id = ?
    `, [id])
    return result[0]
}
  
// const task = await getTask(3)
// console.log(task)

export async function createTask(title, description, status, date) {
    const result = await pool.query(`
    INSERT INTO tasks (title, description, status, date)
    VALUES (?, ?, ?, ?)
    `, [title, description, status, date])
    
    const insertedRecId = result[0].insertId
    return getTask(insertedRecId);
}

// const task = await createTask('Task 24', 'Description for Task 24', 'Inprogress', '2023-09-27')
// console.log(task)

export async function updateTask(id, task) {
    const result = await pool.query(`
    UPDATE tasks
    SET ?
    WHERE id = ?
    `, [task, id])
    
    return getTask(id);
}

// const task = await updateTask(25, {'description': 'Description for Task 24', 'status': 'Open', 'date': '2023-08-06'})
// console.log(task)

export async function getTaskMetrics() {
    const result = await pool.query(`
    SELECT
        DATE_FORMAT(date, '%M %Y') AS formatted_date,
        SUM(CASE WHEN status = 'Open' THEN 1 ELSE 0 END) AS open_tasks,
        SUM(CASE WHEN status = 'Inprogress' THEN 1 ELSE 0 END) AS inprogress_tasks,
        SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_tasks
    FROM
        tasks
    GROUP BY
        formatted_date;
    `);
    return result[0];
}

// const taskMetrics = await getTaskMetrics();
// console.log(taskMetrics)