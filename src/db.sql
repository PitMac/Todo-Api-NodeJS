CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks(title, description) VALUES ('Todo 1', 'Description 1');