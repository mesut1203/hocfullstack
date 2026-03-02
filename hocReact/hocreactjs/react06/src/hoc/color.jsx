export const color = (ParentComponent) => {
    return (props) => {
        return (
            <div style={{ color: "red" }}>
                <ParentComponent {...props} />;
            </div>
        );
    };
};

// Nhận vào 1 components và trả về 1 component mới
