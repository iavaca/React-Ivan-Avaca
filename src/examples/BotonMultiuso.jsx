const BotonMultiuso = (props) => {
console.log(props);




    const { color, padding, borderRadius } = props;
    const styles = {
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding,
        borderRadius,
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s easse',
    }
    return (
        <>   
         <button style={styles} onClick={props.onClickHandler} onPointerMove={props.move}>mostrar</button>
        </>
    )
}
export default BotonMultiuso