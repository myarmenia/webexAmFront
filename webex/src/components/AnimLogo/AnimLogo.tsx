import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {forces, ParticleForce, ParticleOptions, Vector} from "react-particle-image";
import {logimg} from "../../images/images";
// import "./styles.css";

const particleOptions: ParticleOptions = {
    filter: ({x, y, image}) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 100;
    },
    color: ({x, y, image}) => "white",

    radius: () => Math.random() * 0.3 + 0.3,
    // mass: () => 30,
    // friction: () => 0.05,
    initialPosition: ({canvasDimensions}) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 150); // mkniki ashxatanq
};

function AnimLogo() {
    const {innerWidth, innerHeight} = useWindowSize();
    return (
        <ParticleImage
            style={{
                backgroundColor: 'transparent',

                // width: '100% !important',
                // height: '100% !important'
            }}
            src={logimg}

            // width={Number(600)}
            // height={Number(400)}
            scale={0.5}
            entropy={1}
            maxParticles={150000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}

        />

    );
}

export default AnimLogo







