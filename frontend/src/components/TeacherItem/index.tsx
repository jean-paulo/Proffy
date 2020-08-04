import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/51427898?s=460&u=f5f63de61287a41c7cbc65a78956d7510fdd7b22&v=4" alt="Jean"/>
            <div>
                <strong>Jean Paulo</strong>
                <span>Química</span>
            </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br/> <br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, obcaecati? Nulla quae officiis magnam, 
                nostrum ullam modi sint illum excepturi error quis. Molestias optio corporis eos qui earum quis cupiditate.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        
    </article>
    );
};

export default TeacherItem;