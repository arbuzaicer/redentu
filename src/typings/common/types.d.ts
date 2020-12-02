declare namespace NodeJS {
    interface Global {
      fetch: any;
      TabBar: any;
    }
  }
  
  declare module '*.png' {
    const value: any;
    export = value;
  }
  
  declare module '*.jpg' {
    const value: any;
    export = value;
  }