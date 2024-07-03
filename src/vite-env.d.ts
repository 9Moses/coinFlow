/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CRYPTOCURRENCY: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
