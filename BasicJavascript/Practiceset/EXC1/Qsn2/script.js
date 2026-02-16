const main2 = async () => {
    console.log(new Date().getSeconds())
    let a = await loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
      console.log(new Date().getSeconds())
      console.log(a)
}
main2()
