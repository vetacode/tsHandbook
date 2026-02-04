//JSX Function Return Type
//1. Default sebelum TypeScript 5.1
// Secara konvensi (terutama di React), function component diharapkan mengembalikan:

JSX.Element | null

// Contoh:
function Button() {
  return <button>Click</button>;
}

//Namun, ini tidak selalu mencerminkan perilaku runtime, karena:
// beberapa framework mengizinkan return string, number, boolean, atau array,
// return type aktual bergantung pada implementasi JSX factory (React.createElement, dsb.).

//2. JSX.ElementType (TypeScript 5.1+)
// Sejak TypeScript 5.1, tersedia JSX.ElementType untuk menentukan tipe apa saja yang sah sebagai komponen JSX.

// Definisi default-nya kira-kira seperti ini:
namespace JSX {
  export type ElementType =
    // Tag HTML bawaan: 'div', 'span', dll.
    | keyof IntrinsicElements
    // Function component
    | (props: any) => Element
    // Class component
    | new (props: any) => ElementClass;
}

// Maknanya:
{/* <div /> valid karena div ada di IntrinsicElements */}
{/* <MyComponent /> valid jika: */}
//  - MyComponent adalah function yang menerima props
//  - atau class dengan constructor props

//3. Catatan penting tentang props
// JSX.ElementType tidak menentukan tipe props.
// Tipe props selalu diambil dari parameter pertama fungsi atau constructor komponen:

function MyComponent(props: { title: string }) {
  return <div>{props.title}</div>;
}

//Jika props tidak sesuai, error tetap terjadi, meskipun ElementType valid.