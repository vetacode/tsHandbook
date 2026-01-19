//Module resolution adalah cara TypeScript mencari file asli dari sebuah import
import { foo } from './utils';
//TypeScript harus menentukan:
//(TypeScript akan mencoba urutan ini):
// ./utils.ts
// ./utils.tsx
// ./utils.d.ts
// ./utils/index.ts
// ./utils/index.d.ts

//Proses “mencari & memutuskan file mana” inilah yang disebut module resolution.

//baseUrl – Root Path Import -> folder dasar tempat TS mulai mencari module.
//Digunakan supaya tidak perlu import relatif panjang

//Tanpa baseUrl:
import { Button } from '../../../components/Button';

//Dengan baseUrl:
{
  "compilerOptions": {
    "baseUrl": "./src" //baseUrl = folder dasar tempat TS mulai mencari module.
  }
}

import { Button } from "components/Button";


//paths – Alias / Path Mapping -> untuk alias import
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    }
  }
}

import { Button } from "@components/Button";
import { formatDate } from "@utils/date";

//NOTES: bundler (Vite/Webpack/TS-Node) harus dikonfigurasi juga.


//rootDirs – Multiple Root Folder (Advanced)
//Digunakan kalau struktur folder di runtime & compile berbeda
// src/
//  └─ app.ts
// generated/
//  └─ types.ts

import { MyType } from "./types";

//Contoh configurasi:
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"]
    }
  }
}

