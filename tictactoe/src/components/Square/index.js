export default function Square({ onClick, value }){
    return (
        <div>
            <button onClick={ onClick }>{ value }</button>
        </div>
    )
};