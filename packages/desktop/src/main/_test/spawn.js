const { spawn } = require('child_process')

const command = `go run /Users/xulei/jungle/githubproject/my/zz-cipher/packages/backend/test/main1.go`

const cmd = spawn('sh', ['-c', command])

let output = ''

cmd.stdout.on('data', (data) => {
  output += data.toString()
})

cmd.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

cmd.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
  console.log('output:', output)
})
