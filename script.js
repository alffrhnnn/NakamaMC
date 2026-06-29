/* LOADER */

setTimeout(() => {

    const loader =
        document.getElementById("loader")

    if (loader) {

        loader.classList.add("hidden")

    }

}, 2500)



/* CARD POPUP EFFECT */

document

    .querySelectorAll(

        ".box,.role,.social-card,.stats div"

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

                    `perspective(1000px)
rotateX(${-y}deg)
rotateY(${x}deg)
translateY(-8px)`

            }

        )



        card.addEventListener(

            "mouseleave",

            () => {

                card.style.transform =

                    "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"

            }

        )

    })



/* BURGER MENU */

const burger =
    document.getElementById("burger")

const menu =
    document.getElementById("menu")

if (burger && menu) {

    burger.addEventListener(

        "click",

        () => {

            menu.classList.toggle("active")

        }

    )

}