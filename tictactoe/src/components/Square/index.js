export default function Square({ move, value }){
    return (
        <div>
            <button onClick={ move }>{ value }</button>
        </div>
    )
};