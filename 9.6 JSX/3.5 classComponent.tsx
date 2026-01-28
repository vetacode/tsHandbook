//Class Component di TypeScript
// Saat TypeScript melihat JSX seperti:

<MyComponent />;

//TS membedakan 2 hal:

//1. Element class type
//👉 Apa MyComponent itu?
// Kalau class → constructor + static
// Kalau function → fungsi itu sendiri

class MyComponent {}
// class type = MyComponent

function MyFactoryFunction() {}
// class type = MyFactoryFunction

//2. Element instance type
//👉 Hasil akhirnya apa?
// Class → instance dari new MyComponent()
// Function → nilai return dari fungsi

class MyComponent {
  render() {}
}
// instance type = { render(): void }

function MyFactoryFunction() {
  return { render: () => {} };
}
// instance type = { render(): void }


//Aturan penting JSX
// Instance type HARUS cocok dengan JSX.ElementClass

// Default-nya:
interface JSX.ElementClass {}

// Tapi biasanya diperketat, misalnya:
interface JSX.ElementClass {
  render: any;
}
//Artinya: Komponen wajib punya render

//Contoh valid
class MyComponent {
  render() {}
}

function MyFactoryFunction() {
  return { render: () => {} };
}

<MyComponent />;        // Aman
<MyFactoryFunction />;  // Aman

// Contoh tidak valid
class NotAValidComponent {}

function NotAValidFactoryFunction() {
  return {};
}
<NotAValidComponent />;        // ❌ tidak ada render
<NotAValidFactoryFunction />;  // ❌ return kosong

//Intinya :
// JSX ngecek hasil akhirnya, bukan cuma bentuknya
// Hasil (instance type) harus sesuai JSX.ElementClass
// Biasanya berarti: punya render()
// Kalau tidak → JSX error

//Yang bener:
class validComponent{
  render() {
    return <div>Hello</div>
  }
}

function validFactoryFunction() {
  return <div>Hello</div>
  //Tidak perlu render() karena fungsi itu sendiri adalah render-nya
}

