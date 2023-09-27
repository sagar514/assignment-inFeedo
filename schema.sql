CREATE DATABASE tasks_app;
use tasks_app;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('Open', 'Inprogress', 'Completed') DEFAULT 'Open',
    date DATE,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, description, status, date) VALUES
('Task 1', 'Description for Task 1', 'Open', '2023-08-01'),
('Task 2', 'Description for Task 2', 'Inprogress', '2023-08-05'),
('Task 3', 'Description for Task 3', 'Completed', '2023-08-10'),
('Task 4', 'Description for Task 4', 'Open', '2023-08-15'),
('Task 5', 'Description for Task 5', 'Inprogress', '2023-08-20'),
('Task 6', 'Description for Task 6', 'Completed', '2023-08-25'),
('Task 7', 'Description for Task 7', 'Open', '2023-09-02'),
('Task 8', 'Description for Task 8', 'Inprogress', '2023-09-08'),
('Task 9', 'Description for Task 9', 'Completed', '2023-09-15'),
('Task 10', 'Description for Task 10', 'Open', '2023-09-22'),
('Task 11', 'Description for Task 11', 'Inprogress', '2023-09-27'),
('Task 12', 'Description for Task 12', 'Completed', '2023-09-05'),
('Task 13', 'Description for Task 13', 'Open', '2023-08-03'),
('Task 14', 'Description for Task 14', 'Inprogress', '2023-08-08'),
('Task 15', 'Description for Task 15', 'Completed', '2023-08-13'),
('Task 16', 'Description for Task 16', 'Open', '2023-09-04'),
('Task 17', 'Description for Task 17', 'Inprogress', '2023-09-12'),
('Task 18', 'Description for Task 18', 'Completed', '2023-09-18'),
('Task 19', 'Description for Task 19', 'Open', '2023-08-28'),
('Task 20', 'Description for Task 20', 'Inprogress', '2023-08-30');