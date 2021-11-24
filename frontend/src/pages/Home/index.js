import React, { useEffect, useState } from 'react';
import './style.scss'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { FaPlusCircle } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import LottieFile from '../../components/LottieFile';
import CadastroServices from './services';



const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [tipo, setTipo] = useState("")

    const [users, setUsers] = useState([]);

    const EnviarDados = async () => {
        const payload = {
            id: "",
            name: name,
            email: email,
            tipo: tipo,
        }

        try {
            await CadastroServices.register(payload);
            setName("");
            setEmail("");
            setTipo("");

        } catch (error) {

            console.log(error)
        };

    }

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await CadastroServices.getUsers()
           setUsers(data);    
        }

        fetchUsers();
    }, [])

  

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
                    <p className="text">Mais de 38.000 doações são necessárias todos os dias. Apenas 1,9% da população <br />brasileira doa sangue.</p>
                    <p className="convit"><FaPlusCircle className="FaPlusCircle" />Entre na lista de doadores</p>
                </header>

                <form>
                    <div className="form_div">
                        <input type="text" className="form_input" placeholder=" " onChange={(e) => setName(e.target.value)}></input>
                        <label className="form_label">Nome</label>
                    </div>
                    <div className="form_div">
                        <input type="email" className="form_input" placeholder=" " onChange={(e) => setEmail(e.target.value)}></input>
                        <label className="form_label">E-mail</label>
                    </div>
                    <div className="form_div">
                        <input type="text" className="form_input" placeholder=" " onChange={(e) => setTipo(e.target.value)}></input>
                        <label className="form_label">Tipo Sanguíneo</label>
                    </div>

                    <button onClick={EnviarDados}>Quero Ajudar</button>
                </form>

                <div className="result">
                    <p><AiFillHeart className="AiFillHeart" />Últimos doadores</p>

                    {users.map(()

                    )}

                    <div className="blood-container">
                        <div className="blood-type">( O+ ) Fernada Silva</div>
                        <div className="blood-type">( B- ) Sandro Costa</div>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Home;