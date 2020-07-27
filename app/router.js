// const orm = require('./orm');
const wordlist = require( './wordlist.json' )


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

        // const saveResult = await orm.saveDog( dogData )
        const saveResult = { _id: true }
        console.log( '[POST /api/dogs] saveResult: ', saveResult )

        if( saveResult._id ){
            res.send( { status: true, message: 'Dog saved' } )
        } else {
            res.send( { status: false, message: 'Someting went wong' } )
        }

    })
}

module.exports = router