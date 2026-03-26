import HelloEntity from '../entities/hello.entity.js';

class HelloModel {
  static getHello(name) {
    return new HelloEntity(name);
  }
}

export default HelloModel;
