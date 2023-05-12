const { RotatingTriangles } = require('react-loader-spinner');

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
