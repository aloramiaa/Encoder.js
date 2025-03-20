// Import encode and decode functions
import { encode as encd, decode as decd } from "https://js.is-a.dev/encoder/latest";
const encode: (text: string, key?: string, compress?: boolean) => string = encd;
const decode: (text: string, key?: string) => string = decd;

// Example usage
const text = "Hello, Encoder.js!";
const key = "TOP SECRET KEY";
const encoded = encode(text, key, true);
const decoded = decode(encoded, key);

console.log(` text:   "${text}"\n  key:   "${key}"\nencoded: "${encoded}"\ndecoded: "${decoded}"`);