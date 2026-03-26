// Message DTO
class MessageDto {
  constructor({ id, thread_id, sender, content, created_at }) {
    this.id = id;
    this.thread_id = thread_id;
    this.sender = sender;
    this.content = content;
    this.created_at = created_at;
  }
}

export default MessageDto;
