setTimeout(() => {

    document
        .getElementById("loader")
        .classList
        .add("hidden")

}, 2500)



document

    .querySelectorAll(

        ".box,.role,.social-card"

    )

    .forEach(card => {

        card.addEventListener(

            "mousemove",

            e => {

                const r =
                    card.getBoundingClientRect()

                const x =
                    (e.clientX - r.left - r.width / 2) / 18

                const y =
                    (e.clientY - r.top - r.height / 2) / 18

                card.style.transform =
                    `
rotateX(${-y}deg)
rotateY(${x}deg)
`

            }

        )

        card.addEventListener(

            "mouseleave",

            () => {

                card.style.transform = ""

            }

        )

    })