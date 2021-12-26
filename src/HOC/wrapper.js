const Wrapper = ({ children , extend }) => {
    return (
        <div className={`w-10/12 mx-auto h-full  ${extend} relative`}>
            {children}
        </div>
    );
}

export default Wrapper;