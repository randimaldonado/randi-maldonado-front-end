

new TypeIt('#txt')
.type('')
.exec(async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, 1500)
  });
})
.type('Randi Maldonado')
.go();