import React from 'react';
import './style.scss'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { FaPlusCircle } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import LottieFile from '../LottieFile';



const Main = () => {
    return (
        <main className="main">
            <section className="animation">
                <LottieFile />
                <div className="markenting">
                    <h2>Doe sangue, salve vidas!</h2>
                    <p>Campanha de doação de sangue - 2021</p>
                </div>

            </section>

            <section className="form">
                <header>
                    <BsBookmarkHeartFill className="BsBookmarkHeartFill" />
                    <h2>A sua doação importa</h2>
                    <p className="text">Mais de 38.000 doações são necessárias todos os dias. Apenas 1,9% da população <br/>brasileira doa sangue.</p>
                    <p className="convit"><FaPlusCircle className="FaPlusCircle"/>Entre na lista de doadores</p>
                </header>

                <form>
                    <input type="text" placeholder="Nome"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="text" placeholder="Tipo sanguíneo"></input>
                    <button>Quero Ajudar</button>
                </form>

                <div className="result">
                    <p><AiFillHeart className="AiFillHeart" />Últimos doadores</p>
                    <div className="blood-container"><div className="blood-type">( O+ ) Fernada Silva</div><div className="blood-type">( B- ) Sandro Costa</div></div>
                    <div className="blood-container"><div className="blood-type">( AB+ ) Gustavo Alves</div><div className="blood-type">( O- ) Pedro Alencar</div></div>                   
                </div>

            </section>

        </main>
    )
}

export default Main;