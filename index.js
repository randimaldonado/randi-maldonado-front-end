

new TypeIt('#titulo')
.type('')
.exec(async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, 2000)
  });
})
.type('RANDI MALDONADO')
.go();

