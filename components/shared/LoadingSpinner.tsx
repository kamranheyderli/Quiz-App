import { Spin } from 'antd';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <Spin 
            size='large'
                style={{
                    width: '100px',
                    height: '100px',
                    fontSize: '90px', 
                }}
            />
        </div>
    );
};

export default LoadingSpinner;
