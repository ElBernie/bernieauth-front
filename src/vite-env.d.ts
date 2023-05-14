/// <reference types="vite/client" />

// declare interface, which enable typescript support for env variables
interface ImportMetaEnv {
	readonly VITE_AUTH_SERVER_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
