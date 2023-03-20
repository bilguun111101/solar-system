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
        left: '43%',
        top: '42%',
    },
    {
        name: "Venus",
        orbit: {
            width: 220,
            height: 220,
        },
        size: 30,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdba954f-a7f5-417a-9337-8b719326f6be/de8uv1u-b46adc7c-aef7-4d86-b740-4735a1c06d1c.png/v1/fill/w_1280,h_1280,strp/venus_png_overlay__by_lewis4721_de8uv1u-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYmE5NTRmLWE3ZjUtNDE3YS05MzM3LThiNzE5MzI2ZjZiZVwvZGU4dXYxdS1iNDZhZGM3Yy1hZWY3LTRkODYtYjc0MC00NzM1YTFjMDZkMWMucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvY2RiYTk1NGYtYTdmNS00MTdhLTkzMzctOGI3MTkzMjZmNmJlXC9sZXdpczQ3MjEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.r6YmNlwmvrsqJPFNAZxhd6ws_AxC6fKDpiafKC-rbAc",
        left: '40%',
        top: '42%',
    }
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
