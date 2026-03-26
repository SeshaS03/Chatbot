# Chatbot API Documentation

## Threads

### Create Thread
- **POST** `/api/chat/threads`
- **Body:** `{ "title": "string" }`
- **Response:**
```
{
  "id": 1,
  "title": "string",
  "created_at": "2026-03-26T12:00:00.000Z"
}
```

### Get All Threads
- **GET** `/api/chat/threads`
- **Response:**
```
[
  {
    "id": 1,
    "title": "string",
    "created_at": "2026-03-26T12:00:00.000Z"
  },
  ...
]
```

### Get Thread by ID
- **GET** `/api/chat/threads/:id`
- **Response:**
```
{
  "id": 1,
  "title": "string",
  "created_at": "2026-03-26T12:00:00.000Z"
}
```

### Update Thread
- **PUT** `/api/chat/threads/:id`
- **Body:** `{ "title": "string" }`
- **Response:**
```
{
  "id": 1,
  "title": "string",
  "created_at": "2026-03-26T12:00:00.000Z"
}
```

### Delete Thread
- **DELETE** `/api/chat/threads/:id`
- **Response:**
```
{ "message": "Thread deleted" }
```

## Messages

### Create Message
- **POST** `/api/chat/threads/:threadId/messages`
- **Body:** `{ "sender": "string", "content": "string" }`
- **Response:**
```
{
  "id": 1,
  "thread_id": 1,
  "sender": "string",
  "content": "string",
  "created_at": "2026-03-26T12:00:00.000Z"
}
```

### Get All Messages for a Thread
- **GET** `/api/chat/threads/:threadId/messages`
- **Response:**
```
[
  {
    "id": 1,
    "thread_id": 1,
    "sender": "string",
    "content": "string",
    "created_at": "2026-03-26T12:00:00.000Z"
  },
  ...
]
```

### Get Message by ID
- **GET** `/api/chat/messages/:id`
- **Response:**
```
{
  "id": 1,
  "thread_id": 1,
  "sender": "string",
  "content": "string",
  "created_at": "2026-03-26T12:00:00.000Z"
}
```

### Update Message
- **PUT** `/api/chat/messages/:id`
- **Body:** `{ "content": "string" }`
- **Response:**
```
{
  "id": 1,
  "thread_id": 1,
  "sender": "string",
  "content": "string",
  "created_at": "2026-03-26T12:00:00.000Z"
}
```

### Delete Message
- **DELETE** `/api/chat/messages/:id`
- **Response:**
```
{ "message": "Message deleted" }
```
