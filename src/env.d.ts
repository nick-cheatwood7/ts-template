declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TEST_VAR: string;
    }
  }
}

export {}
