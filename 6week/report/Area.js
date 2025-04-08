import { useState } from "react";
const Area = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    return (
        <div>
            <div style={{ width: '180px', height: '180px', border: '1px solid black' }}>
            <canvas
                width= {size.width}
                height= {size.height}
                style={{backgroundColor:"pink",border:"1px solid black",margin:"10px"}}
            />
            </div>
            
            
            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>
            <button
                onClick={() => {
                    const newWidth = size.width + 20;
                    if (newWidth < 150) {
                        setSize({ ...size, width: newWidth });
                        
                    }else {
                        setSize({...size,width:149});
                    }
                }}
            >너비 증가
            </button>
            <button
                onClick={() => {
                    const newWidth = size.width - 20;
                    if (newWidth >= 0) {
                        setSize({ ...size, width: newWidth });
                    }else{
                        setSize({...size,width:0});
                    }
                }}
            >너비 감소
            </button>
            <button
                onClick={() => {
                    const newheight = size.height + 10;
                    if (newheight < 150) {
                        setSize({ ...size, height: newheight });
                    }else{
                        setSize({...size,height:149});
                    }
                }}
            >
                높이 증가
            </button>
            <button
                onClick={() => {
                    
                    const newheight = size.height - 10;
                    if (newheight > 0) {
                        setSize({ ...size, height: newheight });
                    }else{
                        setSize({...size,height:1});
                    }
                }}
            >
                높이 감소
            </button>
            
        </div>
        
        
    );
};
export default Area;
