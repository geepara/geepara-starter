class DatabaseError extends Error {
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, DatabaseError.prototype);
    }
  }
  
  export default DatabaseError;
  