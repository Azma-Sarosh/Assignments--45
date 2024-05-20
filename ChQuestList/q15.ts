//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

// original quest list

let quest_list:string[] = [`Sarosh`,`Sameed`,`Safaan`]

for (let i=0; i<quest_list.length; i++){
    console.log(`Dear ` + quest_list[i] + `, \nPlease have some food with us tomorrow at 8.00 clock.\nThankyou\nAzma sarosh\n`)
}
// print statement

let not_present:string = `Sarosh`
let new_quest : string = `Salaar`

console. log(`Please note that ${not_present} couldn,t able to join us on dinner tomorrow \n`)
console.log(`\t\tNew Quest List`)

for (let i=0; i<quest_list.length; i++){
    quest_list[0]=new_quest
    console.log(`Dear ` + quest_list[i] + `, \nPlease have some food with us tomorrow at 8.00 clock.\nThankyou\nAzma sarosh\n`)
}