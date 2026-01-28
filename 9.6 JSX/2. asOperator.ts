// Type assertion dipakai buat “memberi tahu” TypeScript tipe suatu nilai.

// Biasanya bisa pakai:
const foo = <Foo>bar;
// Tapi di file .tsx, syntax <Foo> bentrok dengan JSX, jadi tidak boleh dipakai.

// Solusinya pakai as operator:
const foo = bar as Foo;
// as bisa dipakai di .ts dan .tsx, dan fungsinya sama persis dengan <Foo>.

// Intinya: di React/TSX, selalu pakai as
