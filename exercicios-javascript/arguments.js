console.log(process.argv)

process.stdout.write('escrevendo com stdout')

process.stdin.on('data', (data) => {
    process.stdout.write(data)
  process.exit()
})
