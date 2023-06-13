import './style.css';

export default function Rodape() {
    return (
        <footer>
            <div className=' limitar-secao container-logo-informacoes'>
                <img src='assets/logo.png' alt='logomarca' />
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Site Gelaria, 00</p>
                    <p>São Paulo, SP 00000-000</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>camilae.silva@gmail.com</p>
                    <p>Tel: (99) 99999-9999</p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className='limitar-secao direito-autoral'>
                <p>Gelateria. Orgulhosamente desenvolvido por @camilaedusilva</p>
            </div>
        </footer>
    )
}