//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


// Define the make_album function with an optional parameter for the number of tracks


function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    // Create an object describing the music album
    const album: Record<string, any> = {
        "artist": artist,
        "title": title
    };

    // If the number of tracks is provided, add it to the album object
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }

    // Return the album object
    return album;
}

// Make three dictionaries representing different albums and print each return value
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 12));
console.log(make_album("Artist3", "Album3", 8));


