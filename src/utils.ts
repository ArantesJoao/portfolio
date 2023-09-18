const scrollTo = (id: string) => {
  const session = document.querySelector("#" + id)

  if (session !== null) {
    const topPos = session.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: topPos - 20,
      behavior: "smooth",
    })
  }
}

export default scrollTo
