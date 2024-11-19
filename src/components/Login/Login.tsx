

export function Login(){

    return(
        <section >
                <form>
                    <h3>Login</h3>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 focus:border-b-4 focus:border-indigo-500 focus:border-x-0 focus:border-t-0 px-2 py-1 text-sm placeholder-gray-400 focus:outline-none"/>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 focus:border-b-4 focus:border-indigo-500 focus:border-x-0 focus:border-t-0 px-2 py-1 text-sm placeholder-gray-400 focus:outline-none"/>
                    <button onClick={(e)=>e.preventDefault()}>Login</button>
                </form>   
    </section>
    )
}