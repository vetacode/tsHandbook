type World = 'world';
type Greeting = `hello ${World}`;
// type Greeting = "hello world"

//UNION with TEMPLATE LITERAL
type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

//UNION INTERPOLATED POSITION
type Lang = 'en' | 'ja' | 'pt';

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

//1. STRING UNIONS IN TYPES

const passedObject = {
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
};

const person = makeWatchedObject({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
});

// makeWatchedObject has added `on` to the anonymous Object

person.on('firstNameChanged', (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});

type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
  ): void;
};

/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

person.on('firstNameChanged', () => {});

// Prevent easy human error (using the key instead of the event name)
person.on('firstName', () => {}); //warn wrong arguments
// Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

// It's typo-resistant
person.on('frstNameChanged', () => {}); //warn typos
// Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

//2. INFERENCE WITH TEMPLATE LITERALS

type PropEventSource2<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject2<Type>(
  obj: Type
): Type & PropEventSource2<Type>;

const person2 = makeWatchedObject2({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
});

person2.on('firstNameChanged', (newName) => {
  // (parameter) newName: string
  console.log(`new name is ${newName.toUpperCase()}`);
});

person2.on('ageChanged', (newAge) => {
  // (parameter) newAge: number
  if (newAge < 0) {
    console.warn('warning! negative age');
  }
});

//3. INTRINSIC STRINGMANIPULATION TYPES
{
  //a. Uppercase<StringType>
  type Greeting = 'Hello, world';
  type ShoutyGreeting = Uppercase<Greeting>;
  //        ^  type ShoutyGreeting = 'HELLO, WORLD';

  type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
  type MainID = ASCIICacheKey<'my_app'>;
  //      ^  type MainID = "ID-MY_APP"
}
