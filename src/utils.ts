const scrollTo = (id: string) => {
  console.log(id)
  const session = document.querySelector("#" + id)

  if (session !== null) {
    const topPos = session.getBoundingClientRect().top + window.scrollY
    console.log(topPos)
    window.scrollTo({
      top: topPos - 20,
      behavior: "smooth",
    })
  }
}

export default scrollTo
