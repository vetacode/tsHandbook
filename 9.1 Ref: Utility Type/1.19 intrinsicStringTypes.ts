// Ini tidak mengubah nilai string, hanya tipe-nya saja

//Dipakai terutama bersama:
// Template Literal Types
// Union string
// Key / API / Event naming
// Meta-programming type-level

//1. Uppercase<StringType>
//Mengubah semua huruf menjadi UPPERCASE di level tipe.
type A = Uppercase<'hello'>;
// "HELLO"

type Direction = 'up' | 'down' | 'left';
type DirectionUpper = Uppercase<Direction>;
// "UP" | "DOWN" | "LEFT"

type HttpMethod = 'get' | 'post' | 'put';
type HttpMethodConst = Uppercase<HttpMethod>;
// "GET" | "POST" | "PUT"

//2. Lowercase<StringType>
//Mengubah semua huruf menjadi lowercase.
type B = Lowercase<'HELLO'>;
// "hello"

type Header = 'Content-Type' | 'Authorization';
type NormalizedHeader = Lowercase<Header>;
// "content-type" | "authorization"

//3. Capitalize<StringType>
//Mengubah huruf pertama saja menjadi uppercase
type C = Capitalize<'hello'>;
// "Hello"

type Event<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = Event<'click'>;
// "onClick"

{
  type Props<T extends string> = {
    [K in `on${Capitalize<T>}`]: () => void;
  };

  type ButtonProps = Props<'click' | 'hover'>;
  /*
{
  onClick: () => void;
  onHover: () => void;
}
*/
}

//4. Uncapitalize<StringType>
// Mengubah huruf pertama menjadi lowercase
type D = Uncapitalize<'Hello'>;
// "hello"

type ClassName = 'UserService';
type InstanceName = Uncapitalize<ClassName>;
// "userService"

//fungsi penting
type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;

type UserAPI = Getter<'name'> | Setter<'name'>;
// "getName" | "setName"

//NOTES:
//1. Tidak bekerja dengan string biasa
type X = Uppercase<string>;
// string (tidak berubah)
// Harus string literal / union literal

//2. Tidak mempengaruhi runtime
type A = Uppercase<'hello'>;

const x: A = 'HELLO'; // OK
// tapi:
'hello'.toUpperCase(); // ini runtime, bukan type
