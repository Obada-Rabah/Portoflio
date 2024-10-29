import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/aboutImage.png")} 
            alt="Me with the laptop" className={styles.aboutImage} />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in bulding responsive
                            and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in developing fast and optimised back-end systems and APIs
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages, created designe
                            systems as well and I helped more than 20 company to 
                            increase thier sales
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}

