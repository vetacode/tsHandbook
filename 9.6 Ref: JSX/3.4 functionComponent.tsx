//Function Component (FC) adalah:
// Komponen React yang berupa fungsi
// Parameter pertama = props
// Wajib return JSX (JSX.Element)

function Hello(props: { name: string }) {
  return <div> Hello {props.name} </div>;
}
//cara pakai:
<Hello name='Veta' />;

// Kalau name tidak dikirim atau salah tipe → TypeScript error

//Type checking di Function Component
// Props dicek dari parameter fungsi
// Return harus bisa dianggap sebagai JSX.Element

// Contoh:
function Button(props: { label: string }) {
  return <button>{props.label}</button>;
}

//Function Component + overload (advanced)
// Satu komponen bisa punya beberapa bentuk props:

type ClickableProps = {
  children: JSX.Element | JSX.Element[]; //JSX error coz blm install npm install -D @types/react
};

type HomeProps = ClickableProps & {
  home: JSX.Element;
};

type SideProps = ClickableProps & {
  side: string;
};

function MainButton(props: HomeProps): JSX.Element;
function MainButton(props: SideProps): JSX.Element;
function MainButton(props: ClickableProps) {
  return <button>{props.children}</button>;
}

//TypeScript akan memilih overload yang cocok berdasarkan props yang dipakai.

//Catatan penting
// Dulu disebut SFC (Stateless Function Component)
// Sekarang tidak dianggap stateless lagi (karena ada hooks)
// Tipe SFC / StatelessComponent → deprecated

//📌 Intinya:
// Function Component = fungsi yang return JSX
// Props = parameter fungsi
// Bisa pakai overload untuk variasi props
