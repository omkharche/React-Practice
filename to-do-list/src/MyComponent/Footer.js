import React from 'react'
export default function Footer({}) {

    let footerStyle = {
        position:'absolute',
    
        width:'100%'
    }
    return (
    <>
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center" style={{margin:'0px'}}>
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    </>
  )
}

