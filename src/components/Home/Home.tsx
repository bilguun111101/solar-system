import React from 'react';
import clx from 'classnames';
import css from "../../styles/home-style.module.scss";
import planets from "./Planets.json";

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
