import React from 'react';
import clx from 'classnames';
import css from "../../styles/home-style.module.scss";

const planets = [
    {
        name: "Mercury",
        orbit: {
            width: 140,
            height: 140,
        },
        size: 20,
        image: "https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-mercury-planet-png-image_5683897.png",
        left: -10,
        top: 42,
        color: 'silver',
    },
    {
        name: "Venus",
        orbit: {
            width: 220,
            height: 220,
        },
        size: 25,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdba954f-a7f5-417a-9337-8b719326f6be/de8uv1u-b46adc7c-aef7-4d86-b740-4735a1c06d1c.png/v1/fill/w_1280,h_1280,strp/venus_png_overlay__by_lewis4721_de8uv1u-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYmE5NTRmLWE3ZjUtNDE3YS05MzM3LThiNzE5MzI2ZjZiZVwvZGU4dXYxdS1iNDZhZGM3Yy1hZWY3LTRkODYtYjc0MC00NzM1YTFjMDZkMWMucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvY2RiYTk1NGYtYTdmNS00MTdhLTkzMzctOGI3MTkzMjZmNmJlXC9sZXdpczQ3MjEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.r6YmNlwmvrsqJPFNAZxhd6ws_AxC6fKDpiafKC-rbAc",
        left: 0,
        top: 42,
        color: "#FFFFE0"
    },
    {
        name: "Earth",
        orbit: {
            width: 300,
            height: 300
        },
        size: 30,
        image: "https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987961jvz5u.png",
        left: 0,
        top: 60,
        color: "#339FFF",
    },
    {
        name: "Mars",
        orbit: {
            width: 380,
            height: 380,
        },
        size: 27,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mars_transparent.png",
        left: 0,
        top: 100,
        color: "#fda600",
    },
    {
        name: "Jupiter",
        orbit: {
            width: 480,
            height: 480,
        },
        size: 40,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Jupiter.png/1200px-Jupiter.png",
        left: 0,
        top: 120,
        color: "#bcafb2",
    },
    {
        name: "Saturn",
        orbit: {
            width: 580,
            height: 580,
        },
        size: 45,
        image: "https://static.vecteezy.com/system/resources/previews/008/507/062/original/3d-cartoon-planet-saturn-planet-with-rings-3d-illustration-3d-render-png.png",
        left: 0,
        top: 160,
        color: "transparent",
    },
    {
        name: "Uranus",
        orbit: {
            width: 680,
            height: 680,
        },
        size: 32,
        image: "https://www.pngmart.com/files/22/Uranus-PNG-HD.png",
        left: 0,
        top: 220,
        color: "blue",
    },
    {
        name: "Neptune",
        orbit: {
            width: 780,
            height: 780,
        },
        size: 32,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/3D_Neptune.png/243px-3D_Neptune.png",
        left: 0,
        top: 270,
        color: "grey",
    },
]

export const Home = () => {
  return (
    <section className={css.container}>
        <div className={css.sun} />
        {
            planets.map((el, idx) => {
                const {
                    top,
                    name, 
                    left,
                    size,
                    orbit,
                    image,
                    color,
                } = el;
                return (
                    <div className={css.planet_outline} style={{
                        width: orbit.width, 
                        height: orbit.height, 
                    }} key={idx}>
                        <div className={clx(css.planet)} style={{
                            top,
                            left,
                            width: size, 
                            height: size, 
                            boxShadow: `0 0 20px ${color}`,
                            backgroundImage: `url(${image})`,
                        }}>
                            <p className={css.name}>{ name }</p>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}
