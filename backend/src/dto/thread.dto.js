// Thread DTO
class ThreadDto {
  constructor({ id, title, created_at }) {
    this.id = id;
    this.title = title;
    this.created_at = created_at;
  }
}

export default ThreadDto;
