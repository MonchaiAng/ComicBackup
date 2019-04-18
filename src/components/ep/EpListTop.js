import React from 'react';
import EpTop from './EpTop';

const EpListTop =({data, onRouteChange}) =>{
	return (
        <div>
            {
                data.map((user,i) =>{ 
                    return (
                        <EpTop 
                            key ={i}
                            _id={data[i]._id}
                            // id={data[i].id} 
                            // ch={data[i].ch}
                            name={data[i].name} 
                            view={data[i].view}
                            img={data[i].img} 
                            onRouteChange={onRouteChange}
                        />
                    );
                })
            }
        </div>
    );
}
export default EpListTop;