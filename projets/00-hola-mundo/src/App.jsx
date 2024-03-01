import './App.css' 
export function App ()  {
    return(
      <article className='tw-followCard' >
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="avatar de samu"  src="https://avatars.githubusercontent.com/u/102266130?v=4"/>
            <div className='tw-followCard-info'>
                <strong>Samuel Rodriguez</strong>
                <span className='tw-followCard-infoUserName'>@samulu</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
      </article> 
    )
}