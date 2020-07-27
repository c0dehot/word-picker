// const orm = require('./orm');
let wordlist = require( './wordlist.json' )


function router( app ){
    app.get('/api/words', async function(req, res) {
        console.log( '[GET] getting word')
        // const list = await orm.getDogList()
        const words = Object.keys(wordlist)
        const wordPick = Math.floor( words.length*Math.random() )
        const word = words[wordPick]
        //! TODO add the orm method for getting a word
        res.send( { status: true, word } )
    })

    app.post( '/api/words', async function( req, res ){
        console.log( '[POST /api/words] req.body: ', req.body )

        const newWord = req.body.newWord
        wordlist[newWord] = { type: "noun" }

        console.log( `all the words are: `, wordlist[newWord] )
        // const saveResult = await orm.saveDog( dogData )
        const saveResult = { _id: true }

        if( saveResult._id ){
            res.send( { status: true, message: 'Word saved' } )
        } else {
            res.send( { status: false, message: 'Something went wong' } )
        }

    })
}

module.exports = router