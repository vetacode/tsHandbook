//Attribute type checking, maksudnya:
// Saat kita menulis

<Something attr='value' />;

//TypeScript ngecek:
// “Attribute apa yang boleh dipakai?
// Wajib atau opsional?
// Tipenya apa?”

//Cara ngeceknya beda antara:
// - Intrinsic element (<div />, <foo />)
// - Value-based element (<MyComponent />)

//1. Intrinsic elements (huruf kecil)
//Attribute diambil dari JSX.IntrinsicElements

// Contoh:
interface JSX.IntrinsicElements {
  foo: {
    bar?: boolean;
  };
}

// Artinya:
{/* <foo /> boleh punya attribute bar */}
// bar opsional
// Tipe boolean

<foo bar />;      // ✅ ok (boolean true)
<foo />;          // ✅ ok
{/* <foo bar="yes" /> // salah tipe
<foo baz />       // tidak dikenal */}


//2. Value-based elements (komponen)
<MyComponent foo="bar" />
//TypeScript cari tipe props dari komponen itu.

//Dari mana?
// Default (TS ≥ 2.8):
//  - parameter pertama function
//  - atau constructor class
// Atau dari properti khusus yang kamu tentukan:
JSX.ElementAttributesProperty

//Contoh dengan props di class
interface JSX.ElementAttributesProperty {
  props;
}

class MyComponent {
  props: {
    foo?: string;
  };
}

<MyComponent foo="bar" />; // ok
<MyComponent foo={123} />; // error: salah tipe
<MyComponent />;           // aman: foo opsional

//3. Required vs Optional attributes
interface JSX.IntrinsicElements {
  foo: {
    requiredProp: string;
    optionalProp?: number;
  };
}

<foo requiredProp="bar" />;              // Ok
<foo requiredProp="bar" optionalProp={0} />; // Ok
<foo />;                                // error: requiredProp hilang
<foo requiredProp={0} />;               // error: salah tipe
<foo requiredProp="bar" unknownProp />; // error: tidak ada di tipe

//4. Attribute dengan nama aneh (data-, aria-)
<foo requiredProp="bar" data-id="123" />; // Ok

//Kenapa boleh?
// Karena data-id bukan identifier JS valid
// TypeScript tidak ngecek attribute model ini

//5. Attribute khusus framework (key, ref)
//Ini bukan props biasa.

//JSX.IntrinsicAttributes:
// Untuk attribute umum (contoh: key)

//JSX.IntrinsicClassAttributes<T>:
// Khusus class component
// Contoh React: ref

// Biasanya: Semua property di sini opsional

//6. Spread props (...props)
const props = { requiredProp: "bar" };
<foo {...props} />; // Ok

const badProps = {};
<foo {...badProps} />; // Error: requiredProp hilang
// TypeScript tetap ngecek isi objeknya.

//Ringkasan:
// Intrinsic element → JSX.IntrinsicElements
// Component → props / parameter function
// Required & optional dicek
// Tipe attribute dicek
// data-* bebas
// key & ref pakai interface khusus
// Spread tetap di-type-check