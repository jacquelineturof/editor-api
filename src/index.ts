import express from 'express'

export const serve = (port: number, filename: string, dir: string) => {
    const app = express()
    console.log(filename)
    app.listen(port, () => {
        console.log('Listening on port, ', port)
    })
}