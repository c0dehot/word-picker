// const orm = require('./orm');

function router( app ){
    app.get('/api/words', async function(req, res) {
        console.log( '[GET] getting word')
        // const list = await orm.getDogList()
        const list = [ "word1" ][0]
        //! TODO add the orm method for getting a word
        res.send( list )
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