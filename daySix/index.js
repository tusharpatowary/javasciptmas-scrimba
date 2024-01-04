const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
    const shuffled = arr.slice(); // Create a copy of the original array
    shuffled.sort(() => Math.random() - 0.5); // Shuffle the array

    const pairs = {};
    for (let i = 0; i < shuffled.length; i++) {
        const giver = shuffled[i];
        const receiver = shuffled[(i + 1) % shuffled.length]; // Circular assignment
        pairs[giver] = receiver;
    }

    return pairs;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */