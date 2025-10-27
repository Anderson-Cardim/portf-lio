import './container-abount.styles.css'

export default function ContainerAbountI({number, children, ...props}) {

    return <div {...props} className="container-abount">
        <div>
            <h1 className='numer'>{number}+</h1>
        </div>
        <p>{children}</p>
    </div>
}