import React from "react";

import Aurora from "../img/aurora-boreal.jpg";

export default function Banner() {
    return (
        <div>
            <div class="card text-bg-dark">
            <img src={Aurora} class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h2 class="card-title">Aurora Boreal</h2>
            </div>
            </div>
        </div>
    )
}