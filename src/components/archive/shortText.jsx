import React from 'react'
import { Link } from "react-router-dom";



export default function ShortText() {
    return (
        <div className='short-text'>
            <Link to="/archive-text">
                <div className="title">
                    <h3 className='headline'>Naslov teksta</h3>
                    <img src="/staznam.rs/img/logo/vectorpaint.png" alt="text-img" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, obcaecati numquam corrupti rerum quisquam inventore
                pariatur, perferendis temporibus possimus dignissimos nulla eaque
                incidunt alias quia est. Veritatis pariatur ut dolor facilis autem
                culpa illo, sit quibusdam necessitatibus, perspiciatis enim maiores,
                sapiente magnam cum similique quaerat in libero nihil corporis
             officiis.</p>
            </Link>




        </div>
    )
}
