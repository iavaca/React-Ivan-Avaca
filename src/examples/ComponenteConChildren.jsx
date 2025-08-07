const ComponenteConChildren = (props) => {
  return (
    <div className="componente-con-children">
        <h1>Componente con children</h1>
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px',display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {props.children}</div>
     
    </div>
  );
}
export default ComponenteConChildren;