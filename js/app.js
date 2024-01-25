console.log('js loaded')
const game = {
    title: 'Guess the number!',
}
console.log(game)

//get values
game.title // this would get the value "Guess the number"
// of we want to log to the console
console.log(game.title)
console.log(game['title'])

// set values
game.biggestNum = 50;

game.lowestNum = 10;
game['guessedNumber'] = 6;
//set values

console.log(game)



const instagrampost = {
    username: 'hung',
    isVerified: true,
    description:'comments',
    pictures: ['pic1', 'pic2','pic3'],
    comments: [
        {username: 'username1', comments: 'Why you use a rope'},
        {username: 'username2', comments: '13 a warm up'},
        {username: 'username3', comments: 'Alex delete last pic'},
    print.isVerified = !true
    ]
}
instagrampost.comments.forEach(comments => {console.log(comments.username)})

// print pic3
console.log(instagrampost.pictures[2]);
// set a new value for the caption
instagrampost.caption = 'my new caption';
// print out 13 a warm up
console.log(instagrampost.comments[1].comment)
//set isVerified to its opposite value
instagrampost.isVerified = !instagrampost.isVerified
//Print out each username in the comments using the forEach metho
instagrampost.comments.forEach(function(comment){
	console.log(comment.username)
})