

const BoxForChildren = ( {children} ) => {
    const styles = { border: 'green 2px solid', padding: '1rem', margin: '1rem' };

  return (
    <div style={styles}>
        <h3>Box for children</h3>
        {children}
        <h3>Middle</h3>
        {children[2]}
        <h3>footer</h3>
    </div>
  )
}
export default BoxForChildren