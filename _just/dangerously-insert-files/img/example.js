// Import encode and decode functions
import { encode, decode } from "https://js.is-a.dev/encoder/latest";

// Example usage
const text = "Hello, Encoder.js!";
const key = "TOP SECRET KEY";
const encoded = encode(text, key, true);
const decoded = decode(encoded, key);

console.log(` text:   "${text}"\n  key:   "${key}"\nencoded: "${encoded}"\ndecoded: "${decoded}"`);