# Importing and using the encoder script in Bash

# Define the script URL
SCRIPT_URL="https://js.is-a.dev/encoder/latest"

# Function to encode text
encode() {
    local text="$1"
    local key="$2"
    local compress="$3"
    curl -s "$SCRIPT_URL" | node -e "import { encode } from '$SCRIPT_URL'; console.log(encode('$text', '$key', $compress));"
}

# Function to decode text
decode() {
    local text="$1"
    local key="$2"
    curl -s "$SCRIPT_URL" | node -e "import { decode } from '$SCRIPT_URL'; console.log(decode('$text', '$key'));"
}

# Example usage
text="Hello, Encoder.js!"
key="TOP SECRET KEY"
encoded=$(encode "$text" "$key" true)
decoded=$(decode "$encoded" "$key")

# Output results
echo " text:   \"$text\""
echo " key:   \"$key\""
echo "encoded: \"$encoded\""
echo "decoded: \"$decoded\""
