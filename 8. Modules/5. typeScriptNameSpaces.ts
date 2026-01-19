//Namespace cocok untuk:
// Kode global
// Script yang dimuat via <script>
// Library lama / non-module

//Module (ESM) lebih cocok untuk:
// Aplikasi modern
// Bundler (Vite, Webpack)
// Node.js / frontend modern

//Rule praktis:
// Aplikasi baru? → pakai module
// Library global / legacy? → namespace

//Basic Namespace
namespace Utils {
  export function capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
  }

  export function toUpper(text: string) {
    return text.toUpperCase();
  }
}

Utils.capitalize('hello'); // Hello
Utils.toUpper('hello'); // HELLO

//Namespace + Class
namespace Auth {
  export class User {
    constructor(public name: string) {}
  }

  export function login(user: User) {
    return `${user.name} logged in`;
  }
}

const u = new Auth.User('Budi');
Auth.login(u); // "Budi logged in"

//Alias namespace
namespace MathUtils {
  export namespace Geometry {
    export function areaSquare(side: number) {
      return side * side;
    }
  }
}

import Geo = MathUtils.Geometry;

Geo.areaSquare(5); // 25
