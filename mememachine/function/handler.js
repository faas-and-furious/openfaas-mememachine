const Jimp = require('jimp')
const request = require('request')
const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = (req, callback) => {
  req = JSON.parse(req)

  let filename = os.tmpdir() + '/meme-' + Date.now() + path.basename(req.image)
  let file = fs.createWriteStream(filename)

  const stream = request(req.image).pipe(file)
  let loadedFile

  stream.on('finish', () => {
    Jimp.read(filename)
      .then(image => {
        loadedFile = image
        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE)
      }).then(font => {
        loadedFile
          .print(font, 10, 10, req.top)
          .print(font, 10, loadedFile.bitmap.height - 200, req.bottom)
          .write(filename)
      }).then(() => {
        fs.readFile(filename, (err, data) => {
          if (err) return callback(err)
          else {
            callback(undefined, data)
            fs.unlink(filename)
          }
        })
      })
  })
}
