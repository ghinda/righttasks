import fs from 'fs/promises'

const args = process.argv.slice(2)
let manifest = JSON.parse(await fs.readFile('./manifest.json', 'utf8'))
const firefox = {
  "browser_specific_settings": {
    "gecko": {
      "id": "jid1-mxLXoM0pmaQU1Q@jetpack"
    }
  }
}

if (args.length && args[0] === 'firefox') {
  manifest = {...manifest, ...firefox}
}

await fs.writeFile('./extension/manifest.json', JSON.stringify(manifest, null, 2))
