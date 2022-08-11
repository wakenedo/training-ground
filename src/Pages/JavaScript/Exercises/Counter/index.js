import { Link } from "react-router-dom"

const html = '/src/Pages/JavaScript/Exercises/Counter/index.html'

function Counter() {

    return (

        <>
            <h1>JS Counter - Example</h1>
            <Link
                to={html}
            >
                <p>Open the working counter</p>
            </Link>
            <div
                style={{
                    maxWidth: '200px',
                    margin: '0 auto',
                    justifyContent: 'center',


                }}

            >
                <div
                    style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                        fontSize: '3rem'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#e6e6e6',
                            border: '1px solid #808080',
                            width: '60px'
                        }}
                    >
                        -
                    </div>
                    <div>
                        0
                    </div>
                    <div
                        style={{
                            backgroundColor: '#e6e6e6',
                            border: '1px solid #808080',
                            width: '60px'
                        }}
                    >
                        +
                    </div>

                </div>
            </div>

        </>
    )
}

export default Counter