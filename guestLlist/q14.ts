//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list:string[] = [`Azma`,`Sarosh`,`Sameed`]

for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ` + guest_list[i] + `, \nPlease have some food with us tomorrow at 8.00 clock.\nThankyou\nAzma sarosh\n`)
}

export{guest_list}